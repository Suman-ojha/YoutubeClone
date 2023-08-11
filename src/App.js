import React from "react";
import {Route,Routes} from 'react-router-dom'
import {AppContext} from './context/contextApi'
import Header from './Components/Header'
import Feed from './Components/Feed'
import SearchResult from './Components/SearchResult'
import VideoDetails from './Components/VideoDetails'
const App = () => {
  return (
    <AppContext>
      <div className="flex flex-col h-[98%]">
        <Header/>
        <Routes>
            <Route exact path="/" element={<Feed/>}/>
            <Route  path="/searchResult/:searchQuery" element={<SearchResult/>}/>
            <Route  path="/video/:id" element={<VideoDetails/>}/>
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
