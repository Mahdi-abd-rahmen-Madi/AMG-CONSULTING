import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Trust indicator */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium text-white">
          <Award className="w-4 h-4 text-yellow-400" />
          Trusted by 200+ MENA Companies
        </div>
        
        {/* Main heading with enhanced typography */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Scale Your Business
          </span>
          <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2">
            to 7-Figures
          </span>
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          Transform your marketing into a <span className="font-semibold text-white">predictable revenue engine</span> with 
          data-driven strategies that deliver measurable ROI across Tunisia and MENA.
        </p>
        
        {/* Social proof metrics */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">312%</div>
            <div className="text-sm text-blue-200">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">6</div>
            <div className="text-sm text-blue-200">Months to Results</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">200+</div>
            <div className="text-sm text-blue-200">Companies Scaled</div>
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
          Get Your Free Growth Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-200">Only 5 spots left this month</span>
          </div>
        </div>
        
        {/* Enhanced results banner */}
        <div className="relative">
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 backdrop-blur-sm border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center gap-3 text-white">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg font-semibold">
                Our clients see an average of 312% ROI increase within the first 6 months
        </span>
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg rotate-12 opacity-80"></div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 opacity-70"></div>
      </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
          }
          
          .text-xl {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero; 