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

    reset()
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
        <input 
          { ...register('email',{
              required: "Email is required",
            })
          }
          type='email' 
          placeholder='Email'
          required
        />
        { errors.email && (
          <p>{ `${ errors.email.message }` }</p>
        )}
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
        { errors.password && (
          <p>{ `${ errors.password.message }` }</p>
        ) }
        <input 
          { ...register('confirmPassword',{
            required: "Confirm Pasword is required",
            validate: (value) => value === getValues("password") || "Password must match"
          })}
          type='password' 
          placeholder='Confirm Password' 
          required
        />
        { errors.confirmPassword && (
          <p>{ `${ errors.confirmPassword.message }` }</p>
        )}
        <button 
          type='submit'
        >
            Submit
        </button>
    </form>
  )
}

export default ReactHookForm