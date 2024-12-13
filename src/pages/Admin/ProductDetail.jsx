import { useParams } from "react-router-dom";

// import ImageSlider from "../../components/ImageSlider.jsx";
import { Rating } from "@mui/material";
import ReviewList from "./ReviewList.jsx";
import PageLayout from "../../Layouts/PageLayout.jsx";
import { useEffect, useState } from "react";
import { fetchProductByID } from "../../services/ProductService.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    comment: "Great product! Really loved the quality and fit.",
    date: "2024-10-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    comment: "Absolutely fantastic! Exceeded my expectations.",
    date: "2024-10-03T14:30:00Z",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 3,
    comment: "It's good, but the size runs a bit small for me.",
    date: "2024-10-04T09:15:00Z",
  },
];

function ProductDetail({ productData }) {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetchProductByID(id);
        setSelectedProduct(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const specifications = [
    { label: "Category", value: selectedProduct.category },
    { label: "Brand", value: selectedProduct.brand },
  ];

  const reviews = selectedProduct.reviews;

  
  const rating = reviews ?  reviews.reduce((total, review) => total + review.score,0) / reviews.length : 0;
    
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <PageLayout pageTitle="Product Details">
      <div className="card">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-xl-4 col-md-8 d-flex justify-content-center align-items-center">
              {/* <img src={productImage} alt="Product" className="img-fluid"></img> */}
              {/* <ImageSlider /> */}
              
              <img
                src={selectedProduct.imgUrl}
                alt="Product"
                className="img-fluid rounded"
                style={{ maxWidth: "80%", maxHeight: "80%" }}
              />
              
            </div>

            <div className="col-xl-8">
              <div className="card-body">
                <h4>{selectedProduct.name} </h4>
                <div className="d-flex flex-wrap gap-2 align-items-center mt-3">
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={rating}
                    readOnly
                  />
                  {selectedProduct.rating}{" "}
                  <div className="text-muted">({reviews ? reviews.length : 0} reviews)</div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6">
                    <h5 className="">
                      Price: {formatCurrency( selectedProduct.price)}
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h5 className="text-muted fs-14">
                      Avaible Stocks: {selectedProduct.quantity}
                    </h5>
                  </div>
                </div>
                <div className="mt-4 ">
                  <h5 className="fs-16">Description:</h5>
                  <p>{selectedProduct.description} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="mb-3 fs-14 text-muted">Product Specification: </h5>
            <div className="table-responsive">
              <table className="table border">
                <tbody>
                  {specifications.map((spec) => (
                    <tr key={spec.label}>
                      <th scope="row" style={{ width: "300px" }}>
                        {spec.label}
                      </th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3 fs-14 text-muted">Reviews: </h5>
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetail;
