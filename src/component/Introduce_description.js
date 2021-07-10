import React from 'react';
import {Header} from 'semantic-ui-react'
import styles from '../component_css/Introduce_description.module.css'


export default function Introduce(props){
    return(
        <>
            <div className={styles.header}>
                <div className={styles.subheader}>
                    <b><Header as='h1' disabled>{props.header}</Header></b>
                </div>
                <div>
                    <h4>{props.text}</h4>
                </div>
            </div>
        </>
    )
}