import Head from 'next/head'
import React from 'react'
import { Button } from 'semantic-ui-react'
import styles from './css/home.module.css'
import Description from '../src/component/Introduce_description';
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className={styles.description}>
      <Description header="Hi, I'm Yong Chan Park" click = "/Introduce" buttontext = "view my portfolio">
          Design and Full-stack Depveloper Aspirant
      </Description>
      </div>
    </>
  )
}