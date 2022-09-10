import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { setCurrent, setJobstoshow } from "../features/jobSlice";

const Pagination = () => {
  const pageNos = [];
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const { filteredJobs, current } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const pages = Math.ceil(filteredJobs.length / 10);

  useEffect(() => {
    const offset = (current - 1) * 10;
    dispatch(setJobstoshow(filteredJobs.slice(offset, offset + 10)));
  }, [current, filteredJobs]);

  function paginate(pageNo) {
    dispatch(setCurrent(pageNo));
  }

  for (let i = 1; i <= pages; i++) {
    pageNos.push(i);
  }
  const handleNextbtn = () => {
    if (current !== pages) {
      paginate(current + 1);
    }

    if (current + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    if (current > 1) {
      paginate(current - 1);
    }

    if ((current - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <nav className="flex text-[#B7BCCE] items-center space-x-3 mr-0 justify-end">
      <p onClick={handlePrevbtn}>
        <ChevronLeft />
      </p>
      {minPageNumberLimit >= 1 && (
        <span onClick={handlePrevbtn} className="span">
          {" "}
          &hellip;{" "}
        </span>
      )}
      {pageNos.map((page) => {
        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
          return (
            <p
              key={page}
              onClick={() => paginate(page)}
              className={current === page ? "active" : null}
            >
              {page}
            </p>
          );
        } else {
          return null;
        }
      })}
      {pages > maxPageNumberLimit && (
        <span onClick={handleNextbtn} className="span">
          {" "}
          &hellip;{" "}
        </span>
      )}
      <p onClick={handleNextbtn}>
        <ChevronRight />
      </p>
    </nav>
  );
};

export default Pagination;
