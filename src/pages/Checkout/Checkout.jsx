import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";

import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import { FaCheckCircle } from "react-icons/fa";

function Checkout() {
  const location = useLocation();
  const success = location.state?.success;

  const navigate = useNavigate();
  return (
    <>
    <NavBar />
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      
      height="100vh"
      
    //   borderRadius="10px"
      padding="200px"
      
      
    //   boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      {success ? (
        <>
          <FaCheckCircle 
            style={{
              fontSize: '150px',  // Increased size of the icon
              color: '#28a745',   // Green color for success
              marginBottom: '20px', 
              animation: 'successPulse 1s ease-out',
            }} 
          />
          <Typography variant="h5" mt={2} mb={5} color="#28a745">
            Đơn hàng của bạn đã được tạo thành công!
          </Typography>
          <Button
              variant="contained"

              mt={2}
              style={{ backgroundColor: '#28a745', padding: '15px 20px' }}
              onClick={() => navigate('/product')}
            >
              Quay lại trang sản phẩm
            </Button>
        </>
      ) : (
        <Typography variant="h5" color="#721c24">
          Không tìm thấy đơn hàng.
        </Typography>
      )}
        
      <style>
        {`
          @keyframes successPulse {
            0% {
              transform: scale(0.5);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
    <Footer />
    </>
  );
}

export default Checkout;


