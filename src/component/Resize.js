import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';

export default function ResizedComponent(){
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // handleResize 함수를 debounce로 감싸고, 시간을 설정합니다 
  // 1000ms = 1sec
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <div>브라우저 화면 사이즈 x: {windowSize.width}, y: {windowSize.height}</div>
}