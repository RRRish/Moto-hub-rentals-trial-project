function calculateTotalPrice() {
    var bikeType = document.getElementById("bikeType").value;
    var numberOfDays = parseInt(document.getElementById("numberOfDays").value);
    var pricePerDay;

    
    switch (bikeType) {
        case "Himalayan":
            pricePerDay = 1999;
            break;
        case "GT650":
            pricePerDay = 2499;
            break;
        case "Hunter":
            pricePerDay = 1499;
            break;
        case "R15":
        case "MT":
            pricePerDay = 999;
            break;
        case "KTM":
            pricePerDay = 1199;
            break;
        case "Classic":
            pricePerDay = 1799;
            break;
        default:
            pricePerDay = 0;
    }

    
    var totalPrice = pricePerDay * numberOfDays;

    
    document.getElementById("totalPrice").innerText = "Total Price: ₹" + totalPrice.toFixed(2);
}
function calculateTotalPrice() {
    const bikeType = document.getElementById('bikeType').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (startDate > endDate) {
        document.getElementById('totalPrice').innerText = 'End date must be after start date.';
        return;
    }

    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;

    const totalPrice = daysDifference * bikeType;

    document.getElementById('totalPrice').innerText = `Total Price: ₹${totalPrice}`;
}
