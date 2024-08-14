// "use client"
// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import { IoMdChatboxes } from "react-icons/io";
// import { MdGroups } from "react-icons/md";
// import { SiHomeadvisor } from "react-icons/si";

// const socket = io('http://localhost:5000');

// export default function ChatBox() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });
//   }, []);

//   const sendMessage = () => {
//     socket.emit('message', message);
//     setMessages((prevMessages) => [...prevMessages, message]);
//     setMessage('');
//   };

//   return (
//     <>
   
   
//     <div className="container mx-auto shadow-lg rounded-lg">
//       {/* Header */}
//       <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
//         <div className=''>
//         <div className="font-semibold  text-2xl">LNCT CHATBOX</div>
//         <div className='text-2xl mt-2 gap-10   flex justify-around '>
//         <IoMdChatboxes className=' hover:text-gray-600' />
//         <MdGroups className=' hover:text-gray-600' />
//         <SiHomeadvisor className=' hover:text-gray-600' />
//         </div>
//         </div>
       
//         <div className="w-1/2">
//           <input
//             type="text"
//             placeholder="search IRL"
//             className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
//           />
//         </div>
//         <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
//           RA
//         </div>
//       </div>
//       {/* Chatting */}
//       <div className="flex flex-row justify-between bg-white">
//         {/* Chat list */}
//         <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
//           {/* Search */}
//           <div className="border-b-2 py-4 px-2">
//             <input
//               type="text"
//               placeholder="search chatting"
//               className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
//             />
//           </div>
//           {/* User list */}
//           <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
//             <div className="w-1/4">
//               <img
//                 src="/founder.png"
//                 className="object-cover h-12 w-12 rounded-full"
//                 alt=""
//               />
//             </div>
//             <div className="w-full">
//               <div className="text-lg font-semibold">Founder</div>
//               <span className="text-gray-500">Pick me at 9:00 Am</span>
//             </div>
//           </div>
//           {/* Additional users */}
//           {/* ... Add more user list items as needed */}
//         </div>
//         {/* Message section */}
//         <div className="w-full px-5 flex flex-col justify-between">
//           <div className="flex flex-col mt-5">
//             <div className="flex justify-end mb-4">
//               <div className="mr-2 py-3 px-4 bg-purple-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
//                 Welcome to group everyone!
//               </div>
//               <img
//                 src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                 className="object-cover h-8 w-8 rounded-full"
//                 alt=""
//               />
//             </div>
//             <div className="flex justify-start mb-4">
//               <img
//                 src="/founder.png"
//                 className="object-cover h-8 w-8 rounded-full"
//                 alt=""
//               />
//               <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
//                 at praesentium, aut ullam delectus odio error sit rem. Architecto
//                 nulla doloribus laborum illo rem enim dolor odio saepe,
//                 consequatur quas?
//               </div>
//             </div>
//             {/* Additional messages */}
//             {/* ... Add more message items as needed */}
//           </div>
//           <div className="py-5">
//             <input
//               className="w-full bg-gray-300 py-5 px-3 rounded-xl"
//               type="text"
//               placeholder="type your message here..."
//             />
//           </div>
//         </div>
//         {/* Group details */}
//         <div className="w-2/5 border-l-2 px-5 m-10">
//           <div className="flex flex-col">
//             <div className="font-semibold text-xl py-4">Mern Stack Group</div>
//             <img
//               src="/founder.png"
//               className="object-cover rounded-xl h-64"
//               alt=""
//             />
//             <div className="font-semibold py-4">Created 22 Sep 2021</div>
//             <div className="font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
//               perspiciatis!
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
