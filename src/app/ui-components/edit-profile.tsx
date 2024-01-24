"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, User } from "lucide-react";
import { useState } from "react";
// import { useTrelloContext } from "../trelloContext";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useTrelloContext } from "@/app/trelloContext";

export type Profile = {
  nombre: string;
  foto: string;
};
function EditProfile({ name }: { name: string }) {
  const { stateProfile, handleProfile } = useTrelloContext();
  const [open, setOpen] = useState<boolean | undefined>(false);

  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div>
          <button
            className={
              "hidden items-center justify-center rounded-md p-3 text-base  bg-[#253452]   ring-offset-neutral-800  focus:ring-2  text-center text-white font-semibold hover:scale-105 duration-100 md:flex "
            }
          >
            {name === "" ? "Iniciar Sesion" : "Editar Perfil"}
          </button>
          <span className="flex justify-center items-center p-3 rounded-full bg-[#253452] text-white cursor-pointer hover:scale-105 hover:duration-100  text-base md:hidden">
            <User />
          </span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:bg-black/30 fixed inset-0" />
        <Dialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#253452] p-[25px] text-white ">
          <Dialog.Title className=" m-0 text-xl font-semibold">
            Inicia Sesión
          </Dialog.Title>
          <Dialog.Description className=" mt-[10px] mb-5 text-base leading-normal">
            Personaliza tu perfil a tu gusto, actualiza tu información y haz que
            tu perfil refleje quién eres
          </Dialog.Description>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit((inputValue, event) => {
              const nombre = inputValue.nombre;
              event?.preventDefault();
              handleProfile(nombre, image);
              setOpen(false);
            })}
          >
            <label className="text-base font-semibold" htmlFor="name">
              Nombre
            </label>
            <input
              {...register("nombre", {
                required: "Tu nombre es importante",
              })}
              className="p-4 focus:shadow-violet8 inline-flex rounded-lg bg-[#304973]  px-[10px] text-[15px] leading-none "
              id="name"
              placeholder={stateProfile?.nombre}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.nombre.message}
              </p>
            )}

            <label className="mt-4 text-base font-semibold" htmlFor="image">
              Foto
            </label>
            <input
              {...register("foto", {
                required: "Tu foto es importante",
                onChange: (event) => {
                  const mainImage = event.target.files[0];

                  const reader = new FileReader();
                  reader.addEventListener("load", () => {
                    setImage(reader.result as string);
                  });
                  if (mainImage) {
                    reader.readAsDataURL(mainImage);
                  }
                },
              })}
              type="file"
              className="p-4  inline-flex rounded-lg   px-[10px] text-[15px] leading-none "
              id="image"
            />
            {errors.foto && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.foto.message}
              </p>
            )}
            {image ? (
              <Image
                className="rounded-full"
                src={image}
                alt="profile-photo"
                width={100}
                height={100}
              ></Image>
            ) : null}
            <button
              type="submit"
              className="bg-[#304973] text-white hover:scale-105 duration-100 focus:scale-110 inline-flex  items-center justify-center rounded-lg p-2 py-4 font-medium"
            >
              Guardar cambios
            </button>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full "
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default EditProfile;
