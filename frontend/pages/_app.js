import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import ContextProvider from "../contexts";
function MyApp({ Component, pageProps }) {
  return (
    <MeshProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </MeshProvider>
  );
}

export default MyApp;
