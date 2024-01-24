// "use client";
// import { MoreHorizontal, PenLine, Plus, X } from "lucide-react";
// import { twMerge } from "tailwind-merge";
// import { useState } from "react";
// import Form from "./form";
// import { useTrelloContext } from "../trelloContext";

// function List({
//   children,
//   title,
//   handleDrop,
//   id,
//   onDrop,
// }: {
//   children: React.ReactNode;
//   title: string;
//   handleDrop: (event: React.DragEvent<HTMLElement>) => void;
//   id: string;
// }) {
//   const handledragOver = (event: React.DragEvent<HTMLElement>) => {
//     event.preventDefault();
//   };
//   const [createCardOpen, setCreateCardOpen] = useState<Boolean>(false);
//   const handleShowForm = () => {
//     setCreateCardOpen(!createCardOpen);
//   };

//   return (
//     <>
//       <div
//         data-id={id}
//         id={id}
//         onDrop={onDrop}
//         onDragOver={(e) => handledragOver(e)}
//         className="bg-green-500 relative flex-1 inline-block w-full"
//       >
//         <div
//           className={twMerge(
//             " bg-red-500 flex-1 rounded-md p-4 flex flex-col gap-6 text-gray-800",
//             "md:absolute inset-0"
//           )}
//         >
//           <div>
//             <div className="custom-flex-between">
//               <h1 className="text-lg font-semibold">{title}</h1>
//               <button>
//                 {" "}
//                 <MoreHorizontal />{" "}
//               </button>
//             </div>
//             <div className="flex flex-col gap-4 overflow-auto">{children}</div>
//           </div>
//           {createCardOpen && <Form setCreateCardOpen={setCreateCardOpen} />}
//           {!createCardOpen && (
//             <button
//               onClick={handleShowForm}
//               className={twMerge(
//                 "flex gap-2 items-center p-2 cursor-pointer",
//                 "hover:bg-gray-100 rounded-lg"
//               )}
//             >
//               <Plus />
//               <p className="text-[#5E6C84]">Add new card</p>
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default List;
