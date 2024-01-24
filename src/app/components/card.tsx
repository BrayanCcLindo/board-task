// "use client";
// import { MessageSquare } from "lucide-react";
// import Image from "next/image";
// import { CardType, DataType } from "../api/type";
// import EdiCardDialog from "../ui-components/edit-card-dialog";
// import { useTrelloContext } from "../trelloContext";

// function Card({
//   todo,
//   id,
//   startDrag,
// }: {
//   todo: CardType;
//   id: string;
//   startDrag: (event: any, todo: CardType) => void;
// }) {
//   const countComents = todo?.comments?.length;
//   const { stateProfile } = useTrelloContext();

//   // const startDrag = (event, todo: TodoListType) => {
//   //   event.dataTransfer.setData("itemId", todo.id);
//   //   console.log(todo, "todo");
//   // };
//   return (
//     <div
//       data-id={id}
//       draggable
//       onDragStart={(event) => startDrag(event, todo)}
//       // onDragStart={(event) => {
//       //   dragStart(event, todo);
//       // }}
//       className="bg-white flex flex-col rounded-lg gap-4 p-4"
//     >
//       <div className="custom-flex-between">
//         <h4 className="">{todo?.title}</h4>
//         {/* <EdiCardDialog id={} todo={todo} /> */}
//       </div>
//       <div className="custom-flex-between">
//         <button className="flex items-center gap-2">
//           <MessageSquare />
//           {countComents ?? 0 > 0 ?? <span>{countComents ?? 0}</span>}
//         </button>
//         <Image
//           className="object-cover rounded-full h-[35px]"
//           src={stateProfile.foto}
//           alt=""
//           width={50}
//           height={50}
//         />
//       </div>
//     </div>
//   );
// }

// export default Card;
