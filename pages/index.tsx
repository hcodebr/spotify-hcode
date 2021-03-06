import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel';
import Page from '../components/Page';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Hcode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <section>
          <NavPanel />
          <article>
            <Header />
            <main></main>
          </article>
        </section>
        <Footer />
      </Page>
    </div>
  );
}
