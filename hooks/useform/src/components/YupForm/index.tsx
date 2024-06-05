// import * as yup from 'yup';

// const YupForm = () => {

//   import * as yup from 'yup';

// const checkNameAvailability = async (name) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         if (!response.ok) {
//             throw new Error('API request failed');
//         }
//         const users = await response.json();
//         const user = users.find(el => el.name === name);
//         return user;
//     } catch (error) {
//         console.error('API error:', error);
//         return false;
//     }
// };

// const usernameSchema = yup.string().required().test('is-unique', 'This username is already taken', async value => {
//     return !await checkNameAvailability(value);
// });

// const userData = {
//     username: 'Leanne Graham',
// };

// usernameSchema.validate(userData.username)
//     .then(isUnique => {
//         if (isUnique) {
//             console.log('This username is unique, suitable for registration.');
//         } else {
//             console.log('This username is already taken.');
//         }
//     })
//     .catch(error => console.error('Validation error:', error));

//   return (
//     <div>YupForm</div>
//   )
// }

// export default YupForm

