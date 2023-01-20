import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Ossama Rafique | Senior Software Engineer</title>

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/jarallax.css" />
        <link rel="stylesheet" href="css/swiper.css" />
        <link rel="stylesheet" href="css/fontawesome.css" />
        <link rel="stylesheet" href="css/brands.css" />
        <link rel="stylesheet" href="css/solid.css" />
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JTVEVJ7WZJ"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-JTVEVJ7WZJ');
        </script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
