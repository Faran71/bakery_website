import React, { useState } from "react";
import CakeContainer from "../cake/CakeContainer";
import './CakeForm.css';

const CakeForm = ({listOfCakes,addNewCake}) => {

    const [cakeName, setCakeName] = useState("")
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");

    const handleValidation = () => {
        let failedValidation = false;

        if(cakeName==="" || ingredients==="" || price==="" || rating===""){
            failedValidation = true;
            setError("Please don't leave fields empty");
        }

        return failedValidation;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!handleValidation()){
            const newCake ={
                cakeName: cakeName,
                ingredients: ingredients.split(", "),
                price: price,
                rating: rating
            }
            addNewCake(newCake);
            setCakeName("");
            setIngredients("");
            setPrice("");
            setRating("");
            setError("");
        };
    };

    return(
        <>
        <form onSubmit={handleSubmit} >
            <p>{error}</p>
            <div className="inputs">
                <input 
                type="text" 
                name="cakeName" 
                placeholder="Cake Name" 
                value={cakeName}
                onChange={ (e) => setCakeName(e.target.value) }
                />
                <input 
                type="text" 
                name="ingredients" 
                placeholder="Enter Ingredients" 
                value={ingredients}
                onChange={ (e) => setIngredients(e.target.value) }
                />
                <input 
                type="text" 
                name="price" 
                placeholder="Price" 
                value={price}
                onChange={ (e) => setPrice(e.target.value) }
                />
                <input 
                type="text" 
                name="rating" 
                placeholder="Rating" 
                value={rating}
                onChange={ (e) => setRating(e.target.value) }
                />
                <input 
                type="submit" 
                value="CakeForm"
                />
            </div>
        </form>
        </>
    );
}

export default CakeForm;