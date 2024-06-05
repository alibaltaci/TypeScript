import ReactHookForm from "./components/ReactHookForm"
import TraditionalForm from "./components/TraditionalForm"

function App() {

  return (
    <>
      <h1>useForm + Zod</h1>

      <h2>Traditional Form</h2>
      <TraditionalForm />

      <h2>React Hook Form</h2>
      <ReactHookForm />
    </>
  )
}

export default App
