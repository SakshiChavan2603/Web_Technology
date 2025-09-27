// //import logo from './logo.svg';
// import './App.css';
// import LifecycleDemo from './Classlifecycle';
// import TextTransformerFunction from './Radio';
// import UndergradDetails from './userDetail';

// function App() {
//   return (
//     <div className="App">
//       {/* <LifecycleDemo /> */}
//       {/* <TextTransformerFunction /> */}
//       <UndergradDetails />


//     </div>
//   );
// }

// export default App


import UserDetailsForm from './userDetail.js';

export default function App() {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">User Details</h1>
      <UserDetailsForm />
    </div>
  );
}