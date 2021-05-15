import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';
import {useEffect, useState, React} from "react";
import { Header,  Divider, Dimmer,Loader, Image, Segment } from 'semantic-ui-react'

export default function Home({list}) { // {list}를 넣은 이유는 pre-rendering의 list를 가지고옴
  /* Serverside_rendering 시 server에서 데이터를 가지고 오는 방법
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.Next_PUBLIC_API_URL;

  function getData(){
    axios.get(API_URL)
    .then(res => {
      console.log(res); 
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  } */
  /* useEffect(() => {
    getData();
  },[]); */ /* 새로고침을 할 경우 한번만 Console에 저장하게끔 하는 것 */

  return (
    <div>
{/*  pre-rendering을 사용할 경우 바로 화면에 표시되므로 Loading의 개념이 없어짐
     {isLoading && (
       <div>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
    
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      </div>
    )} */}

{/*     {!isLoading && ( */}
      <>
        <div>
          <Head>
            <title>한솔건설</title>
          </Head>
          <Header as='h1' style={{ paddingTop:40}}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0,9)} />
          <Header as='h1' style={{ paddingTop:40}}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </div>
      </>
    ){/* } */}
    </div>
  );
}

// 정적생성을 통하여 HTML/CSS 부분만 먼저 pre-rendering 하는 방법
export async function getStaticProps() {
  const API_URL = process.env.Apiurl;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      list : data,
      name : process.env.name
    }, // will be passed to the page component as props
  }
}