import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/styles/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/swiper-bundle.css';
// import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
