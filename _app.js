import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  function btnclick(){
    
  }

  return(
    <div>
      <p>처음 시작하는 html 코드 테스트</p>
      <button onclick={btnclick}>버튼입니다.</button>
    </div>
  )
}

export default MyApp
