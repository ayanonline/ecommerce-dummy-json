import useFashionProducts from "../../utils/useFashionProducts";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { memo } from "react";

const MultiCategoryProducts = memo(({ categoryList }) => {
  const { isLoading, allProducts } = useFashionProducts(categoryList);
  console.log(allProducts);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <section className="my-2">
      <h1 className="text-center font-bold text-2xl underline mb-2">Grocery</h1>
      <div className="flex mx-auto flex-wrap justify-start w-[70vw]">
        {allProducts.map((item) => (
          <Link key={item.id} to={"/products/" + item.id}>
            <ProductCard data={item} />
          </Link>
        ))}
      </div>
    </section>
  );
});

export default MultiCategoryProducts;
