import Rotes from "./routes"
import { BrowserRouter } from "react-router-dom";
import { StateGlobal } from "./global/stateGlobal";

function App() {

  return (
    <BrowserRouter >
      <StateGlobal>
        <Rotes />
      </StateGlobal>
    </BrowserRouter>
  )
}

export default App
