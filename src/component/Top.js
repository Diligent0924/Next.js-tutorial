import {Header} from 'semantic-ui-react';
import styles from '../css/Top.footer.module.css'

export default function Top(){
    return (
        <div className={styles.Top}>
            <img src="/favicon.ico" alt="logo" />
            <Header as='h1'>박용찬</Header>
        </div>
    )
}