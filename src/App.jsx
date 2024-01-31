import PlayerList from './components/PlayerList.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';
import { useState } from 'react';

const App = () => {
  
  const [showDetails, setShowDetails] = useState(false)
  const [singlePuppyDetails, setSinglePuppyDetails] = useState(``);
  
  return (
    <>
      <h1>Puppy Bowl</h1>

      {
        showDetails ? <PuppyDetails singlePuppyDetails={singlePuppyDetails} /> : <PlayerList setShowDetails={setShowDetails} setSinglePuppyDetails = {setSinglePuppyDetails}/> 
      }
      {
        console.log(singlePuppyDetails)
      }
    </>
  )  
}

export default App
