import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/index';
import { ToastContainer } from 'react-toastify';
import '@/styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <main id='main-content'>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ToastContainer theme='colored' closeOnClick draggable={false} />
    </>
  );
};

export default MyApp;
