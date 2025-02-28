import Mail from "./assets/Icon (1).svg";
import Phone from "./assets/Icon (2).svg";
import { Botao } from "./Botao";
import LogoBranco from "./assets/Vector (1).png";
import { Traço } from "./Traço";
export function Footer() {
  return (
    <footer className="mt-4 bg-black lg:mt-0">
      <div className="lg:ml-25 lg:translate-y-20">
        <h2 className="ml-[28px] pt-4 text-[18px] font-bold text-white">
          Localização
        </h2>
        <Traço className="bg-white" />
        <div className="ml-[28px] pt-2 text-[13px] text-white">
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP </p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 text-[12px] font-bold lg:-translate-y-30 lg:flex-row">
        <Botao className="flex flex-row items-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-3 text-black shadow-md transition">
          <img
            className="justify-center"
            src={Mail}
            alt="ícone de headphone para representar contato com o consultor online"
          />
          Entre em contato
        </Botao>
        <Botao className="flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-1 text-black shadow-md transition">
          <img
            className="justify-center"
            src={Phone}
            alt="ícone de headphone para representar contato com o consultor online"
          />
          fale com nosso <br /> consultor online
        </Botao>
      </div>

      <div className="flex flex-col items-center justify-center py-6 lg:-translate-y-14 lg:items-end lg:pr-25">
        <span className="text-[10px] text-white">created by</span>
        <img src={LogoBranco} alt="corebiz" />
      </div>
    </footer>
  );
}
