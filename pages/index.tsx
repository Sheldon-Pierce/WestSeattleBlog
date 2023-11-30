// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './navbar';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Add a delay to simulate the fade-out effect
      setIsFadingOut(true);
      setTimeout(() => {
        setIsFadingOut(false);
      }, 500); // Adjust the delay (in milliseconds) as needed
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const handleExploreClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      router.push('/explore');
    }, 500); // Wait for the fade-out effect before navigation

    // You can adjust the delay (in milliseconds) to match the CSS transition duration
  };

  return (
    <>
    <div className={`main-page ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="flex flex-col items-center h-screen bg-cover bg-center bg-westseattle">
        <div className='content-container'>
          <div className='title'>
            <h1 className="text-4xl center font-bold text-blue-600">Welcome to West Seattle</h1>
          </div>
        </div>
        <div className='description center-content'>
          <p className="center-text">
            West Seattle is a vibrant neighborhood with a lot to offer. Explore its beautiful parks, enjoy local events, discover great restaurants, and much more!
          </p>
        </div>
        <div className="button center-content">
          <button className="explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>

      <style jsx>{`
        .main-page {
          max-width: 800px;
          margin: 0 auto;
          // padding: 2rem;
          transition: opacity 0.5s;
        }
        .fade-out {
          opacity: 0;
        }
        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .center-content {
          display: flex;
          justify-content: center;
          align-items; center;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: flex;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          display: flex;
        }
        .explore-button {
          display: flex;
          padding: 1rem 2rem;
          background-color: #0070f3;
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
          cursor: pointer;
        }
        .explore-button:hover {
          background-color: #0055b3;
        }
      `}</style>
    </div>
    </>
  );
};

export default HomePage;

