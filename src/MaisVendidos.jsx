import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export function MaisVendidos() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://corebiz-test-server.onrender.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <section className="mt-4">
      <div>
        <h2 className="ml-[28px] font-black">Mais Vendidos</h2>
        <div className="ml-[28px] h-1 w-10 bg-[#C0C0C0C0]"></div>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((products) => (
          <ProductItems products={products} key={products.productId} />
        ))}
      </ul>
    </section>
  );
}
function ProductItems({ products }) {
  return (
    <li>
      <img src={products.imageUrl} alt={products.productName} loading="lazy" />
      <p className="text-cinza">{products.productName}</p>
      <span>{products.stars}</span>
      {products.listPrice ? (
        <p className="text-cinza line-through">
          de R${(products.listPrice / 100).toFixed(2).replace(".", ",")}
        </p>
      ) : (
        <p>&nbsp;</p>
      )}
      <p>por R${(products.price / 100).toFixed(2).replace(".", ",")}</p>
      <p className="text-cinza">
        ou &nbsp;
        {products.installments.map((installment) => (
          <span key={products.productName}>
            {installment.quantity}x de R$
            {(installment.value / 100).toFixed(2).replace(".", ",")}
          </span>
        ))}
      </p>
      <BotaoComprar />
    </li>
  );
}
function BotaoComprar() {
  return (
    <button className="rounded-lg bg-black px-8 py-3 font-bold text-white uppercase">
      comprar
    </button>
  );
}
//prop types
MaisVendidos.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      stars: PropTypes.number,
      listPrice: PropTypes.number,
      price: PropTypes.number.isRequired,
      installments: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number.isRequired,
          value: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ),
};

ProductItems.propTypes = {
  products: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stars: PropTypes.number,
    listPrice: PropTypes.number,
    price: PropTypes.number.isRequired,
    installments: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
