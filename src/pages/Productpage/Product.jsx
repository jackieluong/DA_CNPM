import { useState, useEffect, useContext } from "react";
import styles from "./Product.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import * as ProductList from "../../services/ProductService";
import { AuthContext } from "../../context/auth.context";
import { useCart } from "../../context/cart.context";

import iconSearch from '../../assets/iconSearch.png'
import iconCancel from '../../assets/iconCancel.png'

const Product = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // State for products từ API
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {auth} = useContext(AuthContext);
  const {addToCart, cartItems} = useCart();
  const productsPerPage = 8;

// add
  const [records, setRecords] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    // Gọi hàm từ ProductService
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductList.fetchProductData(); // Gọi hàm fetchProductData
        setProducts(data); // Cập nhật state với dữ liệu từ API
        // add
        setRecords(data);

      } catch (error) {
        console.log(error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(records.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = records.slice(
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

//add
  const Filter = (event) => {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setRecords(products); // Reset về toàn bộ danh sách khi không tìm kiếm
    } else {
      setRecords(products.filter((p) => p.name.toLowerCase().includes(event.target.value)));
    }
  }



  const handleSearch = () => {
    const filteredRecords = products.filter((p) =>
      p.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    if (searchValue.trim() === "" || filteredRecords.length === 0) {
      setRecords(filteredRecords.length > 0 ? filteredRecords : []); // Cập nhật records
      setError(filteredRecords.length === 0 ? "Không tìm thấy sản phẩm nào." : null);
    } else {
      setRecords(filteredRecords);
      setError(null); // Xóa thông báo lỗi nếu tìm thấy sản phẩm
    }
    setCurrentPage(1); // Reset về trang đầu tiên
  }
  const handleClearSearch = () => {
    setSearchValue(""); 
    setRecords(products); 
    setError(null); 
    setCurrentPage(1);
  }

  return (
    <div>
      <NavBar />
      <div className={styles.body}>
        <div className={styles.headerProduct}>
          <div className={styles.titlePage}>
            <h3>Tất cả sản phẩm</h3>
          </div>
          <div className={styles.search}>
            <input 
            type="text" 
            placeholder="Tìm kiếm theo tên sản phẩm..." 
            className={styles.itemSearch}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                handleSearch();
              }
              
            }}
            />
            {searchValue && (
              <img 
                src={iconCancel} 
                alt="clear" 
                className={styles.iconCancel} 
                onClick={() => handleClearSearch()}
              />
            )}
            <img 
              src={iconSearch} 
              alt="icon" 
              onClick={() => handleSearch()} 
              className={styles.iconSearch} 
            />
          </div>
        </div>
        <hr />
        
        
        {loading ? (
          <p>Loading products...</p>
        ) : error  ? (
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