import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
const SearchResultVideo = ({ video }) => {
  return (
    <Link  to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover "
            src={video?.thumbnails?.[0]?.url}
          />

          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex flex-col ml-4 mt-4 md:mt-0 overflow-hidden">
          {/* Title and description */}
          <span className="text-xl md:text-xl line-clamp-2 font-semibold text-white  ">
            {" "}
            {video?.title}
          </span>
          <span className="empty:hidden  text-white/[0.7] md:line-clamp-2 md:pr-24 md:my-4 line-clamp-1 text-sm">
            {video?.descriptionSnippet}
          </span>

          {/* Author descripton */}
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  className="h-full w-full object-contain"
                  alt="Author Avatar"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className=" text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-green-200 text-[12px] ml-2" />
                )}
              </span>

              <div className="flex font-semibold text-white/[0.7] truncate overflow-hidden text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex mx-1 text-[24px] font-bold leading-none relative top-[-10px] text-white/[0.6]">
                  .
                </span>
                <span className="truncate">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideo;
