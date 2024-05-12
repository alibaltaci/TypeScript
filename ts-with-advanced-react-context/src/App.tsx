import { TieFighter } from "./components/TieFighter"
import { AwesomeContextProvider } from "./contexts/AwesomeContext"

function App() {

  return (
   <AwesomeContextProvider>
    <h2>React Context</h2>
    <TieFighter />
   </AwesomeContextProvider>
  )
}

export default App
