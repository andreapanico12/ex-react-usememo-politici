import {memo} from 'react';

const PoliticianCard = memo(({ politician })  =>{
  console.log("Rendering PoliticianCard for:", politician.name);
  return (
    <div className="politician-card">
      <img src={politician.image} alt={`${politician.name}`} />
      <h3>{politician.name}</h3>
      <p><strong>Party: </strong>{politician.party}</p>
      <p><strong>Position: </strong>{politician.position}</p>
      <p><strong>Biography: </strong>{politician.biography}</p>
    </div>
  );
})

export default PoliticianCard;