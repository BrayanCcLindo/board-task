// import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { X } from "lucide-react";

// const DialogDemo = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState(false);

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <button className=" inline-flex text-base items-center justify-center rounded-lg bg-button hover:scale-105 duration-100 focus:scale-110 px-6 py-4 font-medium leading-none text-white focus:outline-none">
//           Invite
//         </button>
//       </Dialog.Trigger>
//       <Dialog.Portal>
//         <Dialog.Overlay className="data-[state=open]:bg-black/30 fixed inset-0" />
//         <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
//           <Dialog.Title className="m-0 text-xl font-semibold">
//             Invite to the board
//           </Dialog.Title>
//           <Dialog.Description className="mt-[10px] mb-5 text-base leading-normal">
//             An application will be sent to your email address{" "}
//             <span className="font-semibold">{!error && value}</span> so he/she
//             can join the team.
//           </Dialog.Description>
//           <form className="mb-[15px] flex  items-center gap-5">
//             <label
//               className="sr-only text-violet11 w-[90px] text-right text-[15px]"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               onChange={(event) => {
//                 setValue(event.target.value);
//                 setTimeout(() => {
//                   if (event.target.value.indexOf("@") === -1) {
//                     setError(true);
//                   } else {
//                     setError(false);
//                   }
//                 }, 500);
//               }}
//               value={value}
//               className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
//               id="name"
//               placeholder="brayancclindo@gmail.com"
//             />
//             {error && (
//               <p className="text-red-500 text-sm font-semibold">
//                 "@"is required
//               </p>
//             )}
//           </form>

//           <div className="mt-[25px] flex justify-end">
//             <Dialog.Close asChild>
//               <button className="bg-button text-white inline-flex items-center justify-center rounded-lg py-4 px-6 font-medium leading-none  hover:scale-105 duration-100 focus:scale-110 ">
//                 Send
//               </button>
//             </Dialog.Close>
//           </div>
//           <Dialog.Close asChild>
//             <button
//               className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
//               aria-label="Close"
//             >
//               <X />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default DialogDemo;
