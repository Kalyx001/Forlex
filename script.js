//script//

// Function to create a WhatsApp message with product details
function orderViaWhatsApp(productId) {
  const productToOrder = products.find(product => product.id === productId);

  // Replace 'XXXXXXXXXXXX' with your actual WhatsApp number
  const whatsappNumber = '+254741766185';
  const message = `Hi, I'd like to order ${productToOrder.name} (ID: ${productToOrder.id}).`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink);
}
// Automatic horizontal scrolling
let container = document.querySelector('.subscription-plans-container');
let scrollAmount = 0;
let scrollDelay = 2; // Change this value to adjust scrolling speed

function autoScroll() {
  container.scrollLeft += 1;
  scrollAmount += 1;
  if(scrollAmount % container.clientWidth === 0) {
    clearInterval(scrollInterval);
    setTimeout(() => {
      scrollInterval = setInterval(autoScroll, scrollDelay);
    }, 2000); // Change this value to adjust pause between scrolls
  }
}

let scrollInterval = setInterval(autoScroll, scrollDelay);
