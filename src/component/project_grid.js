import React from 'react'
import { Grid, Image,  Progress, Reveal, Button } from 'semantic-ui-react'
import styles from '../component_css/grid.module.css'
import router, { useRouter } from "next/router";

export default function project_grid(props){
    return(
        <div className={styles.project}>
            <Grid>
                <Grid.Column width={4}>
                    <Reveal animated='small fade'>
                        <Reveal.Content visible>
                            <Image src= {props.visible} size='medium' />
                        </Reveal.Content>
                        <Reveal.Content hidden >
                            <Image src= {props.hidden} size='medium' />
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
                <Grid.Column width={9}>
                    <h1> Project Progress</h1>                    
                    <div className={styles.percent} >
                        <Progress percent={props.percent} progress size='large'/>
                    </div>
                    <div className={styles.text}>
                        <h1> Project Discription</h1>
                        <p>{props.text}</p>
                    </div>
                        <Button positive>Go to Website</Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}