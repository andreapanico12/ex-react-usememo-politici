import { useState, useEffect, useMemo } from "react";
import PoliticianCard from "./components/PoliticianCard";

function App() {

  const [politicians, setPoliticians] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");
  
  const uniquePositions = [];
  politicians.forEach(politician => {
    if (!uniquePositions.includes(politician.position)) {
      uniquePositions.push(politician.position);
    }
  });
  console.log(uniquePositions);

  const fetchPoliticians = async () => {
    const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/politicians`);
    const data = await response.json();
    setPoliticians(data)
  }
  useEffect(() => {
    fetchPoliticians();
  }
  , []);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());  
  }

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politician => politician.name.toLowerCase().includes(searchTerm) && (position ? politician.position === position : true)));
  }, [politicians, searchTerm , position]);
  

  

  return (
    <>
    <h1>POLITICIANS LIST:</h1>
    <div>
      <label htmlFor="search"><p><strong>Cerca il politico:</strong></p></label>
      <input id="search" type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for a politician..." />
      <label htmlFor="select"><p><strong>Posizione: </strong></p></label>
      <select id="select " value={position} onChange={(e) => setPosition(e.target.value)}>
        <option value="">All</option>
        {uniquePositions.map((position, index) => {
          return (
            <option key={index} value={position}>{position}</option>
          )
        }
        )}
         </select>
    </div>
    <div className="politicians-card-container">
      {filteredPoliticians.map((politician) => < PoliticianCard key={politician.id} politician={politician}/>)}
    </div>
    </>
  )
}

export default App
