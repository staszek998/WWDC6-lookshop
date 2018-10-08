import React, { Component } from "react";

import Product from "./Product/Product";

import img1 from "../../../../../images/database/clothes/dresses/king-louie/1.png";
import img2 from "../../../../../images/database/clothes/dresses/lee/1.jpg";
import img3 from "../../../../../images/database/underwear/bras/ck-decolette/1.jpg";
import img4 from "../../../../../images/database/underwear/bras/maidenform/1.jpg";
import img5 from "../../../../../images/database/underwear/tights-and-stockings/falke-stockings/1.jpg";
import img6 from "../../../../../images/database/underwear/tights-and-stockings/strapped-suspender/1.jpg";
import img7 from "../../../../../images/database/shoes/high-heels/hogl/1.jpg";
import img8 from "../../../../../images/database/shoes/high-heels/mai-piu-senza/1.jpg";
import img9 from "../../../../../images/database/shoes/sneakers/superstar-foundation/1.jpg";
import img10 from "../../../../../images/database/shoes/sneakers/hybrid-iconic/1.jpg";

const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

const exampleImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const shuffle = arrayToShuffle => {
  let copiedArray = arrayToShuffle.map(el => el);
  let ctr = copiedArray.length,
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
