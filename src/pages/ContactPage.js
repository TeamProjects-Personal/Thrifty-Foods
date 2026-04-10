import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Question</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="technical">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-green-100"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-10">Reach out to us through any of these channels. We're here to help!</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-xl mr-5">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                  <p className="text-gray-600">KIT College, Kolhapur City, 416012, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-xl mr-5">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                  <p className="text-gray-600">+91 9226416891</p>
                  <p className="text-xs text-gray-400">Mon-Fri 9am-6pm IST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-xl mr-5">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-600">contact@thriftyfoods.org</p>
                  <p className="text-xs text-gray-400">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh broccoli" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="bg-gray-50 py-24 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Office Hours</h2>
          <p className="text-gray-600 mb-16">We're available to help during these hours</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Monday - Friday</h4>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Saturday</h4>
              <p className="text-gray-600">10:00 AM - 4:00 PM</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Sunday</h4>
              <p className="text-red-500 font-medium">Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
