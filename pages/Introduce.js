import React from 'react';
import styles from '../pages/css/introduce.module.css';
import { Divider,List } from 'semantic-ui-react'
import ItemList from '../src/component/Introduce_ItemList';
import Description from '../src/component/Introduce_description';

export default function Introduce(){
    return(
        <>
        <div className={styles.description_1}>
        <Description header="Try Harder as you can" click = "/Introduce" buttontext = "Click me!">
            I'm working on Korea Air Force & I'm studying Front-End(React)
        </Description>
        </div>
        <div className={styles.introduce}>
            <div className={styles.text}>
                <h1> Certification(자격증) </h1>
                <Divider />
                    <ItemList List='정보처리기사' List_description= 'Requirement year: 2020'/>
                    <ItemList List='SQLD(SQL Developer)' List_description= 'Basic of MySQL'/>
                    <ItemList List='Industrial Engineer Hazardous Material(위험물 산업기사)' List_description= 'How to control Chemical Things'/>
            </div>
            <div className={styles.text}>
            <h1> History(연혁) </h1>
                <Divider />
                    <ItemList List='Seongnam Choongang High School(분당중앙고등학교)' List_description= 'year: 2011 ~ 2014'/>
                    <ItemList List='Hankyung University Chemical Engineering(한경대학교 화학공학과)' List_description= 'year: 2015 ~ 2019'/>
                    <ItemList List='Air Force Officer(공군장교)' List_description= 'year : 2019 ~ 2022'/>
            </div>
        </div>
        </>
    )
}