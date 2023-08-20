import { Link } from "react-router-dom";
import { categoryList } from "../constant/constant";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center">
      <Link to="/products" className="text-xs md:text-base">
        All Products
      </Link>
      {categoryList.map((item) => (
        <NavItem
          key={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          url={item.url}
        />
      ))}
    </nav>
  );
};

const NavItem = ({ title, imgUrl, url }) => {
  return (
    <Link
      to={url}
      className="mx-2 md:mx-4 text-center flex flex-col justify-center items-center"
    >
      <img
        src={imgUrl}
        alt="category image"
        className="h-10 md:h-16 w-10 md:w-16"
      />
      <span className="text-xs md:text-base font-semibold text-gray-500">
        {title}
      </span>
    </Link>
  );
};

export default NavBar;
