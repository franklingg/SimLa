import "~/styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ladrilhar</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
