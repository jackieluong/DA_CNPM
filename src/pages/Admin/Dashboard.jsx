import { AiOutlineDollar } from "react-icons/ai";
import PageLayout from "../../Layouts/PageLayout";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import PieChart from "../../components/Charts/PieChart";
import DonutChart from "../../components/Charts/DonutChart";
import { _, Grid } from "gridjs-react";
import { useState, useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  fetchTotalRevenue,
  fetchTotalOrders,
  fetchTotalOrderDelivered,
  fetchTotalOrderShipping,
  fetchRevenueByCategory,
  fetchRevenueByBrand,
  fetchTopProducts,
} from "../../services/dashboardService";
function Dashboard() {
  // const totalRevenue = 5500;
  const [loading, setLoading] = useState(false);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrderCompleted, setTotalOrderCompleted] = useState(0);
  const [totalOrderShipping, setTotalOrderShipping] = useState(0);
  const [revenueByCategory, setRevenueByCategory] = useState([]);
  const [revenueByBrand, setRevenueByBrand] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchTotalRevenue(startDate, endDate);
      setTotalRevenue(response);
      const response2 = await fetchTotalOrders(startDate, endDate);
      setTotalOrders(response2);
      const response3 = await fetchTotalOrderDelivered(startDate, endDate);
      setTotalOrderCompleted(response3);
      const response4 = await fetchTotalOrderShipping(startDate, endDate);
      setTotalOrderShipping(response4);
      const response5 = await fetchRevenueByCategory(startDate, endDate);
      setRevenueByCategory(response5 || []);
      const response6 = await fetchRevenueByBrand(startDate, endDate);
      setRevenueByBrand(response6 || []);
      const response7 = await fetchTopProducts(startDate, endDate);
      setTopProducts(response7);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter() {
    fetchData();
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <PageLayout pageTitle="Dashboard">
      {/* <div className="row mb-3">Good morning </div> */}

      <div
        className="card mb-5 px-3 py-3 text-white"
        style={{ background: "linear-gradient(to right, #3b82f6, #1d4ed8)" }}
      >
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="flex-grow-1">
                <h5 className="card-title mb-2">Good Morning, Admin</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-2 me-3">
                <div className=" col-md-4">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                  />
                </div>
                <div className=" col-md-4">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                  />
                </div>
                <div
                  className="col-md-4 text-center"
                  style={{ paddingTop: "30px" }}
                >
                  <button
                    className="btn btn-success w-75"
                    onClick={handleFilter}
                  >
                    Filter
                  </button>
                </div>
                {/* <div className="col-md-3 text-center" style={{paddingTop:"30px"}}>
      <button className="btn btn-secondary w-75">Reset</button>
    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate" style={{ height: "150px" }}>
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Total Revenue{" "}
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">
                  {formatCurrency(totalRevenue)}{" "}
                </h4>
                <span className="bg-primary-subtle fs-13 rounded p-2">
                  <AiOutlineDollar size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate" style={{ height: "150px" }}>
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Total Orders
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">{totalOrders}</h4>
                <span className="bg-success-subtle fs-13 rounded p-2">
                  <AiOutlineDollar size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate" style={{ height: "150px" }}>
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Orders Completed
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">{totalOrderCompleted}</h4>
                <span className="bg-info-subtle fs-13 rounded p-2">
                  <IoBagOutline size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card card-animate" style={{ height: "150px" }}>
            <div className="card-body">
              <p className="text-uppercase fw-medium text-muted ">
                Orders Shipping
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="fw-semibold mb-0">{totalOrderShipping}</h4>
                <span className="bg-warning-subtle fs-13 rounded p-2">
                  <FaRegUser size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card mt-5">
        <div className="card-header d-flex align-items-center ">
          <h5 className="card-title flex-grow-1 text-muted mb-0">
            Revenue by month
          </h5>
        </div>
      </div> */}

      <div className="card mt-3">
        <div className="card-header d-flex align-items-center ">
          <h5 className="card-title flex-grow-1 text-muted mb-0">Sales</h5>
        </div>
        <div className="card-body p-5">
          <div className="row justify-content-evenly">
            <div className="col-lg-6 d-flex justify-content-center">
              <PieChart data={revenueByCategory} />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <DonutChart data={revenueByBrand} />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 mb-5">
        <div className="card-header d-flex align-items-center">
          <h5 className="card-title text-muted mb-0">Top Selling Products</h5>
        </div>
        <div className="card-body p-3">
          {/* <div className="table-responsive table-card mt-3 mb-3 px-3">
            <table className="table table-nowrap table-hover align-middle mb-0">
              <thead className="table-light text-muted">
                <tr>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.product_id}>
                    <td className="text-semibold">{product.product_id}</td>
                    <td className="text-semibold">{product.name}</td>
                    <td className="text-semibold">{formatCurrency( product.price)}</td>
                    <td className="text-semibold">{product.total_quantity}</td>
                    <td className="text-semibold">{formatCurrency( product.total_quantity * product.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          <Grid
            data={topProducts.map((product) => [
              product.product_id,
              _(
                <div className="d-flex gap-2">
                  <img
                    src={product.imgUrl}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginLeft: "-24px",
                    }}
                  />
                  <div className="d-flex align-items-center">
                    {" "}
                    {product.name}{" "}
                  </div>
                </div>
              ),
              formatCurrency(product.price),
              product.total_quantity,
              formatCurrency(product.total_quantity * product.price),
            ])}
            columns={["ID", "Product Name", "Price", "Sales", "Revenue"]}
            search={true}
            sort={true}
            fixedHeader={true}
            pagination={{
              enabled: true,
              limit: 5,
            }}
            style={{
              border: "none",
            }}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
