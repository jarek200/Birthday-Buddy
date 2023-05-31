
import { useState } from "react";

export default function Person( {data}) {
    const [people, setPeople] = useState(data);

  return (
    <div className='person'>
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
      <h4>Number of  people: {people.length}</h4>
     {people.length > 0 ? <button  className='btn'onClick={() => setPeople([])}>Clear All</button> :
      <button className='btn'onClick={() => setPeople(data)}>Reset All</button>}
      </div>
  )

}