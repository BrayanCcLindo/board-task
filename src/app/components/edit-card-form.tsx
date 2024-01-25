"use client";

import { useTrelloContext } from "@/app/trelloContext";
import { useForm } from "react-hook-form";
import { CardType } from "../api/type";
import Toastify from "toastify-js";

// import { useTrelloContext } from "../trelloContext";
// import { CardType } from "../api/type";

export type Inputs = {
  title: string;
  name: string;
};

function EditarCardForm({
  id,
  todo,
  setOpen,
}: {
  todo: CardType;
  id: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { editCards, deleteCard, stateProfile } = useTrelloContext();

  return (
    <div>
      <form
        onSubmit={handleSubmit((inputValue, event: any) => {
          editCards(event, todo, inputValue, id);
          setOpen(false);
          Toastify({
            text: "Tarea Actualizada! 🎉",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#304973",
              padding: "12px",
              "border-radius": "1rem",
              position: "fixed",
              right: "0",
              top: "0",
              color: "#fff",
            },
          }).showToast();
        })}
        className="flex flex-col gap-4 text-white"
      >
        <label className="text-base font-semibold text-white" htmlFor="name">
          Editar Titulo
        </label>
        <input
          {...register("title", {
            required: "Campo requerido",
          })}
          aria-invalid={errors.title ? true : false}
          className="p-4 focus:shadow-violet8 inline-flex rounded-lg bg-[#304973]  px-[10px] text-[15px] leading-none "
          id="name"
          placeholder={todo.title}
        />
        {errors.title && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.title.message}
          </p>
        )}
        <label className="text-base font-semibold text-white" htmlFor="name">
          Editar Responsable
        </label>
        <input
          {...register("name", {
            required: "Campo requerido",
          })}
          aria-invalid={errors.title ? true : false}
          className="p-4 focus:shadow-violet8 inline-flex rounded-lg bg-[#304973]  px-[10px] text-[15px] leading-none "
          id="name"
          placeholder={stateProfile?.nombre}
        />
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.name.message}
          </p>
        )}
        <div className="flex gap-4 justify-end items-center">
          <button
            type="submit"
            className="bg-[#304973] text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-3 py-2 md:px-6 md:py-4  font-medium"
          >
            Guardar
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            type="button"
            className="bg-[#adb5bd] text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-3 py-2 md:px-6 md:py-4 font-medium"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="bg-red-500 text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg px-3 py-2 md:px-6 md:py-4 font-medium"
            onClick={() => {
              deleteCard(id);
              setOpen(false);
              Toastify({
                text: "¡Adiós, Tarea! 👋",
                duration: 3000,
                // destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#304973",
                  padding: "12px",
                  "border-radius": "1rem",
                  position: "fixed",
                  right: "0",
                  top: "0",
                  color: "#fff",
                },
              }).showToast();
            }}
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarCardForm;
