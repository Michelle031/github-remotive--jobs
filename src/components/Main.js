import { Public } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setFiltered } from "../features/jobSlice";

function Main() {
  const inputRef = useRef(null);
  const { loading, jobs, jobsToShow } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState("USA");
  const handleChange = (e) => {
    setLocation(e.target.value);
    dispatch(
      setFiltered(
        jobs?.filter((job) =>
          job.candidate_required_location.includes(e.target.value)
        )
      )
    );
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setLocation(inputRef.current.value);
    dispatch(
      setFiltered(
        jobs?.filter((job) =>
          job.candidate_required_location.includes(inputRef.current.value)
        )
      )
    );
    inputRef.current.value = "";
  };
  const fulltime = () => {
    setIsChecked(!isChecked);
    dispatch(setFiltered(jobs?.filter((job) => job.job_type === "full_time")));
  };
  return (
    <div className="flex flex-col lg:flex-row mt-10 px-6 lg:px-0 justify-between">
      <div className="left w-full flex-[0.23] sticky mb-4 lg:mb-0">
        <h3 className="flex items-center font-medium text-sm text-[#334680]">
          <input type="checkbox" checked={isChecked} onChange={fulltime} /> Full
          time
        </h3>
        <div className="filters flex flex-col">
          <h3 className="font-bold text-sm text-[#B9BDCF] my-5">LOCATION</h3>
          <form
            onSubmit={handleSumbit}
            className="flex bg-white text-[#B9BDCF] text-sm font-normal rounded-lg space-x-2 p-4 focus-within:text-[#334680]"
          >
            <Public />
            <input
              type="text"
              placeholder="City, state, zip code or country"
              className="flex-1 outline-none text-xs"
              ref={inputRef}
            />
            <button hidden></button>
          </form>
          <div className="radio mt-4 flex flex-col justify-center space-y-4 text-sm">
            <p>
              <input
                type="radio"
                name="location"
                value="USA"
                onChange={handleChange}
                checked={location === "USA"}
              />{" "}
              USA
            </p>
            <p>
              <input
                type="radio"
                name="location"
                value="UK"
                onChange={handleChange}
                checked={location === "UK"}
              />{" "}
              UK
            </p>
            <p>
              <input
                type="radio"
                name="location"
                value="Worldwide"
                onChange={handleChange}
                checked={location === "Worldwide"}
              />{" "}
              Worldwide
            </p>
            <p>
              <input
                type="radio"
                name="location"
                value="Europe"
                onChange={handleChange}
                checked={location === "Europe"}
              />{" "}
              Europe
            </p>
          </div>
        </div>
      </div>
      <div className="right flex flex-col space-y-3 mb-4 flex-[0.72] justify-center">
        {loading ? (
          <h1 className="text-2xl">Loading ...</h1>
        ) : jobsToShow.length > 0 ? (
          jobsToShow.map((job) => <Job key={job.id} job={job} />)
        ) : (
          <h1 className="text-[#334680] text-center">Jobs not Found</h1>
        )}
      </div>
    </div>
  );
}

export default Main;
