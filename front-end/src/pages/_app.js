import {useState} from 'react'
import Header from "@/Components/Header";
import Head from "next/head";
import Script from 'next/script'
import "@/styles/globals.css";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(true)
  return (
    <>
      <Head>
        <title>STV-election-app</title>
        <link
          rel="shortcut icon"
          href="/images/roe-logo20.png"
          type="image/x-icon"
        />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap);
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
        </style>
      </Head>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
        <df-messenger
          intent="WELCOME"
          chat-title="STV"
          agent-id="4fef4c10-442f-4a9e-891b-5dddf4e24e0f"
          language-code="en"
        ></df-messenger>
        {user && <Header />}
      <Component {...pageProps} />
      {user && <Footer />}
    </>
  );
}
