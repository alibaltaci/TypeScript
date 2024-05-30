import { useState } from "react"

const TraditionalForm = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ errors, setErrors ] = useState<string[]>([])
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if( password !== confirmPassword ){
      setErrors(["Password and confirm password must match"])
      setIsSubmitting(false)
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={ handleSubmit }>
      {
        errors.length > 0 && (
          <ul>
            {
              errors.map( (error) => (
                <li key={ error }>
                  { error }
                </li>
               ))
            }
          </ul>
        ) 
      }
        <input 
          type='email' 
          placeholder='Email' 
          value={ email }
          onChange={ (e) => setEmail(e.target.value)}
          required
        />
        <input 
          type='password' 
          placeholder='Password' 
          value={ password }
          onChange={ (e) => setPassword( e.target.value )}
          required
        />
        <input 
          type='password' 
          placeholder='Confirm Password' 
          value={ confirmPassword }
          onChange={ (e) => setConfirmPassword( e.target.value )}
          required
        />
        <button 
          type='submit'
          disabled={ isSubmitting }
        >
            Submit
        </button>
    </form>
  )
}

export default TraditionalForm