import { Grid } from "gridjs-react"; // For React
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import {getStatusBadge, getPaymentStatusBadge} from "../../utils/getStatusBadge";
import EditModal from "../Modal/EditOrderModal";

import { formatDateTime } from "../../utils/formatDateTime";
import { updateOrder } from "../../services/OrderService";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import 'react-toastify/dist/ReactToastify.css';
function OrderListTable({ orderData, filteredOrderData, setOrderData }) {
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  
  const navigate = useNavigate();

  function handleToggleEditModal() {
    setShowEditModal((showEditModal) => !showEditModal);
  }

  function handleClickView(id) {
    setSelectedOrderId(id);

    navigate(`/admin/orders/detail/${id}`);
  }

  const selectedOrder = orderData.find(
    (order) => order.order_id === selectedOrderId
  );
  function handleClickEdit(id) {
    setSelectedOrderId(id);
    
    handleToggleEditModal();
  }

  
  async function handleSaveEdit(updatedOrder) {
    console.log("updatedOrder", updatedOrder);

    try {
      const response = await updateOrder(selectedOrderId, updatedOrder);
      
    } catch (error) {
      alert(error);
      return;   
    }

    const updatedOrders = orderData.map((order) =>
      order.order_id == selectedOrderId? updatedOrder : order
    );
    setOrderData(updatedOrders);
    // toast.success("Order updated successfully!");
    
  }
  console.log(orderData);
  return (
    <>
      {/* <Modal
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        handleConfirm={handleDeleteOrder}
        title="Confirm Delete"
        body="Are you sure you want to delete this order?"
        close="Cancel"
        confirm="Confirm"
      /> */}
      
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <EditModal
        selectedOrder={selectedOrder}
        showModal={showEditModal}
        handleToggleModal={handleToggleEditModal}
        title={"Edit Order"}
        close="Cancel"
        handleEditConfirm={handleSaveEdit}
        confirm="Save Changes"
      />
      <div className="table-body">
        <Grid
          data={filteredOrderData.map((order) => [
            order.order_id,
            order.user_id,
            formatDateTime(order.order_time),
            order.payment_method,
            _(getPaymentStatusBadge( order.payment_status)),
            _(getStatusBadge(order.status)),
            _(
              <div className="d-flex gap-2">
                <Tooltip title="View" placement="top">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => handleClickView(order.order_id)}
                  >
                    <MdOutlineRemoveRedEye />{" "}
                  </button>
                </Tooltip>
                <Tooltip title="Edit" placement="top">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleClickEdit(order.order_id)}
                  >
                    <AiOutlineEdit />{" "}
                  </button>
                </Tooltip>
                {/* <Tooltip title='Delete' placement="top">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleClickDelete(order.order_id)}
                >
                  <MdOutlineDelete />{" "}
                </button>
                </Tooltip> */}
              </div>
            ),
          ])}
          columns={[
            "ID",
            "Customer ID",
            "Order Time",
            "Payment Method",
          
            "Payment Status",
            "Status",
            "Actions",
          ]}
          search={{
            enabled: false,
            placeholder: "Search for orders...", // Modify this text to your desired placeholder
          }}
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
    </>
  );
}

export default OrderListTable;
