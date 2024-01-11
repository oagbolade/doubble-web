import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import NextNprogress from 'nextjs-progressbar';
import { store } from '../src/redux/store';
import ProtectedRoute from "../components/ProtectedRoutes";
import "antd/dist/antd.css";
import "../styles/globals.css";

const persistor = persistStore(store);

interface DoubbleAppProps {
  Component?: React.FC;
  pageProps?: any;
}

const DoubbleAppProps = ({ Component, pageProps, router }) => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProtectedRoute router={router}>
          <NextNprogress
            color="#00ccff"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
            options={{ easing: 'ease', speed: 500 }}
          />
          <Component {...pageProps} />
        </ProtectedRoute>
      </PersistGate>
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
          margin: 0;
          height: 100%;
          width: 100%;
          position: absolute;
          overflow-y: scroll;
          overflow-x: hidden;
        }

        .sterling-logo {
          animation: logo-spin infinite 0.5s linear;
        }
        #__next {
          height: 100%;
        }

        .lady-with-phone {
          border-radius: 50%;
        }

        @keyframes logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Provider>
  );
};
export default DoubbleAppProps;
