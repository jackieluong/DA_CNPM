
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomepageBody from '../components/HomepageBody/HomepageBody';
import InfoForShop from '../components/HomepageBody/InfoForShop';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';

import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchTopProducts } from '../services/dashboardService';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {auth} = useContext(AuthContext);
    

    const {addToCart} = useCart();
    const accessToken = localStorage.getItem("accessToken");
    

    const navigate = useNavigate();
// SwiperCore.use([Navigation, Pagination, A11y]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchTopProducts('2024-1-1', '2024-12-31' );
                setTopProducts(data);
            } catch (error) {
                console.log(error); 
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <HomepageBody/>

            <div className="featured-products container py-4" style={{height: "auto"}}>
                <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>

                {/* Display loading state */}
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : (

 <Swiper
modules={[Autoplay, Pagination, Navigation]}
spaceBetween={20} // Better spacing between slides
slidesPerView={3}
navigation
autoplay={{
    delay: 3000, // Enable autoplay with a delay
    disableOnInteraction: false,
}}
pagination={{ clickable: true }}
className="d-flex align-items-center h-100 px-5 py-3"
breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
    768: { slidesPerView: 2, spaceBetween: 15 }, // Medium screens
    1024: { slidesPerView: 3, spaceBetween: 20 }, // Large screens
}}
>
{topProducts.map((product) => (
    <SwiperSlide className="d-flex justify-content-center" key={product.product_id}>
        <div 
            className="card mb-4 p-2 shadow-lg" 
            style={{ 
                height: "400px", // Increased card height
                width: "300px", // Set a consistent card width
                transition: "transform 0.3s", 
                cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Smooth scaling effect
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            <div className='d-flex justify-content-center'  onClick={() => navigate(`/product/${product.product_id}`)} >
            <img 
                src={product.imgUrl} 
                alt={product.name} 
                className="card-img-top mx-auto rounded" // Added rounded corners for better aesthetics
                style={{ 
                    height: "220px", // Increased image height
                    width: "220px", 
                    objectFit: "cover",
                    className: "card-img-top mx-auto",
                    
                    
                }}
            />
            </div>
            <div 
                className="card-body text-center d-flex flex-column align-items-center" 
                style={{ padding: "10px" }}
            >
                <h5 
                    className="card-title text-center mb-2" 
                    style={{
                        overflow: "hidden", 
                        textOverflow: "ellipsis", 
                        whiteSpace: "nowrap", 
                        width: "100%",
                    }}
                    title={product.name} // Tooltip for full name
                >
                    {product.name}
                </h5>
                <p className="card-text mb-3" style={{ color: "#666", fontSize: "1rem" }}>
                    Giá: {formatCurrency(product.price)}
                </p>
                <button 
                    
                    className="btn btn-primary px-3 py-2"
                    style={{
                        backgroundColor: "#292929", 
                        borderColor: "#292929",
                        borderRadius: "20px",
                    }}
                >
                    Cho vào giỏ hàng
                </button>
            </div>
        </div>
    </SwiperSlide>
))}
 </Swiper>

                )}
            </div>
            <InfoForShop/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;