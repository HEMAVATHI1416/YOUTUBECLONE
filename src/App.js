import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import RecommendedVideos from './Components/SearchPage/RecommendedVideos';
import SearchPage from './Components/SearchPage/SearchPage';
import VideoPlayer from './Components/SearchPage/VideoPlayer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="app__mainpage">
               <RecommendedVideos />
              </div>
            </>
          } />

<Route path='/search/:searchQuery' element={
            <>
              <Navbar />
              <div className="app__mainpage">
              <SearchPage />
                
              </div>
              </>
          } />

             <Route path='/video/:videoId' element={
            <>
              <Navbar />
              <div className="app__mainpage">
                <SearchPage />
                <VideoPlayer />
              </div> 
            </>
          } />  
           

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
