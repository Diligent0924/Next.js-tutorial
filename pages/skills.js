import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'
import styles from './css/skills.module.css'
import Description from '../src/component/Introduce_description';

export default function Skill(){
    return(
    <>    
        <div className = {styles.a}>
            <Description header="What can I do for Company and Project"
                text = "Design, Front-End, Back-End"
             />
        </div>
        <div>
        <Card.Group itemsPerRow={3}>
            <Card>
            <Card.Content>
                ddd
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                dddd
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                dddd
            </Card.Content>
            </Card>
        </Card.Group>
        </div>
    </>    
    )
}