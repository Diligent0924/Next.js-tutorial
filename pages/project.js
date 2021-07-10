import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styles from './css/project.module.css'

export default function About(){
    return(
        <div className={styles.project}>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                        1번째 project입니다.
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}