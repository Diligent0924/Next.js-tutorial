import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../src/component/Navigation';
import Logo from '../src/component/Logo';
import styles from '../pages/css/app.module.css';

export default function MyApp({Component, pageProps}) {

  return(
    <div className={styles.container}>
        <div class={styles.navigation}>
          <Navigation/>
        </div>
        <div>
          <Component {...pageProps} />  
        </div>
    </div>          
  )
}

// <Component {...pageProps} 는 어떻게 연결되어지는 것일까? -> 해당 부분은 index.js에서 연결되어 나오는 형태를 의미함