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
