import {useQuery, gql} from "@apollo/client";
import CharacterList from './pages/CharactersList';
import Character from "./pages/Character";
import './App.css';
import { Route, Routes } from "react-router-dom";


function App() {
  return (<div className="App">
    <Routes>
      <Route strict path="/" element={<CharacterList />} />
      <Route strict path="/:id" element={<Character/>} />
    </Routes>
  </div>
  )
}

export default App;
