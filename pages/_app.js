import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../src/component/Navigation';
import Logo from '../src/component/Logo';
import styles from '../pages/css/app.module.css';

function MyApp({Component, pageProps}) {
  const router = useRouter()
  return(
    <div className={styles.container}>
      <div className={styles.item}>
        <div class={styles.subitem}>
          <Logo size="medium" text='P A R K' onClick={() => router.push("/")}/>
        </div>
        <div class={styles.subitem}>
          <Navigation/>
        </div>
      </div>
      <div className={styles.item}>
      <Component {...pageProps} />  
      </div>      
    </div>      
  )
}

export default MyApp

// <Component {...pageProps} 는 어떻게 연결되어지는 것일까? -> 해당 부분은 index.js에서 연결되어 나오는 형태를 의미함