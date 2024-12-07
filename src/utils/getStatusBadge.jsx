export function getStatusBadge(status) {
    switch (status.toLowerCase()) {
        case 'shipping':
            return <span className="badge bg-primary text-primary-subtle text-uppercase">InProgress</span>;
          case 'processing':
            return <span className="badge bg-secondary-subtle text-secondary text-uppercase">Pending</span>;
          case 'delivered':
            return <span className="badge bg-success-subtle text-success text-uppercase">Delivered</span>;
          case 'cancelled':
            return <span className="badge bg-danger-subtle text-danger text-uppercase">Cancelled</span>;
          default:
            return <span className="badge bg-secondary">Unknown</span>;
        
    }
}

export function getPaymentStatusBadge(payment_status){
  payment_status = payment_status.toLowerCase();
  if(payment_status === 'completed'){
    return <span className="badge bg-success-subtle text-success text-uppercase">Paid</span>;
  }
  else{
    return <span className="badge bg-danger-subtle text-danger text-uppercase">Unpaid</span>;
  }
}