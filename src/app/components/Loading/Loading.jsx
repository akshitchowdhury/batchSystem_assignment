import { useEffect, useState } from 'react';

const Loading = ({ darkMode }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 80) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // Adjust the interval time to control the speed of the loading bar

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center">
        <img src="/assets/fire.svg" alt="fire" className="mr-2" />
        <p className={`text-${darkMode ? 'white' : 'black'} text-2xl font-bold`}>uifry</p>
      </div>
      <div className="w-full max-w-md mt-4">
        <div className="h-2 bg-red-500">
          <div
            className={`h-2 ${darkMode ? 'bg-white' : 'bg-black'}`}
            style={{ width: `${loadingProgress}%`, transition: 'width 0.7s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
