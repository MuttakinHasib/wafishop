import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';

import ProductItem from './ProductItem';

const index = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <Row gutter={[24, 24]}>
        <ProductItem />
      </Row>
    </motion.div>
  );
};

export default index;
