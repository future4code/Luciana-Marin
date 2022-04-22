import { GlobalState } from "./Global/GlobalState"
import { Router } from "./Router/Router"
import { StyledGlobal } from "./styled"

function App() {
  return (
    <StyledGlobal>
      <GlobalState>
        <Router />
      </GlobalState>
    </StyledGlobal>
  );
}

export default App