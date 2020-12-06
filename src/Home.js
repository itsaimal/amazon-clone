import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Fitness Band L462626"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung Health Fit Watch/Fitness Band S65234"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Playstation 4 Pro"
            price={299.99}
            rating={4}
            image="https://psmedia.playstation.com/is/image/psmedia/ps4-pro-listing-thumb-01-ps4-eu-06sep16?$Icon$"
          />
          <Product
            id="23445930"
            title="Xbox one Elite Console 1TB"
            price={98.99}
            rating={5}
            image="https://assets.stickpng.com/images/585ea273cb11b227491c350a.png"
          />
          <Product
            id="3254354345"
            title="Xbox 360s Controller Refurbished"
            price={598.99}
            rating={4}
            image="https://lh3.googleusercontent.com/proxy/_uy34IoyoFIyXqnGJUvp4UCeIEacMmjLlyFXO5YAMHO54JCATlmX0dHabdDzNgeiOu4fzM1Q7oUYp4vguobVNO_aZyxrYMTpGmKszoldqr77B9zg9FE"
          />
        </div>  

        <div className="home__row">
          <Product
            id="4903850"
            title="Pc Office #2 By Hp 2011985"
            price={199.99}
            rating={3}
            image="https://lh3.googleusercontent.com/proxy/ETH6JT7Zlc8fGVJZyvqNua2LlKyQNHeuND7z8VFfFmplMf4HpBoNBWFOVNOdWqR5_M61nf_ybv0mKX-a68NJu0s86CGx8_wmq3b4-rPeDEPQG13SOXezBhSuXNSBSCtapks"

          />
          <Product
            id="4903850"
            title="Tohsibs r4325 Laptop 2020"
            price={98.99}
            rating={5}
            image="https://lh3.googleusercontent.com/proxy/WVIigaeRAdPU_GSRWyeqCoTopoQHLegaUXjaCjioKXFD4QrgH6a0ZkZZe-UpC-tYRr93j2zCmT_GLu5N6cPnLEbb90cMQXQ-uKP_ktdxYw7u8Ff_lbS-splUVvPxPh8"

          />
          <Product
            id="3254354345"
            title="Apple iphone 10 (x)"
            price={598.99}
            rating={4}
            image="https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png"

          />
        </div>  

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung S20 ultra siver mesh pink"
            price={199.99}
            rating={3}
            image="https://ghost-armor.com/media/catalog/product/cache/f9b262cccfc4db316b94156ff62f9953/g/a/galaxy_s20_5.png"
          />
          <Product
            id="23445930"
            title="Socks Pair x2"
            price={98.99}
            rating={5}
            image="https://lh3.googleusercontent.com/proxy/-jUDSfcFl5hTgfP3kMa18bsLubbEV6Sw56AErl9ChRzIXEANNFjCXZ4CfH07RpodW0E1vu-jZBi8e4KKnoLkgt8WmY__B_LTruQZvRCi1IAYKoIFixV5DYk-yEV1IKXs"

          />
          <Product
            id="3254354345"
            title="Raytex Gaming Pc i7 rx5600 RTX 2800"
            price={598.99}
            rating={4}
            image="https://media.gamestop.com/i/gamestop/11096694/CLX-SET-TGMSETRTH9613BM-Gaming-Desktop"
          />
        </div>  

        <div className="home__row">
          <Product
            id="4903850"
            title="PEWDIEPIE merch"

            price={59.99}
            rating={3}
            image="https://www.seekpng.com/png/small/34-346478_pewdiepie-zero-deaths-60-mil-t-shirt-pewdiepie.png"
          />
          <Product
            id="23445930"
            title="IkEA JORDAN"
            price={98.99}
            rating={5}
            image="https://cdn130.picsart.com/299718752026211.png?type=webp&to=min&r=640"
          />
          <Product
            id="3254354345"
            title="Gucci Myron Bag Italiano By murichi"
            price={598.99}
            rating={4}
            image="https://assets.stickpng.com/images/580b57fbd9996e24bc43bf85.png"
          />
        </div>  

        <div className="home__row">
          <Product
            id="4903850"
            title="Gucci Bag"
            price={666.99}
            rating={3}
            image="https://p.kindpng.com/picc/s/347-3473771_transparent-gucci-bag-png-gucci-bag-transparent-background.png"
          />
         
        </div>  

        <div className="home__row">
          <Product
            id="4903850"
            title="Fendi shirt"
            price={100.09}
            rating={3}
            image="https://www.kindpng.com/picc/m/604-6048024_black-fendi-monster-yellow-eyes-t-shirt-t.png"

          />
          <Product
            id="23445930"
            title="Gucci Balenclava"
            price={198.99}
            rating={5}
            image="https://cdn141.picsart.com/323097188521211.png?type=webp&to=min&r=640"
          />
          <Product
            id="3254354345"
            title="Balenciaga shoes"
            price={499.99}
            rating={4}
            image="https://cdn.luxe.digital/media/2020/02/17134426/balenciaga-black-speed-men-sneakers-luxe-digital.jpg"
            
          />
        </div>  
      </div>
    </div>
  );
}

export default Home;
