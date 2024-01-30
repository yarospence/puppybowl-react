import PlayerList from './components/PlayerList.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';
import { useState } from 'react';

const App = () => {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <h1>Puppy Bowl</h1>

      {
        showDetails ? <PuppyDetails />: <PlayerList setShowDetails={setShowDetails}/>
      }
    </>
  )  
}

export default App
