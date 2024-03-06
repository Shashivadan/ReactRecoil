// import { useRecoilState, useRecoilValue } from "recoil";
// import {
//   jobsAtom,
//   massangingAtom,
//   networkAtom,
//   notificationAtom,
// } from "./store/atoms/atoms";
// import { totalNotificationSelector } from "./store/seletors/sumSeletors";

// function App() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobs = useRecoilValue(jobsAtom);
//   const notification = useRecoilValue(notificationAtom);
//   const [massanging, setMassanging] = useRecoilState(massangingAtom);
//   const totalNotificationSelectorCount = useRecoilValue(
//     totalNotificationSelector
//   );

//   return (
//     <>
//       <div className="w-full bg-zinc-800 h-screen flex justify-center items-center">
//         <div className="flex gap-2">
//           <button className="px-3 py-2 bg-blue-300 rounded-md">Home</button>
//           <button className="px-3 py-2 bg-blue-300 rounded-md">
//             My network ({networkNotificationCount})
//           </button>
//           <button className="px-3 py-2 bg-blue-300 rounded-md">
//             Job ({jobs})
//           </button>
//           <button
//             onClick={() => setMassanging((e) => e + 1)}
//             className="px-3 py-2 bg-blue-300 rounded-md"
//           >
//             Messaging ({massanging})
//           </button>
//           <button className="px-3 py-2 bg-blue-300 rounded-md ">
//             Notification ({notification})
//           </button>
//           <button className="px-3 py-2 bg-blue-300 rounded-md">
//             Me {totalNotificationSelectorCount}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
