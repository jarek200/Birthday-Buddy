import data from "./data";
import { useState } from "react";


const App = () => {
  const [people, setPeople] = useState(data);


  return <>
  <h2>{people.length}</h2>;
  {people.map((person) => {
    const {id, name, age, image} = person;
    return <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  })}
  </>
  
  
  
};
export default App;
