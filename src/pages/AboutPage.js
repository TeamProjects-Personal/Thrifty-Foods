import React from 'react';
import { CheckCircle, Eye, Leaf, Users, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">About THRIFTY FOODS</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A sustainable platform dedicated to reducing food waste and fighting hunger through community-driven food redistribution.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Sustainability concept" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              To create a world where no food goes to waste while people go hungry. We connect surplus food from restaurants, events, and donors with communities in need through a safe, efficient, and sustainable platform.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By leveraging technology and community partnerships, we're building a circular food economy that benefits everyone—from donors who reduce waste to recipients who receive nutritious meals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A future where food redistribution is seamlessly integrated into every community, creating a sustainable ecosystem where surplus food automatically reaches those who need it most.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision cities where food waste is virtually eliminated through smart coordination, and no one in our communities experiences food insecurity.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1488459711615-de64ef5993f7?auto=format&fit=crop&q=80&w=800" 
              alt="Community food sharing" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental responsibility is at the heart of our platform. Every meal saved reduces waste and carbon footprint.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of communities working together. Connection and collaboration make our mission possible.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                Driven by empathy and care for those in need. Every action we take is guided by compassion and human dignity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
