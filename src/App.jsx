import React, { useState } from 'react';
import { Search, Shield, Clock, Star, CheckCircle, Users, MapPin, Phone, Mail, ChefHat, Sparkles, Baby, Heart } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { id: 'cook', name: 'Cook', icon: ChefHat, color: 'bg-orange-500', desc: 'Professional home cooks' },
    { id: 'cleaner', name: 'Cleaner', icon: Sparkles, color: 'bg-blue-500', desc: 'Trusted cleaning staff' },
    { id: 'babysitter', name: 'Babysitter', icon: Baby, color: 'bg-pink-500', desc: 'Verified childcare' },
    { id: 'eldercare', name: 'Elder Care', icon: Heart, color: 'bg-purple-500', desc: 'Compassionate caregivers' }
  ];

  const features = [
    { icon: Shield, title: 'Verified Workers', desc: 'All workers are background checked with NID and police clearance' },
    { icon: Star, title: 'Rated & Reviewed', desc: 'Read genuine reviews from real customers before booking' },
    { icon: Clock, title: 'Flexible Scheduling', desc: 'Book for hourly, daily, or monthly services as per your need' },
    { icon: CheckCircle, title: 'Quality Assured', desc: 'Trained professionals committed to excellent service' }
  ];

  const howItWorks = [
    { step: '1', title: 'Choose Service', desc: 'Select the type of service you need from our categories' },
    { step: '2', title: 'Pick a Worker', desc: 'Browse verified profiles with ratings and reviews' },
    { step: '3', title: 'Book & Schedule', desc: 'Choose your preferred date, time, and duration' },
    { step: '4', title: 'Get Service', desc: 'Verified worker arrives at your doorstep on time' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Ezz Sheba</span>
              <span className="ml-2 text-sm text-gray-500">সহজ সেবা</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-700 hover:text-green-600 transition font-medium">Sign In</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Trusted Home Services
              <span className="block text-green-600 mt-2">Right at Your Doorstep</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with verified, background-checked service workers in Dhaka. 
              From cooking to cleaning, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto bg-white rounded-full shadow-lg p-2 flex items-center">
              <MapPin className="w-6 h-6 text-gray-400 ml-4" />
              <input 
                type="text" 
                placeholder="Enter your location in Dhaka..."
                className="flex-1 px-4 py-3 outline-none"
              />
              <select 
                className="px-4 py-3 border-l border-gray-200 outline-none bg-transparent"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select Service</option>
                <option value="cook">Cook</option>
                <option value="cleaner">Cleaner</option>
                <option value="babysitter">Babysitter</option>
                <option value="eldercare">Elder Care</option>
              </select>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                500+ Verified Workers
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                4.8 Average Rating
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                10,000+ Happy Customers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional help for every household need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition cursor-pointer group">
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition">
                  View Workers →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-green-200" style={{ marginLeft: '2rem' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ezz Sheba?</h2>
            <p className="text-xl text-gray-600">Your safety and satisfaction are our top priorities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Join thousands of satisfied customers in Dhaka who trust Ezz Sheba for their home service needs
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Find Workers Now
            </button>
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition text-lg border-2 border-white">
              Become a Worker
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-white">Ezz Sheba</span>
              </div>
              <p className="text-sm">Connecting trusted service workers with households across Dhaka.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500 transition">Cooks</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Cleaners</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Babysitters</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Elder Care</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition">How It Works</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Safety</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +880 1XXX-XXXXXX
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ezzsheba.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Ezz Sheba. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;