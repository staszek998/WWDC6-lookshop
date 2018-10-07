import React, { Component } from "react";

import Product from "./Product/Product";

const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

const exampleImages = [
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/ET/98/1R/02/HG/11/ET981R02H-G11@3.jpg",
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/GU/18/1A/04/QQ/11/GU181A04Q-Q11@5.jpg",
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/ES/18/1A/0K/TK/11/ES181A0KT-K11@3.jpg",
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/2L/P8/1P/00/AQ/11/2LP81P00A-Q11@5.jpg",
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/2L/P8/1Q/00/3Q/11/2LP81Q003-Q11@3.jpg",
  "https://mosaic03.ztat.net/vgs/media/catalog-sm/ES/18/1R/02/MQ/11/ES181R02M-Q11@3.jpg",
  "https://www.theclosetlover.com/sites/files/theclosetlover/productimg/201803/dsc04410.jpg",
  "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_02-21-17-147_1000x.jpg?v=1487705918",
  "https://www.lulus.com/images/product/w_560/2956960_420782.jpg",
  "https://www.chichiclothing.com/product_images/k/954/29.090.17_ChiChi_14_0024__94169_zoom.jpg"
];

const shuffle = arrayToShuffle => {
  var copiedArray = arrayToShuffle.map(el => el);
  var ctr = copiedArray.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = copiedArray[ctr];
    copiedArray[ctr] = copiedArray[index];
    copiedArray[index] = temp;
  }
  return copiedArray;
};

const whatsHotImages = shuffle(exampleImages);
const designersImages = shuffle(exampleImages);
const featuredImages = shuffle(exampleImages);
const latestImages = shuffle(exampleImages);

class Products extends Component {
  renderProducts = images => {
    return (
      <div className="row products">
        {/* Products shown by default */}
        <Product imgSrc={images[0]} />
        <Product imgSrc={images[1]} />

        {/* Products initially collapsed */}
        <div className="col-12 collapse" id="hiddenProducts">
          <div className="row">
            {images.map((url, index) => {
              if (index < 2) {
                return null;
              } else {
                return <Product imgSrc={url} key={url} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    switch (this.props.categoryToShow) {
      case whatsHot:
        console.log("Printing the whats hot images");
        return this.renderProducts(whatsHotImages);
        break;

      case designers:
        console.log("Printing the designers images");
        return this.renderProducts(designersImages);
        break;

      case featured:
        console.log("Printing the featured images");
        return this.renderProducts(featuredImages);
        break;

      case latest:
        console.log("Printing the latest images");
        return this.renderProducts(latestImages);
        break;

      default:
        console.log("Printing the default images");
        return this.renderProducts(exampleImages);
        break;
    }
  }
}

export default Products;
