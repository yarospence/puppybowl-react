import {Routes, Route} from 'react-router-dom';
import PlayerList from './components/PlayerList';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/pets' element={<h1>Hello</h1>} />
      </Routes>
    </>
  )  
}

export default App
