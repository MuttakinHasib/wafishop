import axios from 'axios';
import { getData } from '../../server/utils/fetchData';
const Home = () => {
  return <div></div>;
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
