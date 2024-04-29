import { useState, useEffect, useRef } from 'react';

// Easing function
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

const Services = () => {
  // Initial and end values for counts
  const initialValues = [0, 0, 0, 0];
  const endValues = [50, 4.8, 37, 10000];

  // State variables for counts
  const [count1, setCount1] = useState(initialValues[0]);
  const [count2, setCount2] = useState(initialValues[1]);
  const [count3, setCount3] = useState(initialValues[2]);
  const [count4, setCount4] = useState(initialValues[3]);

  // Ref for the element being observed
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start count animations when component is in view
          animateCount();
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    });

    const targetElement = document.querySelector('.count-animation-container');

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  const animateCount = () => {
    const duration = 5000; // Duration for all animations (5 seconds)

    // Function to handle count animation with easing
    const animate = (startValue, endValue, setter) => {
      const startTime = Date.now(); // Get the start time

      // Animation loop
      const loop = () => {
        const currentTime = Date.now(); // Get the current time
        const elapsedTime = currentTime - startTime; // Calculate elapsed time
        const progress = Math.min(1, elapsedTime / duration); // Calculate progress

        const easedProgress = easeInOutQuad(progress, 0, 1, 1); // Apply easing function

        const newValue = startValue + (endValue - startValue) * easedProgress; // Calculate new value

        setter(newValue); // Update the count

        // Continue animation if not finished
        if (progress < 1) {
          requestAnimationFrame(loop);
        }
      };

      // Start animation loop
      requestAnimationFrame(loop);
    };

    // Start count animations for each div
    animate(initialValues[0], endValues[0], setCount1);
    animate(initialValues[1], endValues[1], setCount2);
    animate(initialValues[2], endValues[2], setCount3);
    animate(initialValues[3], endValues[3], setCount4);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-around items-center text-white">
      <div className="w-[80%] flex justify-center items-center">
        <h1 className="text-red-500 text-[50px] font-bold">Services</h1>
      </div>
      <div className="w-screen flex justify-center items-center">
        <div className="w-[70%] flex justify-between item-center">
          <div className="bg-red-500 w-[180px] h-[280px] rounded-[10px]"></div>
          <div className="bg-red-500 w-[180px] h-[280px] rounded-[10px]"></div>
          <div className="bg-red-500 w-[180px] h-[280px] rounded-[10px]"></div>
        </div>
      </div>
      <div className="w-[80%] h-[500px] bg-blue-500"></div>
      <div className="w-[80%] flex justify-center items-center">
        <h1 className="text-[30px] font-bold">We Take Pride in Our Numbers</h1>
      </div>
      <div ref={targetRef} className="count-animation-container w-screen flex justify-center items-center">
        <div className="w-[80%] flex justify-around align-center">
          <div className="w-[200px] h-[150px] text-white text-[60px] text-center border-b-2 border-solid border-white ">
            {Math.round(count1) + "+"}
            <p className="text-[20px]">Returning clients</p>
          </div>
          <div className="w-[200px] h-[150px] text-white text-[60px] text-center border-b-2 border-solid border-white ">
            {count2.toFixed(1) + "/5"}
            <p className="text-[20px]">Avg. Review</p>
          </div>
          <div className="w-[200px] h-[150px] text-white text-[60px] text-center border-b-2 border-solid border-white ">
            {Math.round(count3)}
            <p className="text-[20px]">Countries operating</p>
          </div>
          <div className="w-[200px] h-[150px] text-white text-[60px] text-center border-b-2 border-solid border-white ">
            {Math.round(count4) + "+"}
            <p className="text-[20px]">Videos Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
