import styles from '../css/Top.footer.module.css'

export default function Footer(){
    return(
        <div className={styles.Footer}>
            <div>
                대표자 : 박용찬<br/>
                전화번호 : 010-3303-1810<br/>
                이메일 : sdc00035@naver.com
            </div>
            <img src="/favicon.ico" alt="logo" />
        </div>
    )
}