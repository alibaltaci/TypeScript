import { AnotherComponent, UserDetail } from "./components"
import UserProvider from "./context/userContext"

function App() {

  return (
    <UserProvider>
      <UserDetail />
      <AnotherComponent />
    </UserProvider>
  )
}

export default App
