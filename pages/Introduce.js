import React from 'react';
import styles from '../pages/css/introduce.module.css';
import { List } from 'semantic-ui-react'
import ItemList from '../src/component/Introduce_ItemList';
import Description from '../src/component/Introduce_description';

export default function Introduce(){
    const texrdata1 = "I'm working on Korea Air Force & I'm studying Front-End(React)"
    const textdata2 = "화학공학과 중 Matlab의 매력에 빠져 컴퓨터에 입문하였고 \n 현재 장교 복무 중 분석의 매력에 빠져 Python 공부를 시작했다. \n 현재는 Web Designer 및 FrontEnd 공부를 진행중이다"
    return(
        <>
        <div className={styles.description_1}>
        <Description header="Welcome to Developer Park Yong Chan's Website"
            text = {texrdata1.split('\n').map( line => {
                return (<span>{line}<br/></span>)})} 
         />
        </div>
        

        <div className={styles.introduce}>
            <div className={styles.text}>
                <List>
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>Certification</List.Header>
                            <List.Description>What I could do for Developing</List.Description>
                        </List.Content>
                        <ItemList List='정보처리기사' List_description= 'Requirement year: 2020'/>
                        <ItemList List='SQLD(SQL Developer)' List_description= 'Basic of MySQL'/>
                        <ItemList List='Industrial Engineer Hazardous Material(위험물 산업기사)' List_description= 'How to control Chemical Things'/>
                    </List.Item>
                </List>
            </div>
            <div className={styles.text}>
                <List>
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>History</List.Header>
                            <List.Description>What should I do for developing</List.Description>
                        </List.Content>
                        <ItemList List='Seongnam Choongang High School(성남중앙고등학교)' List_description= 'year: 2011 ~ 2014'/>
                        <ItemList List='Hankyung University Chemical Engineering(한경대학교 화학공학과)' List_description= 'year: 2015 ~ 2019'/>
                        <ItemList List='Air Force Officer(공군장교)' List_description= 'year : 2019 ~ 2022'/>
                    </List.Item>
                </List>
            </div>
        </div>
        </>
    )
}