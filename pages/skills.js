import React from 'react'
import styles from './css/skills.module.css'
import Description from '../src/component/Introduce_description';
import Logo from '../src/component/Logo'
import SemiNavigation from '../src/component/SemiNavigation'

export default function Skill(){
    const data = ["Design","Front-End","Back-End"]

    const list = data.map((name) => 
        <li>{name}</li>
    )

    const a = "a"

    return(
    <>    
        <div className = {styles.a}>
            <Description header="What can I do for Company and Project"
                text = "Design, Front-End, Back-End"
             />
        </div>
        <SemiNavigation data={data}/>
    </>    
    )
}