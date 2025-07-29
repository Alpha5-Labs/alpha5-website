'use client';

import { useEffect, useState } from 'react';

interface HomeData {
  message: string;
  company: string;
}

export default function Home() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('http://localhost:3001/home-message');
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error('Failed to fetch home data:', error);
        setHomeData({
          message: 'Something Amazing is Coming Soon',
          company: 'Alpha5 Labs',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="text-center space-y-8 p-8 max-w-4xl mx-auto">
        {/* Alpha5 Labs Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {homeData?.company || 'Alpha5 Labs'}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Message */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-light text-gray-200">
            {homeData?.message || 'Something Amazing is Coming Soon'}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We're building the future of innovation. Stay tuned for something extraordinary.
          </p>
        </div>

        {/* Animated Elements */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm">
          <p>alpha5labs.com</p>
        </div>
      </div>
    </main>
  );
}
