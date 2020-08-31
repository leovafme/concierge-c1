import React, { useState, useEffect } from 'react';

function Timer() {
  const [myTime, setMyTime] = useState(Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setMyTime(Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [myTime]);

  return (
    <div>
      {myTime}
    </div>
  );
}

export default Timer;
