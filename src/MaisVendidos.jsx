import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { Botao } from "./Botao";

export function MaisVendidos() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchProducts() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://corebiz-test-server.onrender.com/api/v1/products",
        );
        const data = await response.json();
        if (!response.ok)
          //se não estiver ok, lançar mensagem de error
          throw new Error("Algo deu errado");

        const imagePromises = data.map((product) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = product.imageUrl;
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        await Promise.all(imagePromises);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar os produtos:", error);
      } finally {
        setIsLoading(false);
        setError("");
      }
    }
    fetchProducts();
  }, []);
  return (
    <section className="mt-4">
      <div>
        <h2 className="ml-[28px] font-black">Mais Vendidos</h2>
        <div className="ml-[28px] h-1 w-10 bg-[#C0C0C0C0]"></div>
      </div>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <ul className="mx-3 grid grid-cols-2 gap-4">
          {products.map((products) => (
            <ProductItems products={products} key={products.productId} />
          ))}
        </ul>
      )}
      {error && <ErrorMessage message={error} />}
    </section>
  );
}
function ProductItems({ products }) {
  const hasInstallments =
    products.installments && products.installments.length > 0;
  const installmentInfo = hasInstallments ? products.installments[0] : null;
  return (
    <li className="group bg-white text-center duration-300 hover:bg-gray-300">
      <img
        src={products.imageUrl}
        alt={products.productName}
        loading="lazy"
        className="mx-auto"
      />
      <p className="text-cinza text-[10px]">{products.productName}</p>
      {products.stars ? <span>{products.stars}</span> : <span>&nbsp;</span>}
      {products.listPrice ? (
        <p className="text-cinza text-[11px] line-through">
          de R${(products.listPrice / 100).toFixed(2).replace(".", ",")}
        </p>
      ) : (
        <p className="text-[11px]">&nbsp;</p>
      )}
      <p className="text-[16px] font-bold">
        por R${(products.price / 100).toFixed(2).replace(".", ",")}
      </p>
      {installmentInfo ? (
        <p className="text-cinza text-[11px]">
          ou &nbsp;
          {products.installments.map((installment) => (
            <span key={products.productName}>
              {installment.quantity}x de R$
              {(installment.value / 100).toFixed(2).replace(".", ",")}
            </span>
          ))}
        </p>
      ) : (
        <p>&nbsp;</p>
      )}
      <Botao className="cursor-pointer rounded-lg bg-black px-8 py-3 text-[15px] font-bold text-white uppercase duration-300 hover:bg-neutral-800">
        comprar
      </Botao>
    </li>
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
