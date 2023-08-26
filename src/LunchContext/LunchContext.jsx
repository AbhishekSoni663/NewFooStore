import { useReducer } from "react";
import { createContext } from "react";
import LunchReducer from "./LunchReducer";

const LunchContext = createContext();
export const LunchProvider = ({ children }) => {
  const initialState = {
    lunch: [
      {
        id: "hot-honey-chicken-and-cornbread-waffles-for-2",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Marcus Samuelsson's Streetbird",
        dsc: "Marcus’ Hot Honey Chicken & Cornbread Waffles Kit for 4",
        price: 99,
        rate: 5,
        country: "Harlem, NY",
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
        id: "brown-butter-lobster-roll-kit-4-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133343/brown-butter-lobster-roll-kit-4-pack.f97b1254243c8628ad1a5cd41227f5d7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Eventide Oyster Co.",
        dsc: "Brown Butter Lobster Roll Kit - 4 Pack",
        price: 99,
        rate: 5,
        country: "Portland, ME",
      },

      {
        id: "cookie-monster-ice-cream-sandwich-8-pack",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131739/cookie-monster-ice-cream-sandwich-8-pack.9ad71ce3dd6f39fcbddc35af60a3b866.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Nightingale Ice Cream Sandwiches",
        dsc: "Cookie Monster Ice Cream Sandwich - 8 Pack",
        price: 75,
        rate: 4,
        country: "Richmond, VA",
      },
      {
        id: "ice-cream-choose-your-own-6-pints",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110356/ice-cream-choose-your-own-6-pints.7e3199bc794ac9d43c69d8a632430dc8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Museum of Ice Cream",
        dsc: "Ice Cream - Choose Your Own 6 Pints",
        price: 99,
        rate: 5,
        country: "New York, NY",
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
        id: "ribs-brisket-and-burnt-ends",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Joe's KC BBQ",
        dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
        price: 110.99,
        rate: 5,
        country: "Kansas City, KS",
      },
      {
        id: "the-classic-plateau-dinner-for-2",
        img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131364/the-classic-plateau-dinner-for-2.9906825037a76931415a8fb5e8a2dcbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        name: "Blue Ribbon",
        dsc: "The Classic Plateau Seafood Dinner for 2",
        price: 139,
        rate: 5,
        country: "New York, NY",
      },
    ],
  };

  const [state, dispatch] = useReducer(LunchReducer, initialState);

  return (
    <LunchContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </LunchContext.Provider>
  );
};
export default LunchContext;
