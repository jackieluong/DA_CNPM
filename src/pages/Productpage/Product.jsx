
import { useState } from 'react';
import styles from './Product.module.css';
import imageLaptop from '../../assets/mac1.jpg';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Macbook 1', price: '120.000đ', image: 'link-to-image-1', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 1 được thiết kế mỏng nhẹ...', brand: 'Apple', type: 'Laptop' },
  { id: 2, name: 'Macbook 2', price: '80.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 2 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 3, name: 'Macbook 3', price: '100.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 3 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 4, name: 'Macbook 4', price: '200.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 4 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 5, name: 'Macbook 5', price: '420.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 5 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 6, name: 'Macbook 6', price: '810.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 6 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 7, name: 'Macbook 1', price: '120.000đ', image: 'link-to-image-1', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 1 được thiết kế mỏng nhẹ...', brand: 'Apple', type: 'Laptop' },
  { id: 8, name: 'Macbook 2', price: '80.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 2 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 9, name: 'Macbook 3', price: '100.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 3 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 10, name: 'Macbook 4', price: '200.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 4 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 11, name: 'Macbook 5', price: '420.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 5 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
  { id: 12, name: 'Macbook 6', price: '810.000đ', image: 'link-to-image-2', button: 'CHO VÀO GIỎ HÀNG', description: 'Macbook 6 có hiệu năng vượt trội...', brand: 'Apple', type: 'Laptop' },
];
// const [products, setProducts] = useState([])

// async function getData() {
//   try {
//     const response = await fetch('localhost:3000/product');
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(response.json());
    
//     setProducts(response.json())
//   } catch (error) {
//     console.error(error.message);
//   }
// }
const Product = () => {
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; 

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const generatePagination = () => {
    const pagination = [];
    const maxButtons = 6;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pagination.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pagination.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pagination.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pagination;
  };

  const pagination = generatePagination();


  return (
    <div>
      <NavBar />
      <div className={styles.body}>
        <h3>POPULAR IN SHOP</h3>
        <div className={styles.container}>
          {currentProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={imageLaptop} alt={product.name} className={styles.image} />
              <h3 className={styles.name} onClick={() => handleProductClick(product.id)}>
                {product.name}
              </h3>
              <p className={styles.price}>{product.price}</p>
              <button className={styles.buttonAdd}>CHO VÀO GIỎ HÀNG</button>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Previous
          </button>
          {pagination.map((item, index) =>
            item === '...' ? (
              <span key={index} className={styles.paginationEllipsis}>
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => handlePageClick(item)}
                className={`${styles.paginationButton} ${
                  currentPage === item ? styles.activeButton : ''
                }`}
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default Product;

