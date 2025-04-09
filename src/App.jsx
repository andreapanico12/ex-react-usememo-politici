import { useState, useEffect } from "react";
import PoliticianCard from "./components/PoliticianCard";

function App() {

  const [politicians, setPoliticians] = useState([]);

  const fetchPoliticians = async () => {
    const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/politicians`);
    const data = await response.json();
    setPoliticians(data)
  }
  useEffect(() => {
    fetchPoliticians();
  }
  , []);
  

  return (
    <>
    <h1>POLITICIANS LIST:</h1>
    <div className="politicians-card-container">
      {politicians.map((politician) => < PoliticianCard key={politician.id} politician={politician}/>)}
    </div>
    </>
  )
}

export default App
