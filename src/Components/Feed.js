import React, { useContext } from "react";

import LeftNav from "./LeftNav";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard"

const Feed = () => {
  const { loading, searchResult } = useContext(Context);

  // Check if searchResult is an array before using .map()
  const videoCards = Array.isArray(searchResult)
    ? searchResult
        .filter((item) => item.type === 'video')
        .map((item, idx) => <VideoCard key={idx} video={item?.video} />)
    : null;

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && videoCards}
        </div>
      </div>
    </div>
  );
};

export default Feed;
