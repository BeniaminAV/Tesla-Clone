import { Provider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer/Footer";
import { store } from "../components/features/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
