import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
