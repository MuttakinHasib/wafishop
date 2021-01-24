import axios from 'axios';
import Head from 'next/head';

import Container from '../components/Container';
import Product from '../components/Product';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Wafishop - Online Shop</title>
      </Head>
      <Container className=''>
        <Slider />
        <Product />
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  const {
    data: { products, result },
  } = await axios.get(`${process.env.BASE_URL}/api/product`);

  return {
    props: {
      products,
      result,
    },
  };
}

export default Home;
