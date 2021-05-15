import { Grid } from "semantic-ui-react";
import styles from "./itemlist.module.css";
import Link from 'next/link';


export default function ItemList({ list }){
    return(
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (
                        <Grid.Column key={item.id}>
                            <Link href={`/detail/${item.id}`}>
                                <a>
                                    <div className={styles.wrap}>
                                        <img src= {item.image_link} alt={item.name} className={styles.img_item}/>
                                        <strong className={styles.item_name}>{item.name}</strong>
                                        <span className={styles.item_category}>
                                            {item.category} {item.product_type}
                                        </span>
                                        <strong className={styles.item_price}>{item.price}</strong>
                                    </div>
                                </a>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
} 