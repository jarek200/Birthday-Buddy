
import { useState } from "react";

export default function Person( {data}) {
    const [people, setPeople] = useState(data);

  return (
    <>
    <h2>Number of  people: {people.length}</h2>;
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
     {people.length > 0 ? <button onClick={() => setPeople([])}>Clear All</button> :
      <button onClick={() => setPeople(data)}>Reset All</button>}
      </>
  )

}