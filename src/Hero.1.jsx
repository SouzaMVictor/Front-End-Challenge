import Banner1 from "./assets/image 2.png";
export function Hero() {
  return (
    <section className="relative">
      <img
        src={Banner1}
        loading="eager"
        alt="banner contendo mão com cartão de crédito na frente de um notebook"
        className="h-full w-full object-cover"
      />
      <div className="bg-opacity-50 absolute inset-0 bg-[#00000070]"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white">
        <h2 className="text-xl font-semibold">
          Olá, o que você está buscando?
        </h2>
        <h1 className="text-3xl font-black">Criar ou migrar seu e-commerce?</h1>
      </div>
    </section>
  );
}
