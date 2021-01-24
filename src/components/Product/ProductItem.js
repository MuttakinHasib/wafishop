import React from 'react';
import { Col } from 'antd';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '../../styles/ProductItem.module.css';

const ProductItem = () => {
  return (
    <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
      <Link href='/'>
        <a>
          <div className='flex flex-col'>
            <div className={styles.productImage}>
              <img
                src='/assets/products/football.webp'
                className={styles.image}
              />
            </div>
            <motion.div
              className={styles.productInfo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.productDescription}>
                <div className='flex justify-between items-center'>
                  <strong className='text-gray-800 font-semibold text-lg'>
                    Football
                  </strong>
                  <span className='text-gray-600'>$20</span>
                </div>
                {/* <p c>lassName='text-center text-gray-600 mb-0 pt-2'>
                      {product?.description}
                    </p */}
                {/* {product?.description && (
                    <p className='text-center text-gray-600 mb-0 pt-2'>
                      {product?.description}
                    </p>
                  )} */}
              </div>
            </motion.div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

export default ProductItem;
