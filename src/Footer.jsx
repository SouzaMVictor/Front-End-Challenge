import Mail from "./assets/Icon (1).svg";
import Phone from "./assets/Icon (2).svg";
import LogoBranco from "./assets/Vector (1).png";
export function Footer() {
  return (
    <footer className="mt-4 bg-black">
      <h2 className="ml-[16px] pt-4 text-[18px] font-bold text-white">
        Localização
      </h2>
      <div className="ml-[16px] h-1 w-10 bg-[#FFF]"></div>
      <div className="ml-[16px] pt-2 text-[13px] text-white">
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP </p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-6 text-[12px] font-bold">
        <button className="flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-3 text-black shadow-md transition">
          <img
            className="justify-center"
            src={Mail}
            alt="ícone de carta para representar contato"
          />
          <span className="uppercase">entre em contato</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-0.5 text-black shadow-md transition">
          <img
            className="justify-center"
            src={Phone}
            alt="ícone de headphone para representar contato com o consultor online"
          />
          <span className="uppercase">
            fale com nosso <br /> consultor online{" "}
          </span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <span className="text-[10px] text-white">created by</span>
        <img src={LogoBranco} alt="" />
      </div>
    </footer>
  );
}
