import React, { useState } from 'react';
import youtubeicon from './Assets/youtubeicon.png';
import { FaBars} from 'react-icons/fa'; // Example: Font Awesome bars icon
 import MicIcon from '@mui/icons-material/Mic';
 import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
 import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'; 
 import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import './Navbar.css';
import {Leftsidenavbar} from './Leftsidebar/Leftsidenavbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import shortslogo from './Assets/youtubeshortslogo.png';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
 import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
 import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
 import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
 import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; 
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'; 
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'; 

// import youtubestudio from './Assets/ytstudio.png';
// import youtubemusic from './Assets/ytmusic.png';
// import youtubekids from './Assets/ytkids.png'

import youtubeshorts from './Assets/youtubeshortslogo.png';
import './Sidebar.css'; /* this sidebar is for leftside icons , title , from Home-bottom , ur giving styles for the side-panel, 
when the menu button is clicked */
import Subscriptionbar from './Subscriptionbar';
import Morefromyoutube from './Morefromyoutube';
import { FaDownload } from 'react-icons/fa';
import { FaHome, FaRegNewspaper } from 'react-icons/fa';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';



 function Navbar() {
  const [inputSearch, setInputSearch] = useState('');
  const toggleSidebar=()=>{
const sidebar=document.querySelector(".sidebar");
const MiniSidebar=document.querySelector(".minisidebar");
  
if(sidebar){
  sidebar.classList.toggle('active');
}
if(MiniSidebar){
  MiniSidebar.classList.toggle('active');
}
}
   return (
    <>
    <div className='parent__header'>
      <nav className="navbar navbar-expand-lg py-4  ms-3 me-3">
    {/* Left side */}
    
      <div onClick={toggleSidebar}>
    <FaBars style={{cursor:'pointer'}}/>
 </div>
    
     
       <img src={youtubeicon} alt="YouTube" 
       style={{ height: '3em', width: '3em' }} />

         {/* Search bar */}
         <div className="header__center container " style={{ display: 'flex',
  alignItems: 'center'}}>
      <input className="form-control " 
     type="text" placeholder="Search" 
      onChange={(e) => setInputSearch(e.target.value)} 
      value={inputSearch} style={{padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        outline: 'none',
        marginLeft:'13%',
        marginRight:'12%'}} />
        <Link to={`/search/${inputSearch}`}>
          <BsSearch className='header__searchbutton' />
        </Link>
  
          </div>
          
          <div className='mic'>
          <MicIcon fontSize='medium'/> 
              
              </div>
         

         {/* Right side: video call, alerts, and user profile */}
         <div className='container col-1 ms-3 me-3 '>
           <VideoCallIcon style={{alignItems:'flex-end'}} /> <NotificationsNoneRoundedIcon /> <AccountCircleRoundedIcon />
         </div>
       
     </nav>
     </div>
  <div className='sidebar'>
    
    <Leftsidenavbar icon={HomeOutlinedIcon} title="Home"  />
   {/* <img src={shortslogo} alt="shortslogo" style={{height:'25px', width:'25px' }} /> */}
<Leftsidenavbar icon={SubscriptionsOutlinedIcon} title="Subscription"  />
<Leftsidenavbar icon={AccountBoxOutlinedIcon} title="Account"  />
<Leftsidenavbar icon={RestoreOutlinedIcon} title="History"  />
<hr></hr> 

<Leftsidenavbar icon={SlideshowOutlinedIcon} title="Your channel" />
<Leftsidenavbar icon={WatchLaterOutlinedIcon} title="Watch later" />
<Leftsidenavbar icon={DownloadIcon} title="Downloads" />
{/* Here, below the download there is a "show more drop-down arrow" so
when u click onto the show more the Liked videos along with the "SAVED VIDEOS 
INTO DIFFERENT PLAYLIST show be visible*/}
<Leftsidenavbar icon={ThumbUpAltOutlinedIcon} title="Liked" />
<Leftsidenavbar icon={ExpandMoreIcon} title="" />
<Leftsidenavbar icon={ExpandLessIcon} title="" /> 

<hr></hr>
 <h6 className='sidebar_subscription' style={{marginRight:'38%'}} >Subscriptions</h6>

 <Subscriptionbar img="https://yt3.googleusercontent.com/ytc/AIdro_mVV69SXInWSR129PbOi-wHRlmDbGNAzT9CBU4x4_M=s176-c-k-c0x00ffffff-no-rj" name="ThugBoiMax" alt='' />
 <Subscriptionbar img="https://yt3.googleusercontent.com/Wi5qmfrl24aasHi_6DCfqBKwoeo03qMn_zwrr8KCB3QxAPZ016ApBWQ1DJ8uyhfajq272JgM7Gg=s176-c-k-c0x00ffffff-no-rj"
 name="nakkalites" />
 <Subscriptionbar img="https://yt3.googleusercontent.com/cdKT-FP98fZR29M543LKXXwVS5nAcVfNsxNl20pTSAg-C8rLloP0B_wa1pFTSqlhC-YTkaeL1cQ=s176-c-k-c0x00ffffff-no-rj" name="glata" alt='' />
 <Subscriptionbar img="https://yt3.googleusercontent.com/ytc/AIdro_k1bpaCNnyJKn2EV5ac2gp0ET5xcr27k45OO55mIvs=s176-c-k-c0x00ffffff-no-rj" name="nakkalites" alt='' />
 <Subscriptionbar img="https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s176-c-k-c0x00ffffff-no-rj" name="tamilmitran" alt='' />
 <Subscriptionbar img="https://yt3.googleusercontent.com/xo2fH4S3UQBNh1jiwukb_6iu3G9q2bQ8GQ_islIXZNQOD0pfr9uB5mRBQiYgyvAX_4oLdZGTGg=s176-c-k-c0x00ffffff-no-rj" name="hello hello" alt='' />
 <Subscriptionbar img="https://yt3.googleusercontent.com/ytc/AIdro_nsZaFzRgi_NIb7IjEWtXJ_Z9Qi8we-UjOF_1H2Uw=s176-c-k-c0x00ffffff-no-rj" name="behindwoods"  alt=''/>
 
 <hr></hr>

<h6 style={{marginRight:'48%'}} >Explore</h6>
<hr></hr>
<Leftsidenavbar icon={WhatshotOutlinedIcon} title="Trending" />
<Leftsidenavbar icon={LocalMallOutlinedIcon} title="Shopping" />
<Leftsidenavbar icon={MusicNoteOutlinedIcon} title="Music" />
<Leftsidenavbar icon={MovieCreationOutlinedIcon} title="Movies" />
<Leftsidenavbar icon={SensorsOutlinedIcon} title="Live" />
<Leftsidenavbar icon={SportsEsportsIcon} title="Gaming" />
<Leftsidenavbar icon={FeedSharpIcon} title="News" />
<Leftsidenavbar icon={EmojiEventsOutlinedIcon} title="sports" />
<Leftsidenavbar icon={LightbulbOutlinedIcon} title="Courses" />
<Leftsidenavbar icon={DryCleaningOutlinedIcon} title="Fashion & Beauty" />
<Leftsidenavbar icon={PodcastsOutlinedIcon} title="Podcasts" />
<hr></hr>

<h6 className='morefrom__youtube' style={{marginRight:'18%'}} >More from YouTube</h6>
<Morefromyoutube img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/wcH/kZH/lJT/7Oz/vr7//Pz/9fX/xMT/+Pj/ysr/5eX/4uL/39//m5v/JSX/z8//ubn/tLT/pKT/n5//l5f/rq7/2dn/Tk7/1NT/Rkb/8PD/Xl7/PT3/MTH/Ghr/gID/p6f/cXH/DQ3/h4f/amr/NTX/Z2f/VFT/fn7/YWH/d3f/QUH/IyP/WFjVEipKAAAEd0lEQVR4nO2c2XLiMBBFPQaDwQubjdm3sGSb5P//bgzDGhxCua+QIPe85QGVTgqkVqvVlkUIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII+eWUqwPH94Mw7PS8SqnZSmZRHNdq7WKxWNiT/tFu1+I4ms2SVqniNTphGPi+M6jqnv45qU/gNZOotngadkfj8cdk/kfAfFIfj0fd4fuiFiWlRqDRuep4SWHZXU0kPtcwGXWXxaTi3NbUW3RVi53Tf28NbqNXLd7ebm/ZuoFgpM9vzbyp2M8Z6RVMeVH6XW3o1tvQUSfo6Xbb0lAl2NFttidUI+jq9jowV7M7DnV7HfGmQrCk2+qEigLDum6pE1Z4waZupy94cMO+bqUvwH+Jjm6jM9DLqWlfUvy2P9UtdEYRbGjWSrqmDzbU7ZMBVtCckPRAADW0detkgN0RNWYuviWGGr7r1sngFWpoWkSz5gVqqNsmi/nDG0K3C/Oi0jUO0LCnWyaTHtCwolsmE+Q5vyWYhyf58EWQKf6aYB62VV3ApE5oAw2ngnnY6ef9T5DUCVOg4ZNgHvZmhIqC49cT0HApmIe9HSOGme14BhpKvmQ7Q8tFB7fIsO2vYB72YZgAG96OgIaSH5F9PFAJee8/ARpK5mGfDtVG+aWUYYJlyTS+GFoDycJ8iqGGaZSLuio31lAWBR6BS3sP0IaWVUAY4o5PPt7Qcp7lhrh8oihb+o2hZTVWUkNcUYboAPytoWUlQkPcEVhURnPB0HKnIkPc9ZOojuaSYRrIvQiGxmW9RUmMy4bp4PkDOVwaQ3Rr8ZOh4Fz189CGGFrua76hSzBDUSnNVf/oMFdJ7j0Z5ksF3ZNhvgjnjgxzRql3s9LkPmngDJXuh7384SluP1QY04iOGLiYRllcWpZlbXBxqaqzRfNDJAg8W6g5H3bE2VNcuXegwNAFpNx8mKGCPI3kvm4P7m0JPNcGSn0bm03MF2bfj+EAdwWFM0TeWyCvEXGClmTfOjGEXgXXgYaSi4YjQx/79BRZJYy5A56i1LYMgYaS8HhnOIOZ7VgCDeW1GN4YJrbnHWg4FcxjU0+j5N3bAmgoOeTYVllRTRSyDNrMujZcIsrU2kRksb6Z9aXIN91m1gi7QMPHr/M20nACNTTxvcUn1PDx38w8/rsnsx7j/wf7du3x3x+auJhiBX/BO+CpbqEzCmBD897jo9tGmBeZQqPSNaZFNdgXpGtM+5oij79bzFpNP/CChoU1SprvKXl/lpOuCkGTen1BnwAfYU5wim+htMWUnnsKO2CakXNTsFEcGOjf+OuKWgruUZbBvhJ086QsZgquka6lAI9GswnjNw0RTnehbAnNxA2b0XTYH4uaW1/DZNVdFhJPX9trd+B0Kq1ZXHhdfvZX4/qHrBho29D77X9Db09nQ+9vKafOfhCEYa/h2Zue7NG2J3vxuCd7sV2rxVE0S1rNUqXR2zRldxzXPB9CCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyK35B1POXrZYAfBXAAAAAElFTkSuQmCC" 
alt='' titles="YouTube Premium"/>
<Morefromyoutube img="https://play-lh.googleusercontent.com/SM1nwJaePNm9Q6vVgU0CvvmR1uozbZYU8ohKfBCIndZy0sSGtwmObhpBcUkTOqcyYg=w240-h480-rw" alt='' titles="YouTube Stuio"/>
<Morefromyoutube img="https://yt3.googleusercontent.com/ytc/AIdro_m9DoYKugiGiX0bhIVSml2jSH9A17h7VL_7LJGGpA=s900-c-k-c0x00ffffff-no-rj" alt='' titles="YouTube Music" />
<Morefromyoutube img="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc=w240-h480-rw" alt='' titles="YouTube Kids" />
<hr></hr>
<br />
<Leftsidenavbar icon={SettingsOutlinedIcon}  title="Settings"  />
<Leftsidenavbar icon={FlagOutlinedIcon} title="Report history"  />
<Leftsidenavbar icon={HelpOutlineOutlinedIcon}  title="Help"  />
<Leftsidenavbar icon={AnnouncementOutlinedIcon} title="Send feedback"  />

 <br></br>
    <p>About Press Copyright <br />
    Contact us Creators <br /> 
    Advertise Developers <br /> 
    <br /> 
    Terms Privacy Policy Safety <br /> 
    How YouTube works <br /> 
    Test new features
    </p>  



    
</div>

<div className='minisidebar'>
  
      <div className='miniDiv'>
        <FaHome/>
        <p>Home</p>
      </div>
      
      <div className='miniDiv'>
        <FaRegNewspaper/>
        <p>Subscription</p>
     </div>
     <div className='miniDiv'>
     <VideoLibraryOutlinedIcon />
<p>You</p>
     </div>
     <div className='miniDiv'>
     <img src={youtubeshorts} alt='' style={{height:'10px', width:'10px'}} />
     <p>Shorts</p>
     </div>
     <div className='miniDiv'>
     <FaDownload  />
     <p>Downloads</p>
     </div>
     </div>


    </>
   );
 }
export default Navbar;

