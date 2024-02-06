"use client";

import {
  createContext,
  useContext,
  useReducer,
  FormEvent,
  useEffect,
} from "react";
import { CardType, TrelloContextType } from "./api/type";
import { todos } from "./api/api";
import { Inputs } from "./components/edit-card-form";
// import { todos } from "../app/api/api";
// import { CardType, TrelloContextType } from "./api/type";
// import { Inputs } from "@/components/edit-card-form";
// import { CardType, TrelloContextType } from "@/api/type";
// import { todos } from "@/api/api";
// import { Inputs } from "./components/edit-card-form";

export const TrelloContext = createContext<TrelloContextType>(
  {} as TrelloContextType
);

let initialValue: any;
if (typeof window !== "undefined") {
  const storedValue = localStorage.getItem("card");
  initialValue = storedValue ? JSON.parse(storedValue) : todos;
}

export const updateLocalStorage = (state: any) => {
  window.localStorage.setItem("card", JSON.stringify(state));
};

export const updateUserStorage = (state: any) => {
  window.localStorage.setItem("user", JSON.stringify(state));
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      const date = new Date();
      const formatDate = new Intl.DateTimeFormat("es", {
        hour: "numeric",
        minute: "numeric",
      }).format(date);

      const NewCard = {
        title: "",
        id: Date.now(),
        list: action.id,
        date: formatDate,
        user: {
          name: action.stateProfile.nombre,
          avatar: "/user-profile-icon-free-vector.jpg",
        },
        comments: [],
      };

      const newList = structuredClone(state);
      if (action.newCardTitle !== "") {
        NewCard.title = action.newCardTitle;
        newList.push(NewCard);
      }
      updateLocalStorage(newList);

      return newList;
    }
    case "EDIT_CARD": {
      const date = new Date();
      const formatDate = new Intl.DateTimeFormat("es", {
        hour: "numeric",
        minute: "numeric",
      }).format(date);
      action.event.preventDefault();
      const listclone = structuredClone(state);

      const todoIndex = listclone.findIndex(
        (card: CardType) => card.id === action.todo.id
      );
      const choosenCard = listclone[todoIndex];
      if (action.inputValue.title && action.inputValue.name) {
        choosenCard.title = action.inputValue.title;
        choosenCard.date = formatDate;
        action.stateProfile.nombre = action.inputValue.name;
      }

      updateLocalStorage(listclone);

      return listclone;
    }
    case "DRAG_COMPLETED": {
      const itemId = action.event.dataTransfer.getData("itemID");

      const listclone = state.find((todo: CardType) => todo.id == itemId);
      if (listclone) {
        listclone.list = action.list;
      }

      const newTodos = state.map((todo: CardType) => {
        if (todo.list === itemId) return listclone;
        return todo;
      });
      updateLocalStorage(newTodos);
      return newTodos;
    }
    case "DELETE_CARD": {
      const listclone = structuredClone(state);

      const newCards = listclone.filter(
        (card: CardType) => card.id !== action.id
      );

      updateLocalStorage(newCards);

      return newCards;
    }
  }
};

let initialProfile: any;
if (typeof window !== "undefined") {
  const storedUser = localStorage.getItem("user");

  initialProfile = storedUser
    ? JSON.parse(storedUser)
    : {
        nombre: "",
        foto: "/user.svg",
      };
}
const profileReduder = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_PROFILE": {
      state = {
        nombre: action.nombre,
        foto: action.image,
      };
      updateUserStorage(state);
      return state;
    }
  }
};

export function TrelloProvider({ children }: { children: React.ReactNode }) {
  const [stateCard, dispatch] = useReducer(reducer, initialValue);
  const [stateProfile, dispatchProfile] = useReducer(
    profileReduder,
    initialProfile
  );

  const addNewCard = (event: FormEvent, newCardTitle: string, id: string) =>
    dispatch({
      type: "ADD_NEW_CARD",
      event: event,
      newCardTitle: newCardTitle,
      id: id,
      stateProfile: stateProfile,
    });

  const editCards = (
    event: FormEvent,
    todo: CardType,
    inputValue: Inputs,
    id: number
  ) =>
    dispatch({
      type: "EDIT_CARD",
      event: event,
      todo: todo,
      id: id,
      inputValue: inputValue,
      stateProfile: stateProfile,
    });

  const completedDrag = (event: React.DragEvent, list: string) =>
    dispatch({
      type: "DRAG_COMPLETED",
      event: event,
      list: list,
    });

  const handleProfile = (nombre: string, image: string) => {
    dispatchProfile({
      type: "CHANGE_PROFILE",
      nombre: nombre,
      image: image,
    });
  };
  const deleteCard = (id: number) =>
    dispatch({
      type: "DELETE_CARD",
      id: id,
    });

  return (
    <TrelloContext.Provider
      value={{
        stateCard,
        addNewCard,
        deleteCard,
        stateProfile,
        editCards,
        completedDrag,
        handleProfile,
      }}
    >
      {children}
    </TrelloContext.Provider>
  );
}

export const useTrelloContext = () => {
  const data = useContext(TrelloContext);
  return data;
};
