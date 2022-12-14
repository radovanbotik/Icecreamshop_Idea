import { getElement } from "./getElement.js";
import { products } from "./products.js";

const images = getElement("#products-images");

const renderImages = () => {
  const productsHTML = products
    .map(product => {
      const { id, image } = product;
      return `
      <article class='control__images__image' id="${id}">
        <img
           src="${image}"
           alt="portrait of product ${id}"
           />
           
           
           <svg class='heart' width="99" height="91" viewBox="0 0 99 91" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728" stroke="#ffffff" stroke-width="1.83638" stroke-linecap="round"></path>
         </svg>
       
       
      </article>
      `;
    })
    .join("");
  images.innerHTML = productsHTML;
  // const imagesArr = [...images.children];
  // console.log(imagesArr);
  // imagesArr.forEach((art, index) => {
  //   art.style.top = `${100 * index}%`;
  // });
  return images;
};

export { renderImages };
