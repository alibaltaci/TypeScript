import { CounterProvider } from "./Context/CounterContext";
import Counter from "./componets/Counter";
import { initState } from "./reducers/reducer";

function App() {

  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>
          { (num: number) => <>Current Count: {num}</> }
        </Counter>
      </CounterProvider>
    </>
  )
}

export default App
