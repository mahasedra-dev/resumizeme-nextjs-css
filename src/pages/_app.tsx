import React from "react";
import type { AppProps } from 'next/app';
// import '@/app/page.module.css';
import '@/app/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

    React.useEffect(() => {
    }, [])
    return (
        <Component {...pageProps} />
    )
}
export default MyApp