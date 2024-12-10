
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
  const [activeTab, setActiveTab] = useState("info");

  const {addToCart} = useCart();
  const {auth} = useContext(AuthContext);
  const handleClickAdd = (product) => {
    if (!auth.isAuthenticated) {
      alert("Bạn cần phải đăng nhập để thực hiện chúc năng này");
    } else {
      addToCart(product);
    alert("Thêm vào giỏ hàng thành công");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await ProductList.fetchProductDetail(id); // Gọi API với ID
        setProduct(data);
      } catch (err) {
        console.log(err);
        setError("Không thể tải thông tin sản phẩm. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  function changePrice(price) {
    let str = price + "";
    let result = "";
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

  return (
    <div>
      <NavBar />
      {loading ? (<p>Đang tải dữ liệu sản phẩm...</p>) : error ? ({error}) : (
        <div className={styles.productContainer}>
          <div className={styles.productInfo}>
            {product.map((pro)=> 
              <div key={pro.product_id} className={styles.productCard}>
                <img
                  className={styles.productImage}
                  src={pro.imgUrl}
                  alt={pro.name}
                />
                <div className={styles.details}>
                  <h1 className={styles.productName}>{pro.name}</h1>
                  <p className={styles.productBrand}>
                    Thương hiệu: <strong>{pro.brand}</strong>
                  </p>
                  <p className={styles.productType}>
                    Loại: <strong>{pro.category}</strong>
                  </p>
                  <p className={styles.productPrice}>
                    Giá: <strong>{changePrice(pro.price) + "đ"}</strong>
                  </p>
                  <div className={styles.actions}>
                    <button className={styles.addToCartButton} onClick={() => handleClickAdd(pro)}>Cho vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "info" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("info")}
            >
              Thông tin sản phẩm
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "comments" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("comments")}
            >
              Đánh giá sản phẩm
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "info" && (
              <div className={styles.tab}>
                <h2>Thông tin sản phẩm</h2>
                {product.map((pro) => (
                  <p key={pro.product_id}>{pro.description}</p>
                ))}
                
              </div>
            )}
            {activeTab === "comments" && (
              <div className={styles.tab}>
                <h2>Đánh giá sản phẩm</h2>
                <p>Hiện tại chưa có bình luận nào cho sản phẩm này.</p>
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


// import styles from './ProductDetails.module.css';
// import NavBar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
// import { useState} from 'react';
// import { useLocation } from 'react-router-dom';


// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("info");

//   const location = useLocation();
//   const data = location.state;

//   function changePrice(price) {
//     let str = price + "";
//     let result = "";
//     let count = 0;

//     for (let i = str.length - 1; i >= 0; i--) {
//       result = str[i] + result; 
//       count++;
    
//       if (count % 3 === 0 && i !== 0) {
//         result = '.' + result;
//       }
//     }
//     return result;
//   }
//   return (
//     <div>
//       <NavBar />
//       <div className={styles.productContainer}>
//         <div className={styles.productInfo}>
//           <div key={data.product_id} className={styles.productCard}>
//             <img
//               className={styles.productImage}
//               src={data.imgUrl}
//               alt={data.name}
//             />
//             <div className={styles.details}>
//               <h1 className={styles.productName}>{data.name}</h1>
//               <p className={styles.productBrand}>
//                 Thương hiệu: <strong>{data.brand}</strong>
//               </p>
//               <p className={styles.productType}>
//                 Loại: <strong>{data.category}</strong>
//               </p>
//               <p className={styles.productPrice}>
//                 Giá: <strong>{changePrice(data.price) + "đ"}</strong>
//               </p>
//               <div className={styles.actions}>
//                 <button className={styles.addToCartButton}>Cho vào giỏ hàng</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.tabContainer}>
//           <button
//             className={`${styles.tabButton} ${
//               activeTab === "info" ? styles.activeTab : ""
//             }`}
//             onClick={() => setActiveTab("info")}
//           >
//             Thông tin sản phẩm
//           </button>
//           <button
//             className={`${styles.tabButton} ${
//               activeTab === "comments" ? styles.activeTab : ""
//             }`}
//             onClick={() => setActiveTab("comments")}
//           >
//             Đánh giá sản phẩm
//           </button>
//         </div>

//         <div className={styles.tabContent}>
//           {activeTab === "info" && (
//             <div className={styles.tab}>
//               <h2>Thông tin sản phẩm</h2>
//               <p>{data.description}</p>
              
//             </div>
//           )}
//           {activeTab === "comments" && (
//             <div className={styles.tab}>
//               <h2>Đánh giá sản phẩm</h2>
//               <p>Hiện tại chưa có bình luận nào cho sản phẩm này.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;
