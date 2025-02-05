import PropTypes from "prop-types";
import MobileMenuIcon from "./assets/Icon.svg";
import LogoCoreBiz from "./assets/site-logo-corebiz-preto-cinza.png";
import ShoppingCart from "./assets/shopping-cart 1.png";
import Lupa from "./assets/Vector.png";
import MinhaConta from "./assets/Minha Conta.png";
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
      <MinhaContaMenu />
    </header>
  );
}
function MinhaContaMenu() {
  return (
    <img
      src={MinhaConta}
      alt=""
      className="hidden md:block md:h-5 md:translate-y-4"
    />
  );
}
function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img
        src={MobileMenuIcon}
        loading="eager"
        alt="menu mobile"
        className="md:hidden"
        onClick={toggleMenu}
      />
      {isOpen && (
        <nav className="absolute top-0 left-0 w-48 bg-white p-4 shadow-md">
          <button
            onClick={closeMenu}
            className="absolute top-2 right-2 text-2xl font-bold"
          >
            &times;
          </button>
          <ul>
            <li className="flex items-center">
              <a href="#minha-conta">
                <img src={MinhaConta} className="ml-2" alt="Minha conta" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
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
