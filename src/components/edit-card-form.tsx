// "use client";

// import { CardType } from "@/api/type";
// import { useTrelloContext } from "@/app/trelloContext";
// import { useForm } from "react-hook-form";
// // import { useTrelloContext } from "../trelloContext";
// // import { CardType } from "../api/type";

// export type Inputs = {
//   title: string;
//   name: string;
// };

// function EditarCardForm({
//   id,
//   todo,
//   setOpen,
// }: {
//   todo: CardType;
//   id: number;
//   setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
// }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const { editCards, deleteCard } = useTrelloContext();

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit((inputValue, event: any) => {
//           editCards(event, todo, inputValue, id);
//           setOpen(false);
//         })}
//         className="flex flex-col gap-4 text-white"
//       >
//         <label className="text-base font-semibold text-white" htmlFor="name">
//           Editar Titulo
//         </label>
//         <input
//           {...register("title", {
//             required: "Campo requerido",
//           })}
//           aria-invalid={errors.title ? true : false}
//           className="p-4 focus:shadow-violet8 inline-flex rounded-lg bg-[#304973]  px-[10px] text-[15px] leading-none "
//           id="name"
//           placeholder={todo.title}
//         />
//         {errors.title && (
//           <p className="text-red-500 text-sm font-semibold">
//             {errors.title.message}
//           </p>
//         )}
//         <label className="text-base font-semibold text-white" htmlFor="name">
//           Editar Responsable
//         </label>
//         <input
//           {...register("name", {
//             required: "Campo requerido",
//           })}
//           aria-invalid={errors.title ? true : false}
//           className="p-4 focus:shadow-violet8 inline-flex rounded-lg bg-[#304973]  px-[10px] text-[15px] leading-none "
//           id="name"
//           placeholder={todo.user.name}
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm font-semibold">
//             {errors.name.message}
//           </p>
//         )}
//         <div className="flex gap-4 justify-end items-center">
//           <button
//             type="submit"
//             className="bg-[#304973] text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-6 py-4 font-medium"
//           >
//             Save
//           </button>
//           <button
//             onClick={() => {
//               setOpen(false);
//             }}
//             type="button"
//             className="bg-[#adb5bd] text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-6 py-4 font-medium"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="bg-red-500 text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-6 py-4 font-medium"
//             onClick={() => {
//               deleteCard(id);
//               setOpen(false);
//             }}
//           >
//             Delete
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditarCardForm;
