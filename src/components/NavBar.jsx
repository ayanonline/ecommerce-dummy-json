import { Link } from "react-router-dom";
import { categoryList } from "../constant/constant";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center">
      <Link to="/products">All Products</Link>
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
    <Link to={url} className="mx-4 text-center">
      <img src={imgUrl} alt="category image" className="h-16 w-h-16" />
      <span className="font-semibold text-gray-500">{title}</span>
    </Link>
  );
};

export default NavBar;
