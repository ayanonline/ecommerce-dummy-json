import useFashionProducts from "../../utils/useFashionProducts";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import ShimmerProductCard from "../ShimmerProductCard";

const MultiCategoryProducts = ({ categoryList, categoryTitle }) => {
  const { isLoading, allProducts } = useFashionProducts(categoryList);

  return (
    <section className="my-2">
      <h1 className="text-center font-bold text-base md:text-2xl underline mb-2">
        {categoryTitle}
      </h1>
      <div className=" mx-auto w-[95vw] md:w-[80vw] grid grid-cols-3 md:grid-cols-5">
        {isLoading
          ? Array(10)
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

export default MultiCategoryProducts;
