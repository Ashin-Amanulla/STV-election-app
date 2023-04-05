import Header from "@/Components/Header";
import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
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
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="STV"
          agent-id="4fef4c10-442f-4a9e-891b-5dddf4e24e0f"
          language-code="en"
        ></df-messenger>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
