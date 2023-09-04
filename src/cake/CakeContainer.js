import { useState } from "react";
import Cake from "./Cake.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

  return (
    <>
        <Cake cakeName={listOfCakes[0].cakeName} 
		ingredients={listOfCakes[0].ingredients} 
		price={listOfCakes[0].price} 
		rating={listOfCakes[0].rating}/>
        <Cake cakeName={listOfCakes[1].cakeName} 
		ingredients={listOfCakes[1].ingredients} 
		price={listOfCakes[1].price} 
		rating={listOfCakes[1].rating}/>
        <Cake cakeName={listOfCakes[2].cakeName} 
		ingredients={listOfCakes[2].ingredients} 
		price={listOfCakes[2].price} 
		rating={listOfCakes[2].rating}/>
    </>
  )
}

export default CakeContainer;