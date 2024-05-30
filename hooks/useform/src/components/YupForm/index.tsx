
const YupForm = () => {

    const checkNameAvailability = async (name: string) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const users = await response.json()
        const user = await users.find( (el) => el.name === name)
        console.log(!user)
        return !user
    };
  
  checkNameAvailability("")

  return (
    <div>YupForm</div>
  )
}

export default YupForm

