import PropTypes from "prop-types";

export function Botao({ children, img, onClick, className = " " }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer uppercase ${className}`}
    >
      {img && <img src={img} alt="Ícone" />}
      {children}
    </button>
  );
}

Botao.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
