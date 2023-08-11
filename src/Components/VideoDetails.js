import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchData } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res); // Log the object as JSON
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideoDetails = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res); // Log the object content
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  // Check if searchResult is an array before using .map()
  const suggestionVideoCards = relatedVideos?.contents
    ?.filter((item) => item?.type === "video")
    ?.map((item, idx) => <SuggestionVideoCard key={idx} video={item?.video} />);

  return (
    <div className="flex flex-row justify-center h-[calc(100%-54px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row " >
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              
              style={{ backgroundColor: "#000000" }}
            />
          </div>

          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          {/* For the artist , subscibers ,like , author,,etc,,, */}
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start"></div>
              <div className="flex h-11 w-11 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>

              <div className="flex flex-col ml-4">
                <div className="flex items-center font-semibold text-white text-[17px]">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-green-200 text-[12px] ml-2" />
                  )}
                </div>
                <div className="text-sm text-white/[0.7]">
                  {video?.author.stats.subscribersText}
                </div>
              </div>
            </div>

            <div className="flex text-whiet mt-4 md:mt-0 ">
              <div className="flex justify-center items-center h-11 px-5 rounded-3xl bg-white/[0.2] ">
                <AiOutlineLike className="text-white text-xl mr-2" />
                <span className="text-white/[0.5] text-[16px]">{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>

              <div className="flex justify-center items-center h-11 px-5 rounded-3xl bg-white/[0.2] ml-4">
                <AiOutlineLike className="text-white text-xl mr-2" />
                <span className="text-white/[0.5] text-[16px]">{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggetion video sections */}
        <div className="flex flex-col py-6 px-4  lg:w-[360px] xl:w-[415px]">
          {suggestionVideoCards}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
