
    // Global variables
    let currentPage = 1;
    const productsPerPage = 10;

    // Function to fetch makeup products from the API
    async function fetchMakeupProducts(page) {
      const url = `https://makeup-api.herokuapp.com/api/v1/products.json?page=${page}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch makeup products');
      }
    }

    // Function to create and append a product card to the container
    function createProductCard(product) {
      const container = document.getElementById('products-container');

      const card = document.createElement('div');
      card.classList.add('product-card');

      const brand = document.createElement('h3');
      brand.textContent = `Brand: ${product.brand}`;
      card.appendChild(brand);

      const name = document.createElement('p');
      name.textContent = `Name: ${product.name}`;
      card.appendChild(name);

      const price = document.createElement('p');
      price.textContent = `Price: ${product.price}`;
      card.appendChild(price);

      const image = document.createElement('img');
      image.src = product.image_link;
      card.appendChild(image);

      const productLink = document.createElement('a');
      productLink.href = product.product_link;
      productLink.textContent = 'Product Link';
      card.appendChild(productLink);

      const description = document.createElement('p');
      description.textContent = `Description: ${product.description}`;
      card.appendChild(description);

      container.appendChild(card);
    }

    // Function to display makeup products for a given page
    async function displayMakeupProducts(page) {
      const container = document.getElementById('products-container');
      container.innerHTML = ''; // Clear previous products

      try {
        const products = await fetchMakeupProducts(page);
        if (products.length === 0) {
          console.log('No more products to display.');
          return;
        }
        console.log(`Page ${page}`);
        products.forEach((product) => {
          createProductCard(product);
        });
      } catch (error) {
        console.error(error.message);
      }
    }

    // Function to create pagination buttons
    function createPaginationButtons(totalPages) {
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = ''; // Clear previous buttons

      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
          currentPage = i;
          displayMakeupProducts(currentPage);
        });
        paginationContainer.appendChild(button);
      }
    }

    // Function to calculate the total number of pages
    async function getTotalPages() {
      try {
        const products = await fetchMakeupProducts(1);
        const totalProducts = products.length;
        return Math.ceil(totalProducts / productsPerPage);
      } catch (error) {
        console.error(error.message);
        return 0;
      }
    }

    // Function to initialize the page
    async function initializePage() {
      const totalPages = await getTotalPages();
      createPaginationButtons(totalPages);
      displayMakeupProducts(currentPage);
    }

    // Call the function to initialize the page
    initializePage();

  

