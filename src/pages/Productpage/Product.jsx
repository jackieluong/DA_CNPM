
import styles from './Product.module.css';
import imageLaptop from '../../assets/mac1.jpg';
import NavBar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
// const products = [
//   {
//     id: 1,
//     name: 'Macbook 1',
//     price: '120.000đ',
//     image: 'link-to-image-1',
//     button: 'CHO VÀO GIỎ HÀNG',
//   },
//   {
//     id: 2,
//     name: 'Macbook 2',
//     price: '80.000đ',
//     image: 'link-to-image-2',
//     button: 'CHO VÀO GIỎ HÀNG',
//   },
//   {
//     id: 3,
//     name: 'Macbook 3',
//     price: '276.000đ',
//     image: 'link-to-image-3',
//     button: 'CHO VÀO GIỎ HÀNG',
//   },
//   {
//     id: 4,
//     name: 'Macbook 4',
//     price: '280.000đ',
//     image: 'link-to-image-4',
//     button: 'CHỌN GIỎ HÀNG',
//   },
//   {
//     id: 5,
//     name: 'Macbook 5',
//     price: '245.000đ',
//     image: 'link-to-image-5',
//     button: 'CHO VÀO GIỎ HÀNG',
//   },
//   {
//     id: 6,
//     name: 'Macbook 6',
//     price: '355.000đ',
//     image: 'link-to-image-5',
//     button: 'CHO VÀO GIỎ HÀNG',
//   },
// ];

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

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); 
  };
  return (
    <div>
      <NavBar/>
      <div className={styles.body}>
        <h3>POPULAR IN SHOP</h3>
        <div className={styles.container}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={imageLaptop} alt={product.name} className={styles.image} />
              <h3 className={styles.name}
                onClick={() => handleProductClick(product.id)} // Xử lý sự kiện click
              >{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <button className={styles.button}>{product.button}</button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
  );
};

export default ProductList;
