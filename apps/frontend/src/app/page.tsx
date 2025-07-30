'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HomeData {
  message: string;
  company: string;
  tagline: string;
  year: number;
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
          message: 'Loading content...',
          company: 'Loading...',
          tagline: 'Loading tagline...',
          year: new Date().getFullYear(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

      return (
      <main className="min-h-screen bg-white text-black">
        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen px-6 pt-16 pb-32">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          {/* Logo Section */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <Image
                src="/Alpha5-logo.png"
                alt="Alpha5 Labs"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black">
                {homeData?.company || 'Loading...'}
              </h1>
              <div className="w-24 h-px bg-black mx-auto"></div>
            </div>
          </div>

          {/* Message Section */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed">
              {homeData?.message || 'Loading content...'}
            </h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
               {homeData?.tagline || 'Loading tagline...'}
             </p>
          </div>

                     {/* Wave Animation */}
           <div className="flex justify-center space-x-4">
             <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
           </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="mailto:contact@alpha5labs.com"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Send us an email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/Alpha5Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Alpha5-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Visit our GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
                         {/* Footer Text */}
             <div className="text-center">
                               <p className="text-xs text-gray-400">© {homeData?.year || new Date().getFullYear()} Alpha5 Labs</p>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
