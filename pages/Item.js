import { Divider, Button, Rating } from 'semantic-ui-react'
import styles from './Item.module.css'

export default function Item({ item }){
    const { image_link, name, price, description} = item; /* mapping을 안해도 이렇게 되나?*/
    return(
        <>
            <div className={styles.wrap}>
                <div>
                    <img src={image_link} alt={name} className={styles.image} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.nametag}>{name}</strong>
                    <strong className={styles.pricetag}>{price}</strong>
                    <Rating className={styles.Rating} icon='star' defaultRating={3} maxRating={5} />
                    <div className={styles.buttonAll}>
                    <Button className={styles.button}>구매하기</Button>
                    <Button className={styles.button_2}>예약하기</Button>
                    </div>
                </div>
            </div>
            <Divider />
            <div>
                <p>{description}</p>
            </div>
        </>
    )
}