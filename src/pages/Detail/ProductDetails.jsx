

import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import imgProduct from '../../assets/mac1.jpg';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const products = [
  {
    id: 1,
    name: 'Macbook 1',
    price: '120.000đ',
    image: 'link-to-image-1',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 1 được thiết kế mỏng nhẹ...',
    brand: 'Apple',
    type: 'Laptop',
  },
  {
    id: 2,
    name: 'Macbook 2',
    price: '80.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 2 có hiệu năng vượt trội...',
    brand: 'Apple',
    type: 'Laptop',
  },
  {
    id: 3,
    name: 'Macbook 3',
    price: '100.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 3 có hiệu năng vượt trội...',
    brand: 'Apple',
    type: 'Laptop',
  },
  {
    id: 4,
    name: 'Macbook 4',
    price: '200.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 4 có hiệu năng vượt trội...',
    brand: 'Apple',
    type: 'Laptop',
  },

  {
    id: 5,
    name: 'Macbook 5',
    price: '420.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 5 có hiệu năng vượt trội...',
    brand: 'Apple',
    type: 'Laptop',
  },

  {
    id: 6,
    name: 'Macbook 6',
    price: '810.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
    description: 'Macbook 6 có hiệu năng vượt trội...',
    brand: 'Apple',
    type: 'Laptop',
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const product = products.find((p) => p.id === parseInt(id)); // Tìm sản phẩm theo ID

  if (!product) {
    return <p>Sản phẩm không tồn tại!</p>; // Kiểm tra nếu không tìm thấy sản phẩm
  }

  return (
    <div>
        <NavBar/>
        <div className={styles.container}>
      <div className={styles.body}>
        <img
          className={styles.productImage}
          src={imgProduct} // Thay bằng product.image nếu có link thực
          alt={product.name}
        />
        <div className={styles.productDetails}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.brand}>
            Nhãn hiệu: <strong>{product.brand}</strong>
          </p>
          <p className={styles.type}>
            Loại: <strong>{product.type}</strong>
          </p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>
            Giá: <strong>{product.price}</strong>
          </p>
          <div className={styles.actions}>
            <button className={styles.cartButton}>Cho vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ProductDetails;

