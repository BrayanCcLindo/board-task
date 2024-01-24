"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PenLine, X } from "lucide-react";
import { useState } from "react";
// import EditarCardForm from "../components/edit-card-form";
import { CardType } from "../api/type";
import EditarCardForm from "@/components/edit-card-form";

export type InputValueType = {
  title: string;
  avatar: File | string;
};

const EdiCardDialog = ({ todo, id }: { todo: CardType; id: number }) => {
  const [open, setOpen] = useState<boolean | undefined>(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className=" inline-flex text-white items-center justify-center   font-medium p-2   hover:bg-[#253452] rounded-full ">
          <PenLine />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:bg-black/30 fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#253452] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" m-0 text-xl font-semibold text-white">
            Editar Actividad
          </Dialog.Title>
          <Dialog.Description className=" mt-[10px] mb-5  leading-normal text-white">
            Personaliza los detalles, actualiza la información y mantén tus
            tareas organizadas de manera eficiente
          </Dialog.Description>
          <EditarCardForm todo={todo} id={id} setOpen={setOpen} />
          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center text-white justify-center rounded-full "
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EdiCardDialog;
