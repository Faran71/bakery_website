const Cake = ({cakeName,ingredients,price,rating}) => {

  const makeList = ingredients.map((ingredient) => 
        <li>{ingredient}</li>
    );

  return (
    <>
        <h2>{cakeName}</h2>
        <p>Ingredients: </p>
        <ul>{makeList}</ul>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
    </>
  )
}

export default Cake;