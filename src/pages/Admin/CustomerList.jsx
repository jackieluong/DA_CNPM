import { useEffect, useState } from "react";
import CustomerTableList from "../../components/Tables/CustomerTableList";
import PageLayout from "../../Layouts/PageLayout";
import { fetchCustomersData } from "../../services/CustomerService";

function CustomerList() {

  const [customerData, setCustomerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCustomersData();
      
    
        setCustomerData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if(isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <PageLayout pageTitle="Customer List">
      <div className="table-list">
        <div className="table-header"></div>
        <div className="table-body">
          <CustomerTableList
            customerData={customerData}
            setCustomerData={setCustomerData}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default CustomerList;
