
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect, useContext } from 'react';

import * as ProductList from '../../services/ProductService';
import { AuthContext } from '../../context/auth.context';
import { useCart } from '../../context/cart.context';


const ProductDetails = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState({}); // Lưu thông tin sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Lỗi nếu có
  const [activeTab, setActiveTab] = useState('info');

  const { addToCart } = useCart();
  const { auth } = useContext(AuthContext);

  const handleClickAdd = (product) => {
    if (!auth.isAuthenticated) {
      alert('Bạn cần phải đăng nhập để thực hiện chức năng này');
    } else {
      addToCart(product);
      alert('Thêm vào giỏ hàng thành công');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await ProductList.fetchProductDetail(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  function changePrice(price) {
    let str = price.toString();
    let result = '';
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
      result = str[i] + result;
      count++;

      if (count % 3 === 0 && i !== 0) {
        result = '.' + result;
      }
    }
    return result;
  }

  // console.log(product)
  return (
    <div>
      <NavBar />
      {loading ? (
        <p>Đang tải dữ liệu sản phẩm...</p>
      ) : error ? (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button onClick={() => setError(null)}>Thử lại</button>
        </div>
      ) : (
        <div className={styles.productContainer}>
          <div className={styles.productInfo}>
            <div key={product.product_id} className={styles.productCard}>
              <img
                className={styles.productImage}
                src={product.imgUrl}
                alt={product.name}
              />
              <div className={styles.details}>
                <h1 className={styles.productName}><strong>{product.name}</strong></h1>
                <p className={styles.productBrand}>
                  Thương hiệu: <strong>{product.brand}</strong>
                </p>
                <p className={styles.productType}>
                  Loại: <strong>{product.category}</strong>
                </p>
                <p className={styles.productQuantity}>
                  Kho: <strong>{product.quantity}</strong>
                </p>
                <p className={styles.productPrice}>
                  Giá: <strong>{product.price.toLocaleString()}đ</strong>
                </p>
                <div className={styles.actions}>
                  <button
                    className={styles.addToCartButton}
                    onClick={() => handleClickAdd(product)}
                  >
                    Cho vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'info' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('info')}
            >
              Thông tin sản phẩm
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'comments' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('comments')}
            >
              Đánh giá sản phẩm
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'info' && (
              <div className={styles.tabInfo}>
                <h2>Thông tin sản phẩm</h2>
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'comments' && (
              <div className={styles.tabReview}>
                {product.reviews.map((r, index) => (
                  <div key={index} className={styles.review}>
                    <div className={styles.avatar} >
                      {r.user_name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.reviewContent}>
                      <span className={styles.userName}>{r.user_name}</span>
                      <span className={styles.score}>Score: {r.score}</span>
                      <span className={styles.feedbackTime}>{new Date(r.feedback_time).toLocaleString()}</span>
                      <span className={styles.content}>{r.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;


