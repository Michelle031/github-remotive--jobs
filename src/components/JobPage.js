import React from "react";
import { useSelector } from "react-redux";
import { Public, AccessTime, KeyboardBackspace } from "@mui/icons-material";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";

function JobPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const { jobs } = useSelector((state) => state.jobs);
  let job = jobs.filter((job) => job.id === parseInt(id));
  job = job?.[0];
  return (
    <div className="flex flex-col lg:flex-row justify-between text-[#334680]">
      <div className="left flex-[0.2] space-y-3 mb-6 lg:mb-0 ">
        <p
          className="text-[#1E86FF] text-sm cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspace /> Back to search
        </p>
      </div>
      <div className="right flex-[0.85] space-y-3">
        <div className="title flex flex-col justify-center space-y-3 lg:space-y-2 ">
          <h2 className="font-bold text-2xl flex flex-col lg:flex-row items-start lg:items-center ">
            {job.title}
            {"  "}
            {job.job_type === "full_time" && (
              <p className="mt-3 lg:mt-0 lg:ml-2  inline border border-[#334680] p-[6px] rounded w-[65px] text-xs">
                Full time
              </p>
            )}
          </h2>

          <p className="flex items-center text-sm -mt-2 text-[#B7BCCE]">
            <AccessTime sx={{ marginRight: "5px" }} />{" "}
            <Moment fromNow>{job.publication_date}</Moment>
          </p>
        </div>

        <div className="company flex items-center !my-5 space-x-3">
          <div className="w-[42px] h-[42px] rounded mr-2">
            <img
              src={
                job.company_logo
                  ? job.company_logo
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
              }
              alt="not found"
              className="fit-contain h-full"
            />
          </div>
          <div className="">
            <h2 className="font-bold text-lg">{job.company_name}</h2>
            <p className="flex text-xs text-[#B7BCCE] items-center">
              <Public sx={{ marginRight: "5px" }} />{" "}
              {job.candidate_required_location}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: job.description }}
          class = "desc flex flex-col leading-7 space-y-4"
        ></div>
        <p className="block !my-12">
          <a
            href={job.url}
            className="text-white text-xs w-full h-full bg-[#1E86FF] px-8 py-3 rounded"
          >
            APPLY
          </a>
        </p>
      </div>
    </div>
  );
}

export default JobPage;
