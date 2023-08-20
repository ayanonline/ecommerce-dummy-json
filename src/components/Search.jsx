import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchText.length > 0 && getSearchSuggestion();
      searchText.length > 0
        ? setShowSuggestion(true)
        : setShowSuggestion(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const res = await fetch(
      "https://dummyjson.com/products/search?q=" + searchText
    );
    const json = await res.json();
    setSuggestions(json.products);
    console.log(json.products);
  };

  return (
    <div className="relative">
      <div className="border w-[47vw] md:w-[25vw] p-2 flex rounded-md">
        <CiSearch className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none px-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => searchText.length > 0 && setShowSuggestion(true)}
        />
      </div>

      {/* suggesiton box */}
      {suggestions && showSuggestion && (
        <div
          className="absolute w-full max-h-[40vh] overflow-y-scroll bg-white rounded-md border"
          onClick={() => setShowSuggestion(false)}
        >
          <div className="felx flex-col">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="my-2 p-4 flex items-center justify-between"
              >
                <Link to={"/products/" + item.id}>
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt="pimage"
                      className="h-8 md:h-14 w-8 md:w-14 object-cover rounded-md"
                    />
                    <span className="ml-2 md:ml-6 text-xs md:text-lg font-semibold">
                      {item.title}
                    </span>
                  </div>
                </Link>

                <span className="font-bold text-sm md:text-lg">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
