import { FieldValues, useForm } from "react-hook-form"

const ReactHookForm = () => {

  const {
    register,
    handleSubmit,
    formState:{ errors, isSubmitting },
    reset,
    getValues
  } = useForm()

  const onSubmit = async(data: FieldValues) => {
    
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
        <input 
          { 
            ...register('email',{
              required: "Email is required",
            })
          }
          type='email' 
          placeholder='Email'
          required
        />
        <input 
          { ...register('password',{
            required: "Password is required",
            minLength: {
              value: 6,
              message:  "Pasword must be at least 6 characters"
            }
          })}
          type='password' 
          placeholder='Password' 
          required
        />
        <input 
          { ...register('confirmPassword',{
            required: "Confirm Pasword is required",

          })}
          type='password' 
          placeholder='Confirm Password' 
          required
        />
        <button 
          type='submit'
        >
            Submit
        </button>
    </form>
  )
}

export default ReactHookForm