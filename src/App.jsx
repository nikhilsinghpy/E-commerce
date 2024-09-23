import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ProductCard from "./Components/ProductCards";
import Sidebar from "./Components/Sidebar";
import MarketplaceHeader from "./Components/MarkPlaceheader";
import Footer from "./Components/Footer";
import LoginForm from './Components/Login_Form';
import Contact from "./Components/Contact";
import About from './Components/About';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Home');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  const Products = {
    Home: [
      {
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5Tw0sEcAwj0R8xxUeKgdBPYZca82KrW-sxGbnFdpXQHhcb-b87K2gpdiR_KkGOwbg45nbI6aZ_NiZcV6Qrl3ELqXQxzaB',
        title: 'Comfortable Sofa',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://m.media-amazon.com/images/I/61Nran-05xL.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: "https://m.media-amazon.com/images/I/7131Zqy5fJL._AC_UL480_FMwebp_QL65_.jpg",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://m.media-amazon.com/images/I/71x4rLhMkML._AC_UL320_.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },

      {
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5Tw0sEcAwj0R8xxUeKgdBPYZca82KrW-sxGbnFdpXQHhcb-b87K2gpdiR_KkGOwbg45nbI6aZ_NiZcV6Qrl3ELqXQxzaB',
        title: 'Comfortable Sofa',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://m.media-amazon.com/images/I/61Nran-05xL.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: "https://m.media-amazon.com/images/I/7131Zqy5fJL._AC_UL480_FMwebp_QL65_.jpg",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://m.media-amazon.com/images/I/71x4rLhMkML._AC_UL320_.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
    ],
    Electronics: [
      {
        image: 'https://m.media-amazon.com/images/I/61ZQmvzVJuL._AC._SR360,460.jpg',
        title: 'Digital Camera',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://m.media-amazon.com/images/I/91K--lLk2dL._AC._SR360,460.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: "https://m.media-amazon.com/images/I/41X5FjcdjYL._SR480,440_.jpg",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://m.media-amazon.com/images/I/71uiZhOGQIL._AC_UL320_.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },

      {
        image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/dec/pc/sbc/440X460_1.jpg',
        title: 'Comfortable Sofa',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://m.media-amazon.com/images/I/71ATvdKL+LL._AC_UL320_.jpg  ',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: "https://m.media-amazon.com/images/I/71DKelRlIlL._AC._SR360,460.jpg",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://m.media-amazon.com/images/I/31lYlI1JNlL._SR480,440_.jpg',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
    ],

    Fashion: [
      {
        image: "https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/SEASONALTRENDS/beach_Shirts._SS400_QL85_.jpg",
        title: 'Fancy shirts',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/SEASONALTRENDS/oversized_tshirt_copy._SS400_QL85_.jpg',
        title: 'Puma Cap',
        price: 99,
        rating: 4.2,
        reviews: 123
      },
      {
        image: 'https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Formals/Suits._SY530_QL85_FMpng_.png',
        title: 'Formal Suits ',
        price: 2549,
        rating: 5,
        reviews: 98
      },
      {
        image: 'https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Formals/Belts._SY530_QL85_FMpng_.png',
        title: 'Belt',
        price: 149,
        rating: 3,
        reviews: 118
      },

      {
        image: 'https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/5._CB580484771_.png',
        title: 'Shoes',
        price: 599,
        rating: 4.5,
        reviews: 163
      },
      {
        image: 'https://m.media-amazon.com/images/I/61Nran-05xL.jpg',
        title: 'Modern Chair',
        price: 949,
        rating: 3.9,
        reviews: 75
      },
      {
        image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/Halos/8._CB580484771_.png",
        title: 'Couple Combo',
        price: 3999,
        rating: 4.2,
        reviews: 1187
      },
      {
        image: 'https://m.media-amazon.com/images/I/71x4rLhMkML._AC_UL320_.jpg',
        title: 'Men T-shirts',
        price: 249,
        rating: 4.5,
        reviews: 908
      },
    ],

    Beauty: [
      {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/e/9/h/80-hamilton-edp-srk-s-favorite-luxury-gift-pack-20ml-x-4-set-eau-original-imah29pvcwvuqgtk.jpeg?q=70",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/brush-applicator/n/a/s/-original-imah4ehqxrz2fzqv.jpeg?q=70',
        title: 'Comfortable Sofa',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-treatment/8/w/z/400-rosemary-water-for-hair-growth-hair-spray-for-regrowth-original-imah2f2he3fryh99.jpeg?q=70',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo/z/6/n/-original-imagsy625pjjbbz8.jpeg?q=70',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },

      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hair-volumizer/s/r/h/10-hair-volumizing-powder-wax-with-strong-hold-matte-finish-for-original-imagmaqtehu6zkc9.jpeg?q=70',
        title: 'Comfortable Sofa',
        price: 199,
        rating: 4,
        reviews: 123
      },
      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/z/d/j/50-pimple-patches-for-face-pimple-patch-acne-patches-for-pimples-original-imahye2un8ehkgyf.jpeg?q=70',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
      {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/f/d/m/50-pimple-patches-for-face-pimple-patch-acne-patches-for-pimples-original-imahye2uxrbbksdd.jpeg?q=70",
        title: 'Coffee Cup',
        price: 108,
        rating: 3.5,
        reviews: 187
      },
      {
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/n/c/l/150-perfume-for-men-combo-3-x-50ml-black-blanc-fire-long-lasting-original-imah45h8qut8ceet.jpeg?q=70',
        title: 'Modern Chair',
        price: 149,
        rating: 5,
        reviews: 98
      },
    ],

  };

  const selectedProducts = Products[selectedCategory];

  return (
    <>
      <Navbar setShowAboutPage={setShowAboutPage} setShowContactPage={setShowContactPage} setShowLoginForm={setShowLoginForm} setSelectedCategory={setSelectedCategory} />


 

       {showAboutPage ? ( <About />) :  showContactPage ? (<Contact />): (
        showLoginForm ? (
          <LoginForm closeForm={() => setShowLoginForm(false)} />
        ) : (
          <>
            <MarketplaceHeader setSelectedCategory={setSelectedCategory} />
            <div className="App">
        <div className="sidebar-container">
                  <Sidebar />
        </div>
              <div className="product-list">
                {selectedProducts.map((product, index) => (
                  <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  />
                ))}
              </div>
            </div>
            <Footer />
           
          </>
        )
      )}
    </>
  );
}

export default App;
