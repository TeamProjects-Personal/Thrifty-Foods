import { env, pipeline } from '@xenova/transformers';

// Optional: Configure environment for local models (recommended for production)
env.allowRemoteModels = false;   // Prevent accidental downloads
env.allowLocalModels = true;
// env.localModelPath = './models'; // Uncomment if you have pre-downloaded models locally

let classifier = null;

/**
 * Load the zero-shot image classification model (CLIP-based)
 * Call this once when your server starts
 */
export async function loadModel() {
  if (classifier) {
    console.log("Model already loaded");
    return;
  }

  try {
    console.log("Loading zero-shot image classification model...");

    classifier = await pipeline(
      'zero-shot-image-classification',
      'Xenova/clip-vit-base-patch16',   // Good balance of speed & accuracy
      {
        quantized: true,                 // Smaller & faster on CPU
        progress_callback: (data) => {
          if (data.status === 'downloading') {
            const percent = Math.round(data.progress || 0);
            console.log(`Downloading ${data.file}: ${percent}%`);
          } else if (data.status === 'ready') {
            console.log("Model loaded and ready!");
          }
        }
      }
    );

    console.log("Zero-shot image classification model loaded successfully");
  } catch (error) {
    console.error("Failed to load model:", error);
    throw error;
  }
}

/**
 * Predict freshness of a vegetable from image buffer
 * @param {Buffer} imageBuffer - Raw image buffer from multer (memoryStorage)
 * @returns {Promise<Array>} Array of predictions sorted by score
 */
export async function predictImage(imageBuffer) {
  if (!classifier) {
    throw new Error("Model not loaded. Call loadModel() first.");
  }

  if (!imageBuffer || !Buffer.isBuffer(imageBuffer)) {
    throw new Error("Invalid image buffer provided");
  }

  try {
    // The pipeline accepts: string (path/URL), RawImage, or Uint8Array / Buffer
    const results = await classifier(imageBuffer, [
      'fresh raw vegetable',
      'wilting or semi-fresh vegetable',
      'rotten or spoiled vegetable'
    ]);

    // Results are already sorted by score (highest first)
    return results;
  } catch (error) {
    console.error("Prediction failed:", error);
    throw error;
  }
}