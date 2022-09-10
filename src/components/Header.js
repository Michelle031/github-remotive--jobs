import { WorkOutline } from "@mui/icons-material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/searchSlice";

function Header() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(setSearch(inputRef.current.value));
    inputRef.current.value = "";
  };
  return (
    <div>
      <div className="header px-[18px] md:px-[200px] py-[42px] rounded-lg">
        <form
          className="flex bg-white text-[#B9BDCF] p-2 rounded-lg"
          onSubmit={handleSumbit}
        >
          <div className="flex flex-1 text-xs items-center space-x-3 focus-within:text-[#334680] ">
            <WorkOutline sx={{ marginLeft: "5px" }} />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Title, expertise or benefits"
              ref={inputRef}
            />
          </div>
          <button className="bg-[#1E86FF] rounded text-white py-[14px] px-[48px] hover:bg-[#1E86FF99] transition duration-100 ease-in-out">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
