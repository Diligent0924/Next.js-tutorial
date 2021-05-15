import {React} from "react";
import axios from 'axios';
import Item from '../../src/component/Item';
import Head from 'next/head';


const Post = ({item}) => {
  return(
    <div>
      {item && (
        <div>
          <Head>
            <title>{item.name}</title>
          </Head>

          <Item item = {item} />
        </div>
      )}
    </div>
  )
}

export default Post

export async function getServerSideProps(context){
  const id = context.params.id;
  const apiurl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiurl);
  const data = res.data; 
  
  return {
    props: {
      item : data,
    },
  }
}