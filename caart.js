// cart.js
const totalRow = document.createElement('tr');
totalRow.innerHTML = `
    <td colspan="3" style="text-align:right; font-weight:bold;">Total</td>
    <td>&#8377; ${totalAmount}</td>
`;
cartTable.appendChild(totalRow);
