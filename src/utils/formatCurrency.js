export function formatCurrency(value) {
    // Load currency
    if (!value || isNaN(value)) return "0 đồng";
  
    const number = parseFloat(value);
  
    if (number < 1000) {
      return `${number} `;
    } else if (number < 1_000_000) {
      const thousands = Math.floor(number / 1000);
      return `${thousands} ngàn `;
    } else if (number < 1_000_000_000) {
      const millions = Math.floor(number / 1_000_000);
      const remainder = number % 1_000_000;
      const thousands = Math.floor(remainder / 1000);
      if (thousands > 0) {
        return `${millions} triệu ${thousands} ngàn `;
      } else {
        return `${millions} triệu `;
      }
    } else if (number < 1_000_000_000_000) {
      const billions = Math.floor(number / 1_000_000_000);
      const remainder = number % 1_000_000_000;
      const millions = Math.floor(remainder / 1_000_000);
      if (millions > 0) {
        return `${billions} tỉ ${millions} triệu `;
      } else {
        return `${billions} tỉ `;
      }
    } else {
      return `${(number / 1_000_000_000_000).toFixed(0)} nghìn tỉ `;
    }
  }