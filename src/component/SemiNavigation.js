import React from 'react'
import { Card } from 'semantic-ui-react'
import styles from '../component_css/SemiNavigation.module.css'

export default function SemiNavigation(props){
    const data = props.data

    const list = data.map((name) => 
        <Card className={styles.list}>
            <Card.Content>
                {name}
            </Card.Content>
        </Card>
    )

    return(
        <div className={styles.head}>
        <Card.Group itemsPerRow={data.length} className={styles.group}>
            {list}
        </Card.Group>
        </div>
    )
}