import React, { useEffect, useRef } from 'react';
import testMp4 from '../assets/videos/test.mp4';

const Hero = () => {
  // Create a ref to access the video element
  const videoRef = useRef(null);

  // Play the video when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
      <div className='w-[80%] flex flex-col justify-center items-start'>
        <h1 className="text-center text-[45px] font-bold mb-[-20px]">The New Standard</h1>
        <h2 className="text-center text-[30px] font-bold">of Your Digital World</h2>
      </div>
      <div className='w-screen flex justify-center items-center mt-20'>
        <video className="custom-video-size" ref={videoRef} autoPlay loop muted>
          <source src={testMp4} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Hero;
