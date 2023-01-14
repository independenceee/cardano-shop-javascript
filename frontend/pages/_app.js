import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import ContextProvider from "../contexts";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
    return (
        <MeshProvider>
            <Provider store={store}>
                <ContextProvider>
                    <Component {...pageProps} />
                </ContextProvider>
            </Provider>
        </MeshProvider>
    );
}

export default MyApp;
