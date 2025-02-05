import PropTypes from "prop-types";
import MobileMenuIcon from "./assets/Icon.svg";
import LogoCoreBiz from "./assets/site-logo-corebiz-preto-cinza.png";
import ShoppingCart from "./assets/shopping-cart 1.png";
import Lupa from "./assets/Vector.png";
import { useState } from "react";
export function Header({ cartCount }) {
  return (
    // global container
    <header className="px-6 py-4 md:flex lg:ml-10 lg:justify-around">
      <div className="flex items-end justify-between gap-4">
        <MenuMobile />
        <CoreBizLogo />
        <Cart cartCount={cartCount} />
      </div>

      <InputProcura />
    </header>
  );
}
function MenuMobile() {
  return (
    <img
      src={MobileMenuIcon}
      loading="eager"
      alt="menu mobile"
      className="md:hidden"
    />
  );
}
function CoreBizLogo() {
  return (
    <img
      src={LogoCoreBiz}
      loading="eager"
      alt="logo da empresa CoreBiz"
      className="flex h-auto max-w-[120px] flex-1 justify-center"
    />
  );
}
function Cart({ cartCount }) {
  return (
    <div className="flex flex-row items-center">
      <img
        src={ShoppingCart}
        loading="eager"
        alt="carrinho de compras"
        className="h-[18px] w-[18px]"
      />
      <div className="flex h-5 w-5 items-center justify-center rounded-2xl border bg-[#f8475f] align-middle text-[10px] text-white">
        {cartCount}
      </div>
    </div>
  );
}

function InputProcura() {
  const [query, setQuery] = useState("");
  return (
    <div className="relative mt-3 max-w-[728px] flex-1">
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

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

Cart.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
