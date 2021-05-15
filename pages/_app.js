import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";
import Gnb from "../src/component/Gnb";


function MyApp({ Component, pageProps }) {
  return(
    <div style={{ width:1000, margin:"0 auto"}}>
      <Top />
      <Gnb />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp

/*
Component : 현재 페이지 -> 페이지 전환할 때마다 보이는 것
pageProps : ??? 서버와 연동되게 하는 어떠한 것..?


*/