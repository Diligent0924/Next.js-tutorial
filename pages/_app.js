import React from 'react';
import { useRouter } from 'next/router'

function MyApp() {
  render()
  const {Component, ...other} = this.props;
  const router = useRouter()

  /*  function btnclick(){
    const router = userouter()
    router.push('/about')
  } */

  return(
    <div>
      <p>처음 시작하는 html 코드 테스트</p>
      <button onclick={() => router.push('/about')}>버튼입니다.</button>
      <Component {...other} />
    </div>
  )
}

export default MyApp
