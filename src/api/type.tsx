// import { Inputs } from "@/components/edit-card-form";
// import { FormEvent } from "react";
// // import { Inputs } from "../components/edit-card-form";

// type ComenntsType = {
//   text?: string;
//   user?: {
//     name?: string;
//     avatar?: string;
//   };
// };

// export type DataType = {
//   data: {
//     title: string;
//     user: {
//       name: string;
//       avatar: string;
//     };
//     comments?: ComenntsType[];
//     id: number;
//   };
//   list: string;
// };

// export type CardType = {
//   title: string;
//   id: number;
//   list: string;
//   user: {
//     name: string;
//     avatar: string;
//   };
//   date: string;
// };

// export type ProfileType = {
//   nombre: string;
//   foto: string;
// };
// export type TrelloContextType = {
//   stateCard: CardType[];
//   addNewCard: (event: FormEvent, newCardTitle: string, id: string) => void;
//   deleteCard: (id: number) => void;
//   stateProfile: ProfileType;
//   editCards: (
//     event: FormEvent,
//     todo: CardType,
//     inputValue: Inputs,
//     id: number
//   ) => void;
//   completedDrag: (event: React.DragEvent, list: string) => void;
//   handleProfile: (nombre: string, image: string) => void;
// };
