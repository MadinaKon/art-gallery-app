import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "./Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load Error</div>;
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
