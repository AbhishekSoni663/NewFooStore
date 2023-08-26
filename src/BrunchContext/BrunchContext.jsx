import { useReducer } from "react";

import BrunchReducer from "./BrunchReducer";
import { createContext } from "react";

const BrunchContext = createContext();

export const BrunchProvider = ({ children }) =>{


    const initialState = {
        brunches : [
            {
                "id": "wood-fired-pizzas-best-seller-4-pack",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Pizzeria Bianco",
                "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
                "price": 129,
                "rate": 5,
                "country": "Phoenix, AZ"
              },
              {
                "id": "mac-and-cheese-chicken-pot-pie-combo-for-4",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112776/mac-and-cheese-chicken-pot-pie-combo-for-4.c77be8dcb4fabfa1870a2ff4a6bd4c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Wolfgang Puck Catering",
                "dsc": "Mac and Cheese + Chicken Pot Pie Combo for 4",
                "price": 129,
                "rate": 4,
                "country": "Los Angeles, CA"
              },
              {
                "id": "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Chef Francis Mallmann",
                "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
                "price": 225,
                "rate": 4,
                "country": "Patagonia, Argentina"
              },
              {
                "id": "wood-fired-pizza-choose-your-own-4-pack",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Pizzeria Bianco",
                "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
                "price": 135,
                "rate": 4,
                "country": "Phoenix, AZ"
              },
              {
                "id": "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Alidoro",
                "dsc": "\"The Gothamist\" Prosciutto + Burrata Sandwich Kit - 4 Pack",
                "price": 99,
                "rate": 4,
                "country": "New York, NY"
              },
              {
                "id": "sandwich-best-sellers-4-pack",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Alidoro",
                "dsc": "Italian Sandwich Kit Best Sellers - 4 Pack",
                "price": 99,
                "rate": 5,
                "country": "New York, NY"
              },
              {
                "id": "meet-the-reubens-sandwich-kit-for-4-6",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131830/plain-cheesecake.de3d6cefd530477dc04769774752448e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Junior's Cheesecake",
                "dsc": "Meet the Reubens Sandwich Kit for 4-6",
                "price": 89,
                "rate": 5,
                "country": "Brooklyn, NY"
              },
              {
                "id": "15428-pittsburgh-party-pack",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Primanti Bros.",
                "dsc": "Primanti Bros Sandwich Pack - (Choose Your Meat)",
                "price": 89,
                "rate": 4,
                "country": "Pittsburgh, PA"
              },
              {
                "id": "pastrami-burnt-end-sandwich-kit",
                "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
                "name": "Ugly Drum",
                "dsc": "Ugly Buns \"Burnt End\" Sandwich Kit - 6 Pack",
                "price": 109,
                "rate": 5,
                "country": "Los Angeles, CA"
              },
        ]
    }

    const [state,dispatch] = useReducer(BrunchReducer,initialState)

    return(
        <BrunchContext.Provider value={{
            ...state,
            dispatch
        }}>
        {children}
        </BrunchContext.Provider>
    )
}

export default BrunchContext