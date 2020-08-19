import Layout from "@components/layout/Layout";

function MyApp({ Component, pageProps }) {
  // Perfect for Providers, Themes, Layouts, Props Adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
