import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import ImgBg from '../../images/smash-burger.jpeg';
import ImgMsh from '../../images/Smashroom.jpeg';
import ImgChkn from '../../images/chicken-sandwich.jpeg';
import ImgBananaCakes from '../../images/banana-pancakes.jpeg';
import ImgHalvah from '../../images/halva.jpeg';





export const productData = [
  {
    img: ImgBg,
    alt: 'Burger',
    name: 'Smash Burger',
    desc:
      'two smash patties (V), lettuce, pickles, roma tomatoes, american cheese (V), and grilled sesame seed bun',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: ImgMsh,
    alt: 'Smashroom',
    name: 'Day Tripper',
    desc:
      '  aioli (V), fungi misti, fresh mozzarella (V), tomatoes, Calabrian peppers, and crispy italian bread',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: ImgChkn,
    alt: 'ChickenSandwich',
    name: 'Crunchy Chicken Sandwich',
    desc:
      'coleslaw, banana peppers, vegan cajun aioli, impossible chicken on ciabbata roll',
    price: '$14.99',
    button: 'Add to Cart'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'vegan cake and yeast donuts with fresh, seasonal flavors',
    price: '$9.99',
    button: 'Add to Cart'
  },
  {
    img: ImgBananaCakes,
    alt: 'Banana Pancakes',
    name: 'Banana-Oat Pancakes',
    desc:
      'With chocolate chips and topped with lemon zest,  greek yogurt and maple syrup or honey',
    price: '$12.99',
    button: 'Add to Cart'
  },
  {
    img: ImgHalvah,
    alt: 'halva',
    name: 'Chocolate-Covered Halva',
    desc:
      'a soft, fudgelike candy made out of sesame paste coated in chocolate and coarse sea salt',
    price: '$9.99',
    button: 'Add to Cart'
  }
];
