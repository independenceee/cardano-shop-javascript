import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import ContextProvider from "../contexts";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
    return (
        <MeshProvider>
            <Provider store={store}>
                <ContextProvider>
                    <Meta title="Cardano Shop" />
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ContextProvider>
            </Provider>
        </MeshProvider>
    );
}

export default MyApp;
