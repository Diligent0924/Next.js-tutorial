import React from 'react'
import styles from "../component_css/Logo.module.css"
import { Image } from 'semantic-ui-react'
import { useRouter } from "next/router";

export default function Logo(props){
    return(
        <div className={styles.Logo}>
            <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size= {props.size}
                className ={styles.image}
            />
            <div className ={styles.text}>
            {props.text}
            </div>
        </div>
    )
}