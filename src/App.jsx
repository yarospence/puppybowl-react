import PlayerList from './components/PlayerList.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';
import { useState } from 'react';

const App = () => {
  
  const [showDetails, setShowDetails] = useState(false)
  const [singlePuppyDetailsURL, setsinglePuppyDetailsURL] = useState(``);
  
  return (
    <>
      <h1>Puppy Bowl</h1>

      {
        showDetails ? <PuppyDetails singlePuppyDetailsURL={singlePuppyDetailsURL} /> : <PlayerList setShowDetails={setShowDetails} setsinglePuppyDetailsURL = {setsinglePuppyDetailsURL}/>
      }
    </>
  )  
}

export default App
