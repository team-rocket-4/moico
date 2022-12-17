(() => {
  // Get the queue of recently-seen-products from local storage
  const key = "recently-seen-products";
  let queue = JSON.parse(localStorage.getItem(key)) || [];

  // Render the images in the queue
  queue.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.sImgSrc;
    document.body.appendChild(img);
  });

  // Get current product data from session storage
  const localRecentProduct1 = sessionStorage.getItem("localRecentProduct1");
  const currentProductData = localRecentProduct1[0];

  // Check if the current product is already in the queue
  const index = queue.findIndex(
    (item) => item.iProductNo === currentProductData.iProductNo,
  );

  if (index > -1) {
    // Remove the item from the queue
    queue.splice(index, 1);
  }

  // Save the current product to the queue
  queue.push(currentProductData);

  // Only save up to 10 items
  if (queue.length > 10) {
    queue.shift();
  }

  localStorage.setItem(key, JSON.stringify(queue));
})();
