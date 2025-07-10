function calculateTotalPrice() {
  const bikeType = parseInt(document.getElementById("bikeType").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const totalPriceDiv = document.getElementById("totalPrice");

  if (isNaN(startDate) || isNaN(endDate)) {
    totalPriceDiv.innerText = "Please select both start and end dates.";
    return;
  }

  if (startDate > endDate) {
    totalPriceDiv.innerText = "End date must be after start date.";
    return;
  }

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;

  let totalPrice = daysDifference * bikeType;

  const checkYes = document.getElementById("check-yes").checked;
  const checkNo = document.getElementById("check-no").checked;

  if (checkYes && checkNo) {
    totalPriceDiv.innerText = "Select only one option for insurance.";
    return;
  }

  if (checkYes) {
    totalPrice += 299; 
  }

  totalPriceDiv.innerText = `Total Price: ₹${totalPrice}`;
}
