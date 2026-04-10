import mongoose, { Mongoose } from "mongoose";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

import multer from 'multer';
import { loadModel, predictImage } from './aiModel.js';


const app = express();
const port = 3000;

// Load model when server starts
await loadModel();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mongoose.connect("mongodb://localhost:27017/test")
//.then(()=>console.log("Db connected"))
//.catch(err => console.log("error",err));


const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,     
        trim: true,
        lowercase: true    
    },
    Phone: {
        type: String,
        trim: true
    },
    Password: {
        type: String,
        required: true    
    },
    userType: {
        type: String,
    }
}, {
    timestamps: true   
});

UserSchema.index({ Email: 1 }, { unique: true });

const User = mongoose.model("User",UserSchema);


app.get("/",(req,res)=>{

    res.render('index', { title: 'home' }); 
});

app.get("/user",async (req,res)=>{
    const Users = await User.find({});

    res.send(`<p> ${Users.map(user =>`${user.Name} <br>`).join("")} <p>`);

});

app.get("/register",(req,res)=>{

    res.render('RegistrationPage', { title: 'Register' }); 
});

// In your main server file
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

app.post('/detect-food', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  try {
    const results = await predictImage(req.file.buffer);
    res.json({ 
      success: true,
      predictions: results 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      error: "Failed to analyze image",
      message: err.message 
    });
  }
});

app.post("/submit",async (req,res) =>{
    const body = req.body;

   const result =  await User.create({
        Name: body.Name,
        Email: body.Email,
        Phone: body.Phone,
        Password: body.Password,
        userType: body.userType,
    });
    
    console.log("RESULT: " + result);
    res.json({ 
        status: "success", 
        message: "Data received successfully!",
    });

});

app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
});
