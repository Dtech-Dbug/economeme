import "../styles/globals.css";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <h2>wtf</h2>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
