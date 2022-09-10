import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFiltered,
  setJobs,
  setJobstoshow,
  setLoading,
} from "./features/jobSlice";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import JobPage from "./components/JobPage";

function App() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    let res;
    dispatch(setLoading(true));
    const fetchResults = async () => {
      res = await fetch(`https://remotive.com/api/remote-jobs?search=${search}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      dispatch(setFiltered(res.jobs));
      dispatch(setJobs(res.jobs));
      dispatch(setLoading(false));
    };
    fetchResults();
  }, [search]);

  return (
    <div className="App bg-[#F6F7FB] p-[12px] lg:px-[120px] lg:py-[32px]">
      <h1 className="font-bold text-[#282538] mb-[32px] text-2xl">
        Remotive <span className="font-light">Jobs</span>
      </h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/jobs/:id" exact element={<JobPage />} />
      </Routes>
    </div>
  );
}

export default App;
