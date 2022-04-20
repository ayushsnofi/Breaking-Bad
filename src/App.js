import Router from "./routes";
import { BreakpointProvider } from "react-socks";
import { CharacterProvider } from "./context/CharacterContext";
import { EpisodeProvider } from "./context/EpisodeContext";
import { QuotesProvider } from "./context/QuotesContext";
import { DeathsProvider } from "./context/DeathsContext";

export default function App() {
  return (
    <BreakpointProvider>
      <CharacterProvider>
        <EpisodeProvider>
          <QuotesProvider>
            <DeathsProvider>
              <Router />
            </DeathsProvider>
          </QuotesProvider>
        </EpisodeProvider>
      </CharacterProvider>
    </BreakpointProvider>
  );
}
