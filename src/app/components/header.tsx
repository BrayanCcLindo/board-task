import Image from "next/image";

function Header() {
  return (
    <header className="py-4  shadow-xl">
      <div className="custom-flex">
        <Image
          className="mix-blend-multipply"
          src="/blanco.png"
          width={80}
          height={80}
          alt=""
        />
        <a
          className="text-lg text-white font-semibold "
          href="https://brayan-ccari.vercel.app/"
          target="_blank"
        >
          BrayanCcari
        </a>
      </div>
    </header>
  );
}

export default Header;
