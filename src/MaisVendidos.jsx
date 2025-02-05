import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { Botao } from "./Botao";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import StarRating from "./StarRating";
import { Traço } from "./Traço";

export function MaisVendidos({ onAddToCart }) {
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
        <Traço className="bg-[#C0C0C0C0]" />
      </div>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mt-4"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <ul className="mx-3 grid grid-cols-2 gap-4">
            {products.map((products) => (
              <SwiperSlide key={products.productId}>
                <ProductItems products={products} onAddToCart={onAddToCart} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      )}
      {error && <ErrorMessage message={error} />}
    </section>
  );
}
function ProductItems({ products, onAddToCart }) {
  const hasInstallments =
    products.installments && products.installments.length > 0;
  const installmentInfo = hasInstallments ? products.installments[0] : null;
  return (
    <li className="min-h-[350px] bg-white text-center duration-300">
      <img
        src={products.imageUrl}
        alt={products.productName}
        loading="lazy"
        className="mx-auto"
      />
      <p className="text-cinza text-[10px]">{products.productName}</p>
      {products.stars ? (
        <StarRating
          maxRating={5}
          size={10}
          products={products}
          defaultRating={products.stars || 0}
          className="mx-auto"
        />
      ) : (
        <span>&nbsp;</span>
      )}
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
      <Botao
        onClick={onAddToCart}
        className="cursor-pointer rounded-lg bg-black px-8 py-3 text-[15px] font-bold text-white uppercase duration-300 hover:bg-neutral-800"
      >
        comprar
      </Botao>
    </li>
  );
}

//prop types
MaisVendidos.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
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
  onAddToCart: PropTypes.func.isRequired,
};
