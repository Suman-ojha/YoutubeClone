import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Link className="flex" to={`/video/${video?.videoId}`}>
      <div className="flex mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:min-w-[128px] xl:w-40 xl:min-w-[168px]  rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover "
            src={video?.thumbnails?.[0]?.url}
          />

          {video.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>
      </div>

      <div className="flex flex-col ml-2 overflow-hidden">
          <span className="text-sm text-white lg:text-xs font-bold line-clamp-2 xl:text-sm">{video?.title}</span>
          <span className=" text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-green-200 text-[12px] lg:text-[10px] xl:text-[12px] ml-2" />
            )}
          </span>

          <div className="flex font-semibold text-white/[0.7] truncate overflow-hidden text-[12px] lg:text-[10px] xl:text-[12px]">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="flex mx-1 text-[24px] font-bold leading-none relative top-[-10px] text-white/[0.6]">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </div>
    </Link>
  );
};

export default SuggestionVideoCard;
