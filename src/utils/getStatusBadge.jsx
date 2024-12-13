export function getStatusBadge(status) {
  if(!status) return <span className="badge bg-secondary">Unknown</span>;
    switch (status.toLowerCase()) {
        case 'shipping':
            return <span className="badge bg-primary text-primary-subtle text-uppercase">Shipping</span>;
          case 'processing':
            return <span className="badge bg-secondary-subtle text-secondary text-uppercase">Processing</span>;
          case 'delivered':
            return <span className="badge bg-success-subtle text-success text-uppercase">Delivered</span>;
          case 'cancelled':
            return <span className="badge bg-danger-subtle text-danger text-uppercase">Cancelled</span>;
          default:
            return <span className="badge bg-secondary">Unknown</span>;
        
    }
}

export function getStatusBadgeClient(status) {
  if(!status) return <span className="badge bg-secondary">Unknown</span>;
    switch (status.toLowerCase()) {
        case 'shipping':
            return <span className="badge bg-primary text-primary-subtle text-uppercase">Vận chuyển</span>;
          case 'processing':
            return <span className="badge bg-secondary-subtle text-secondary text-uppercase">Chờ xác nhận</span>;
          case 'delivered':
            return <span className="badge bg-success-subtle text-success text-uppercase">Hoàn thành</span>;
          case 'cancelled':
            return <span className="badge bg-danger-subtle text-danger text-uppercase">Đã hủy</span>;
          default:
            return <span className="badge bg-secondary">Unknown</span>;
        
    }
}

export function getPaymentStatusBadge(payment_status){
  if(!payment_status) return <span className="badge bg-secondary">Unknown</span>;
  payment_status = payment_status.toLowerCase();
  if(payment_status === 'completed'){
    return <span className="badge bg-success-subtle text-success text-uppercase">Completed</span>;
  }
  else{
    return <span className="badge bg-danger-subtle text-danger text-uppercase">Not Completed</span>;
  }
}