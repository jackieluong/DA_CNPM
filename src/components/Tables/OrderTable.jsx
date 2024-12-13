import { LiaEtsy } from "react-icons/lia";
import { formatCurrency } from "../../utils/formatCurrency";

function OrderTable({selectedOrder }) {

const orderProducts = selectedOrder.products;

  let subTotal = 0;

  orderProducts.forEach((product) => {
    subTotal += product.price * product.quantity;
  })
  return (
    <div className="table-responsive table-card">
      <table className="table table-nowrap align-middle table-borderless mb-0">
        <thead className="table-light text-muted">
          <tr>
            <th scope="col" className="text-muted">Product</th>
            <th scope="col" className="text-muted">Item Price</th>
            <th scope="col" className="text-muted">Quantity</th>
            <th scope="col" className="text-end text-muted">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {orderProducts.map((orderProduct) => (
            <tr key={orderProduct.product_id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <img
                      src={orderProduct.imgUrl}
                      alt="product"
                      className="rounded"
                      style={{ width: "60px", height: "60px" }} 
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-1 text-primary-emphasis">{orderProduct.name}</h6>
                  </div>
                </div>
              </td>
              <td>{formatCurrency( orderProduct.price)}</td>
              <td>{orderProduct.quantity}</td>
              <td className="text-end"> {formatCurrency( orderProduct.price * orderProduct.quantity)}</td>
            </tr>
            
          ))}
          <tr className="border-top border-top-dashed">
               <td colSpan="3" className="text-end">
                <span className="fw-normal ">Sub Total:</span>
              </td>
              <td className="text-end">{formatCurrency(subTotal)}</td>
              </tr>
            <tr>
              
              <td colSpan="3" className="text-end"><span className="fw-normal">Shipping Fee:</span></td>
              <td className="text-end">{formatCurrency( selectedOrder.ship_fee.toFixed(2))}</td>
            </tr>

            <tr className="">
            <td colSpan="3" className="text-end">
              <span className="fw-semibold">Grand Total(USD):</span>
            </td>
            <td className="text-end fw-bold">{formatCurrency((subTotal + selectedOrder.ship_fee).toFixed(2))}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
