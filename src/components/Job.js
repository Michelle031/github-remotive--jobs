import React from "react";
import { Public, AccessTime } from "@mui/icons-material";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function Job({ job }) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="flex w-full space-x-2 bg-white rounded h-[140px] lg:h-[120px] items-center p-4 cursor-pointer hover:bg-[#FcFcFc] transition duration-100 ease-in-out">
        <div className="w-[90px] h-[90px] rounded mr-2">
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
        <div className="flex flex-col flex-1 text-[#334680] font-bold space-y-1">
          <h4 className="text-xs">{job.company_name}</h4>
          <h2 className="font-normal text-md lg:text-lg">{job.title}</h2>
          {job.job_type === "full_time" && (
            <p className="hidden lg:block border border-[#334680] p-[6px] rounded w-[65px] text-xs">
              Full time
            </p>
          )}
        </div>
        <div className="hidden lg:flex text-xs text-[#B9BDCF] font-medium place-self-end space-x-4 lg:space-x-6">
          <p className="flex  items-center">
            <Public sx={{ marginRight: "5px" }} />{" "}
            {job.candidate_required_location}
          </p>
          <p className="flex  items-center">
            <AccessTime sx={{ marginRight: "5px" }} />{" "}
            <Moment fromNow>{job.publication_date}</Moment>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Job;
