import { useUserContext } from "../../context/hooks"


export const UserDetail = () => {

  const { user } = useUserContext()
  
  return (
    <>
        <p>{`User Name: ${user.name}`}</p>   
        <p>{`User Email: ${user.email}`}</p>   
    </>
  )
}
