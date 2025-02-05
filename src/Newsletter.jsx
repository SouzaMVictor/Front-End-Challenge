import { Botao } from "./Botao";
export function Newsletter() {
  return (
    <section className="mt-4 bg-[#F2F2F2] lg:py-6">
      <h2 className="px-3 py-4 text-[22px] font-bold text-[#333333] lg:mx-50">
        Participe de nossas news com promoções e novidades!
      </h2>
      <div className="mx-3 gap-4 lg:mx-50 lg:flex">
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          className="mt-4 w-full rounded-lg bg-white p-3 font-bold focus:ring-1 focus:ring-[#BDBDBD] focus:outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          className="mt-4 w-full rounded-lg bg-white p-3 font-bold focus:ring-1 focus:ring-[#BDBDBD] focus:outline-none"
        />
        <Botao className="container mt-2 rounded-lg bg-black px-8 py-3 text-[15px] font-bold text-white uppercase duration-300 hover:bg-neutral-800 lg:py-1">
          Eu quero!
        </Botao>
      </div>
    </section>
  );
}
