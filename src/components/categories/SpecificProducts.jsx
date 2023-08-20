import useSpecificProducts from "../../utils/useSpecificProducts";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import ShimmerProductCard from "../ShimmerProductCard";

const SpecificProducts = ({ category, categoryTitle }) => {
  const { isLoading, allProducts } = useSpecificProducts(category);

  return (
    <section className="my-2">
      <h1 className="text-center font-bold text-2xl underline mb-2">
        {categoryTitle}
      </h1>
      <div className="w-[95vw] md:w-[70vw]  mx-auto grid grid-cols-3 md:grid-cols-5">
        {isLoading
          ? Array(5)
              .fill(null)
              .map((item, index) => <ShimmerProductCard key={index} />)
          : allProducts.map((item) => (
              <Link key={item.id} to={"/products/" + item.id}>
                <ProductCard data={item} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default SpecificProducts;
