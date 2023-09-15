import styles from '../styles/globals.module.scss';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
            <div className={styles.bodyApp}>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;