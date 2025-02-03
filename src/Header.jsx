import MobileMenu from "./assets/Icon.svg";
import LogoCoreBiz from "./assets/site-logo-corebiz-preto-cinza.png";
import ShoppingCart from "./assets/shopping-cart 1.png";
import Lupa from "./assets/Vector.png";
import { useState } from "react";
export function Header() {
  return (
    // global container
    <header>
      <div className="flex justify-around pt-4">
        {/* items container */}
        <MenuMobile />
        <CoreBizLogo />
        <Cart />
      </div>
      <InputProcura />
    </header>
  );
}
function MenuMobile() {
  return <img src={MobileMenu} alt="menu mobile" />;
}
function CoreBizLogo() {
  return <img src={LogoCoreBiz} alt="logo da empresa CoreBiz" />;
}
function Cart() {
  return (
    <img
      src={ShoppingCart}
      alt="carrinho de compras"
      className="h-[18px] w-[18px]"
    />
  );
}

function InputProcura() {
  const [query, setQuery] = useState("");
  return (
    <div className="relative mx-[20px] my-2">
      <input
        type="text"
        placeholder="O que está procurando?"
        className="w-full border-b border-gray-400 py-1 pr-10 pl-2 text-[13px] text-gray-600 focus:border-black focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
      <img
        src={Lupa}
        alt="Imagem de uma lupa para procurar conteúdo"
        className="absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 transform text-gray-600"
      />
    </div>
  );
}
