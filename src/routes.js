import { Children, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charater from "./components/CharaterTab";
import Deaths from "./components/DeathsTab";
import Episodes from "./components/EpisodeTab";
import Quotes from "./components/QuotesTab";
import HomePage from "./pages/HomePage";

import { characterContext } from "./context/CharacterContext";
import { getAllCharater } from "./api/breakingApis";

export default function Router() {
  const { dispatchCharaterDetails } = useContext(characterContext);
  useEffect(() => {
    getAllCharater(dispatchCharaterDetails);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
