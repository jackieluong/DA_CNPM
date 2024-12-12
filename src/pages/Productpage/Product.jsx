
import { useState, useEffect, useContext } from "react";
import styles from "./Product.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import * as ProductList from "../../services/ProductService";
import { AuthContext } from "../../context/auth.context";
import { useCart } from "../../context/cart.context";

const Product = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // State for products từ API
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {auth} = useContext(AuthContext);
  const {addToCart, cartItems} = useCart();
  const productsPerPage = 8;

  useEffect(() => {
    // Gọi hàm từ ProductService
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductList.fetchProductData(); // Gọi hàm fetchProductData
        setProducts(data); // Cập nhật state với dữ liệu từ API
      } catch (error) {
        console.log(error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  function handleClickAdd(product) {
    if(!auth.isAuthenticated){
      alert("Bạn cần phải đăng nhập để thực hiện chúc năng này");
    }else{
      addToCart(product);
      alert("Thêm vào giỏ hàng thành công");
    }
  }
  console.log("Cart: ", cartItems);
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
        pagination.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pagination.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pagination.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pagination;
  };

  const pagination = generatePagination();

  function changePrice(price) {
    let str = price + "";
    let result = "";
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
      result = str[i] + result;
      count++;

      if (count % 3 === 0 && i !== 0) {
        result = "." + result;
      }
    }
    return result;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.body}>
        <h3>POPULAR IN SHOP</h3>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <div className={styles.container}>
            {currentProducts.map((product) => (
              <Link
                to={`/product/${product.product_id}`}
                key={product.product_id}
                className={styles.productCard}
              >
                <img
                  src={product.imgUrl}
                  alt={product.brand}
                  className={styles.image}
                />
                <div
                  className={styles.name}
                  onClick={() => handleProductClick(product.product_id)}
                >
                  {product.name}
                </div>

                <p className={styles.price}>
                  {changePrice(product.price) + "đ"}
                </p>
                <button
                  className={styles.buttonAdd}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickAdd(product);
                  }}
                >
                  CHO VÀO GIỎ HÀNG
                </button>
              </Link>
            ))}
          </div>
        )}

        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Previous
          </button>
          {pagination.map((item, index) =>
            item === "..." ? (
              <span key={index} className={styles.paginationEllipsis}>
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => handlePageClick(item)}
                className={`${styles.paginationButton} ${
                  currentPage === item ? styles.activeButton : ""
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
      <Footer />
    </div>
  );
};

export default Product;

