import React, { useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import LeftNav from './LeftNav'
import SearchResultVideo from './SearchResultVideo'
const SearchResult = () => {
  const [result, setResult] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    handleSearchResult();
  }, [searchQuery]);

  const handleSearchResult = async () => {
    try {
      setLoading(true);
      const res = await fetchData(`search/?q=${searchQuery}`);
      
      setResult(res.contents);
      setLoading(false);
    } catch (error) {
      console.log('an error occured ',error);
      return error;
    }
  };

  //serach videos..
  const searchVideoResults = result
  ?.filter((item) => item?.type === "video")
  ?.map((item, idx) => <SearchResultVideo key={idx} video={item?.video} />);
  return <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav/>
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
      <div className="grid grid-cols-1 gap-2 p-5">
        {searchVideoResults}
      </div>
    </div>
  </div>;
};

export default SearchResult;
