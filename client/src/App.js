import {useQuery, gql} from "@apollo/client";
import CharacterList from './pages/CharactersList';
import './App.css';


function App() {
  return (<div className="App">
    <CharacterList/>
  </div>
  )
}

export default App;
