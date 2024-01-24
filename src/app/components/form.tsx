// "use client";

// import { PenLine, X } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { useTrelloContext } from "../trelloContext";

// type Inputs = {
//   title: string;
// };

// function Form({
//   setCreateCardOpen,
// }: {
//   setCreateCardOpen: React.Dispatch<React.SetStateAction<Boolean>>;
// }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const { addNewCard } = useTrelloContext();

//   return (
//     <form
//       onSubmit={handleSubmit((inputValue, event: any) => {
//         addNewCard(event, inputValue.title);
//         setCreateCardOpen(false);
//       })}
//       className="flex flex-col gap-4"
//     >
//       <div className="flex bg-white justify-between rounded-lg p-2">
//         <input
//           autoFocus
//           {...register("title", { required: "Title is required" })}
//           aria-invalid={errors.title ? true : false}
//           className="flex-1 outline-none"
//           type="text"
//           placeholder="Please insert a title for this new card..."
//         />

//         <button>
//           <PenLine />
//         </button>
//       </div>
//       {errors.title && (
//         <p className="text-red-500 text-sm font-semibold">
//           {errors.title.message}
//         </p>
//       )}
//       <div className="flex gap-4 items-center">
//         <button
//           type="submit"
//           className="bg-button px-6 py-4 rounded-lg text-white hover:scale-105 duration-100 focus:scale-110"
//         >
//           Add Card
//         </button>
//         <button
//           className="hover:bg-gray-100 p-2 rounded-full"
//           onClick={() => {
//             setCreateCardOpen(false);
//           }}
//         >
//           <X />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Form;
