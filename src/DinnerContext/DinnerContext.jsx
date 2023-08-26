import { useReducer } from "react";
import { createContext } from "react";
import DinnerReducer from "./DinnerReducer";

const DinnerContext = createContext()
export const DinnerProvider = ({children})=>{
    const initialState = {
        dinner : [
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
                id: "ribs-brisket-and-burnt-ends",
                img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                name: "Joe's KC BBQ",
                dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
                price: 110.99,
                rate: 5,
                country: "Kansas City, KS",
              },
              {
                "id": "the-classic-plateau-dinner-for-2",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131364/the-classic-plateau-dinner-for-2.9906825037a76931415a8fb5e8a2dcbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Blue Ribbon",
                "dsc": "The Classic Plateau Seafood Dinner for 2",
                "price": 139,
                "rate": 5,
                "country": "New York, NY"
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
                  
        ]
    }
    const [state,dispatch] = useReducer(DinnerReducer,initialState)
    return(
        <DinnerContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </DinnerContext.Provider>
    )
}
export default DinnerContext