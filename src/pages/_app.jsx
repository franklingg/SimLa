import "~/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Simulador de Ladrilhos</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
