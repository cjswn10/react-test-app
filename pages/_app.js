import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AWESOME FOOD STORE</title>
      </Head>
      <div className="App">
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
