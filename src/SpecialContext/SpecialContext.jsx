import { createContext, useReducer } from "react";
import SpecialReducer from "./SpecialReducer";

const SpecialContext = createContext();
export const SpecialProvider = ({ children }) => {
  const initialState = {
    specialfoods: [
      {
        id: "bo-ssam-dinner-for-4-6",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Momofuku",
        dsc: "Half Bo Ssäm Dinner for 4-6",
        price: 169,
        rate: 4,
        country: "New York, NY",
      },
      {
        id: "legendary-seafood-gumbo",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Commander's Palace",
        dsc: "Legendary Seafood Gumbo",
        price: 89,
        rate: 4,
        country: "New Orleans, LA",
      },
  
  


      {
        id: "whole-brisket-texas-bbq-sauce",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110384/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Franklin Barbecue",
        dsc: "Whole Brisket + Texas Barbecue BBQ Sauce",
        price: 249,
        rate: 5,
        country: "Austin, TX",
      },
      
    
      {
        id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Alidoro",
        dsc: '"The Gothamist" Prosciutto + Burrata Sandwich Kit - 4 Pack',
        price: 99,
        rate: 4,
        country: "New York, NY",
      },
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

      {
        id: "artisanal-bread-choose-your-own-3-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Orwashers Bakery",
        dsc: "Artisanal Bread - Choose Your Own 3 Pack",
        price: 45,
        rate: 5,
        country: "New York, NY",
      },
     
     
     
     
     
     
     
     
     
      {
        id: "corn-cheese-bread-2-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Calic Bread",
        dsc: "Corn Cheese Bread - 2 Pack",
        price: 89,
        rate: 5,
        country: "Los Angeles, CA",
      },
      {
        id: "15259-german-chocolate-killer-brownie-tin-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Killer Brownie®",
        dsc: "German Chocolate Killer Brownie®",
        price: 39.99,
        rate: 4,
        country: "Dayton, OH",
      },
     
     
     
     
     
     
     
     
     
      {
        id: "jacques-world-famous-chocolate-chip-cookies",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Jacques Torres Chocolate",
        dsc: "Jacques’ World Famous Chocolate Chip Cookies - 6 Pack",
        price: 39.95,
        rate: 4,
        country: "New York, NY",
      },
      {
        id: "luigis-original-cannoli-pie",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "The Cannoli Pie Company",
        dsc: "Original Cannoli Pie",
        price: 69,
        rate: 4,
        country: "Bridgeport, CT",
      },
      {
        id: "sea-salted-caramel-swirl-cheesecake",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Cotton Blues Cheesecake Company",
        dsc: "Sea-Salted Caramel Swirl Cheesecake",
        price: 65,
        rate: 4,
        country: "Hattiesburg, MS",
      },
      {
        id: "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Brooklyn Blackout Company",
        dsc: "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
        price: 89,
        rate: 5,
        country: "Brooklyn, NY",
      },

     
     
     
     
     
     
    
    
    
    
    
    
    
    
    
      {
        id: "choose-your-own-6-pints",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78414/ice-cream-choose-your-own-6-pints.ec19c8772f1fc363e86ef01890a56124.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Malai Ice Cream",
        dsc: "Ice Cream - Choose Your Own 6 Pints",
        price: 109,
        rate: 5,
        country: "Brooklyn, NY",
      },
      {
        id: "choose-your-own-ice-cream-12-pints",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96047/ice-cream-choose-your-own-12-pints.e57770eaab1a0b7837095eda979e9a2b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Graeter's Ice Cream",
        dsc: "Ice Cream - Choose Your Own 12 Pints",
        price: 119.95,
        rate: 4,
        country: "Cincinnati, OH",
      },
      {
        id: "best-sellers-ice-cream-collection-6-pints",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95838/taste-of-kentucky-ice-cream-collection-6-pints.dc03a97b15828e9a01e81efc0b309d4d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Crank & Boom Craft Ice Cream",
        dsc: "Best Sellers Ice Cream Collection - 6 Pints",
        price: 99,
        rate: 4,
        country: "Lexington, KY",
      },
      {
        id: "choose-your-own-ice-cream-donuts-6-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Elegant Desserts",
        dsc: "Choose Your Own Ice Cream Donuts - 6 Pack",
        price: 69,
        rate: 5,
        country: "Brooklyn, NY",
      },
    
    
    
    
    
    
    
    
    
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
     
     
     
     
     
     
     
     
      {
        id: "giant-ice-cream-sandwich-kit-choose-your-own-6-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132386/build-your-own-ice-cream-sandwich-kit-6-pack.c81bd69ed1a452decb5bc599358dc644.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "The Baked Bear",
        dsc: "Build Your Own Ice Cream Sandwich Kit - 6 Pack",
        price: 84,
        rate: 5,
        country: "San Diego, CA",
      },
     
     
     
     
     
     
     
     
     
      {
        id: "layered-ice-cream-sundae-jar-choose-your-own-6-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129301/layered-ice-cream-sundae-jar-choose-your-own-6-pack.a018cc2bb407befc6d7b618441849c28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "The Yard Milkshake Bar",
        dsc: "Layered Ice Cream Sundae Jar - Choose Your Own 6 Pack",
        price: 125,
        rate: 5,
        country: "Gulf Shores, AL",
      },
     
     
     
     
     
     
     
     
     
      {
        id: "best-seller-ice-cream-pack-6-pints",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113988/best-seller-ice-cream-pack-6-pints.0d2fe2cd8b15418dbfff9b07e5387dbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Bridgeman's Ice Cream",
        dsc: "Best Seller Ice Cream Pack - 6 Pints",
        price: 99,
        rate: 5,
        country: "Woodbury, MN",
      },

     
     
     
     
     
     
     
     
     
      {
        id: "guys-caliente-margaritas-for-12",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Guy Fieri",
        dsc: "Guy's Caliente Margaritas for 12",
        price: 69,
        rate: 5,
        country: "Flavortown, USA",
      },
      {
        id: "woodford-reserve-mint-julep-syrup",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Woodford Reserve",
        dsc: "Woodford Reserve Mint Julep Syrup",
        price: 39,
        rate: 4,
        country: "Louisville, KY",
      },
     
     
     
     
     
     
     
     
     
    ],
  };

  const [state, dispatch] = useReducer(SpecialReducer, initialState);

  return (
    <SpecialContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SpecialContext.Provider>
  );
};
export default SpecialContext;
