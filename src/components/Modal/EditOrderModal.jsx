import { useEffect, useState } from "react";
import SelectInput from "../FormInput/SelectInput";
import { paymentOptions, paymentStatusOptions, statusOptions } from "../../utils/selectOptions";
import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";


function EditModal({
  selectedOrder,
  showModal,
  handleToggleModal,
  handleEditConfirm,
  title,
  body,
  close,
  confirm,
}) {
  
  const [orderStatus, setOrderStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const [showToast, setShowToast] = useState(false); // Manage toast state locally

  
  useEffect(() =>{
    if(selectedOrder) {
      setOrderStatus(selectedOrder.status);
      setPaymentStatus(selectedOrder.payment_status);
    }
  },[selectedOrder]);

  
  function handleChange(e){
    const {name, value} = e.target;
    if(name === 'status'){
      setOrderStatus(value);
    }
    if(name === 'payment_status'){
      setPaymentStatus(value);
    }

    // selectedOrder = {...selectedOrder, [name]: value};
  }
  
  
  function handleClickConfirm() {
    const updatedOrder = {...selectedOrder, status: orderStatus, payment_status: paymentStatus};
    handleEditConfirm(updatedOrder);
    setShowToast(true); // Trigger the toast
    handleToggleModal();
  }
  

  

  return (
    <>
     <ToastContainer position="top-end" style={{position: 'fixed', marginTop: '30px', marginRight: '30px'}}>
        <Toast className="bg-success text-white" show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Update</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body  className="text-white">Order updated successfully!</Toast.Body>
        </Toast>
      </ToastContainer>

      <Modal show={showModal} onHide={handleToggleModal} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Order Status Dropdown */}
        <SelectInput
          label="Order Status"
          options={statusOptions}
          name="status"
          value={orderStatus}
          handleChange={handleChange}
        />

        {/* Payment Status Dropdown */}
        <SelectInput
          label="Payment Status"
          options={paymentStatusOptions}
          name="payment_status"
          value={paymentStatus}
          handleChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleModal}>
          {close}
        </Button>
        <Button variant="primary" onClick={handleClickConfirm}>
          {confirm}
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default EditModal;
