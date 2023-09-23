// import { async } from '@firebase/util';
// import { updateProfile } from 'firebase/auth';
// import { doc } from 'firebase/firestore';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { displayName } from 'react-quill';
// import { auth } from '../firebase';

// function Profile () {

//   const getMyFeets = async () => {
//     const fweets = await collection(auth, 'fweets').where('creatorId', '==', userObj.uid);
//     console.log(fweets.docs.map((doc) => doc.data()));
//   };
//   useEffect(() => {
//     getMyFeets();
//   }, []);

//   const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

//   const onChangeProfile = (event) => {
//     const {
//       target: { value },
//     } = event;
//   setNewDisplayName(value);
// };

// const onSubmitProfile = async (event) => {
//   event.preventDefault();
//   if (displayName !== userObj.displayName) {
//     await updateProfile(auth.currentUser, {
//       displayName: newDisplayName,
//     });
//     refreshName();
//   }
// }

// return (
//   <form onSubmit={onSubmitProfile}>
//     <input type='text' placeholder='Display Name' onChange={onChangeProfile}
//      value={newDisPlayName} className='editProfileInput' />
//      <input
//      type="submit"
//      value="Update Profile"
//      className='editProfileSubmit'
//      />
//   </form>
// );
// }

// export default Profile;
