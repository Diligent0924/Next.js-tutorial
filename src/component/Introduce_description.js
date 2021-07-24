import React, { useEffect, useState } from 'react';
import {Header, Button} from 'semantic-ui-react'
import styles from '../component_css/Introduce_description.module.css'
import { useRouter } from "next/router";
import {debounce} from 'lodash';


export default function Introduce(props){
    const router = useRouter();

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight // 처음 넓이,길이로 window 작동안함(Server에서 먼저 사용됨)
      });
    
      const handleResize = debounce(() => {
        setWindowSize({
          width: 500,
          height: 300 //
        });
      },100)
      
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
          window.removeEventListener('resize', handleResize);
        }
      }, []);

      const headerstyle = {
          width :  windowSize.innerWidth,
          height : windowSize.innerHeight
      }

      const subheaderstyle = {
          paddingTop :  windowSize.innerHeight / 7
      }

    // 정적 스타일 -> css파일, 동적 스타일 -> JS내부에서 사용할 수 있도록 하자!
    return(
        <>
            <div className={styles.header} style={headerstyle}>
                <div className={styles.subheader} style={subheaderstyle}>
                    <b><Header as='h1' inverted color='grey'>{props.header}</Header></b>
                </div>
                <div>
                    <h4>{props.children}</h4>
                </div>
                <div className={styles.button}>
                <Button onClick={()=>{router.push(props.click)}}>{props.buttontext}</Button>
                </div>
                <div>브라우저 화면 사이즈 x: {windowSize.width}, y: {windowSize.height}</div>
            </div>
        </>
    )
}