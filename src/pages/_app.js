import Layout from '../components/Layout';

import { Provider } from 'react-redux';
import { store } from '../store';

import 'antd/dist/antd.css';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
