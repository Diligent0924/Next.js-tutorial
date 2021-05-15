import {React} from "react";
import axios from 'axios';
import Item from '../Item';
import { useRouter } from 'next/router';
import Head from 'next/head';


const Post = ({item}) => {
  const router = useRouter()
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

export async function getStaticProps({params}){
  const apiurl = `http://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`;
  const res = await axios.get(apiurl);
  const data = res.data; 
  
  return {
    props: {
      item : data,
    },
  }
}

export async function getStaticPaths() {
  const API_URL = process.env.Apiurl;
  const res = await axios.get(API_URL);
  const data = res.data;

  const paths = data.map((item) => ({
    params:{id: item.id.toString(),}
  }))

  return {paths, fallback:true}
}