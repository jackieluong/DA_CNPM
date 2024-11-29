
// import React from 'react';
// import styles from './Product.module.css';
// import Navbar from '../../components/Navbar/Navbar';
// //import Footer from '../../components/Footer/Footer';



// export default function nam() {
//   return (
//     <div>
//         <div>
//             <Navbar/>
//         </div>
        
//         {/* <div>
//           <Footer/>
//         </div> */}
//     </div>
//   )
// }



// import styles from './Product.module.css';

// import { ProductContext } from '../../Context/ProductContext';
// import { useContext} from 'react';

// export default function Product() {
//   const {products} = useContext(ProductContext);
//   return (
//     <div>
//       {JSON.stringify(products)}
//     </div>
//   )
// }


// import styles from './Product.module.css';

// //import NavBar from '../../components/Navbar/Navbar';
// import {products} from '../../public/data/product';

// export default function Products() {
//   return (
    
//     <div className={styles.container}>
//       {products &&
//         products.map((product) => {
//           return (
//             <div key={product.id} className={styles.productCard}>
//             <img
//               src={product.image}
//               alt={product.name}
//               className={styles.productImage}
//             />
//             {/* Product Info */}
//             <div className={styles.productInfo}>
//               <p className={styles.productName}>{product.name}</p>
//               <p className={styles.productPrice}>${product.price}</p>
//               <p className={styles.productDescription}>
//                 {product.smallDescription}
//               </p>
//             </div>
//             <button
//               className={styles.addToCartButton}

//             >
//               + Add To Cart
//             </button>
//           </div>
//           )
          
//           })}
//     </div>
//   );
// }


import styles from './Product.module.css';
import imageLaptop from '../../assets/mac1.jpg';
import NavBar from '../../components/Navbar/Navbar';
const products = [
  {
    id: 1,
    name: 'Macbook 1',
    price: '120.000đ',
    image: 'link-to-image-1',
    button: 'CHO VÀO GIỎ HÀNG',
  },
  {
    id: 2,
    name: 'Macbook 2',
    price: '80.000đ',
    image: 'link-to-image-2',
    button: 'CHO VÀO GIỎ HÀNG',
  },
  {
    id: 3,
    name: 'Macbook 3',
    price: '276.000đ',
    image: 'link-to-image-3',
    button: 'CHO VÀO GIỎ HÀNG',
  },
  {
    id: 4,
    name: 'Macbook 4',
    price: '280.000đ',
    image: 'link-to-image-4',
    button: 'CHỌN GIỎ HÀNG',
  },
  {
    id: 5,
    name: 'Macbook 5',
    price: '245.000đ',
    image: 'link-to-image-5',
    button: 'CHO VÀO GIỎ HÀNG',
  },
  {
    id: 6,
    name: 'Macbook 6',
    price: '355.000đ',
    image: 'link-to-image-5',
    button: 'CHO VÀO GIỎ HÀNG',
  },
];

const ProductList = () => {
  return (
    <div>
      <NavBar/>
      <div className={styles.body}>
        <h3>POPULAR IN SHOP</h3>
        <div className={styles.container}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={imageLaptop} alt={product.name} className={styles.image} />
              <h3 className={styles.name}>{product.name}</h3>
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
