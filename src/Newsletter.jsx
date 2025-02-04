export function Newsletter() {
  return (
    <section className="mt-4 bg-[#F2F2F2]">
      <h2 className="px-3 py-4 text-[22px] font-bold text-[#333333]">
        Participe de nossas news com promoções e novidades!
      </h2>
      <div className="mx-3">
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
      </div>
    </section>
  );
}
