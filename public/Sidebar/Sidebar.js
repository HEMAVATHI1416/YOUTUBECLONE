import React from 'react'
import SideBarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css'
import { AiFillHome } from 'react-icons/ai';
import { FaHotjar } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { MdWatchLater } from 'react-icons/md';
import { AiTwotoneLike } from 'react-icons/ai';


function Sidebar() {
  return (
    <div className='sidebar' >
        <SideBarRow Icon={AiFillHome} title='Home' href='/' />
        <SideBarRow Icon={FaHotjar} title='Trending' href='/'/>
        <SideBarRow Icon={MdSubscriptions} title='Subscription' href='/' />
        <hr />
        <SideBarRow Icon={MdVideoLibrary} title='Library' href='/'/>
        <SideBarRow Icon={FaHistory} title='History' href='/'/>
        <SideBarRow Icon={MdPermMedia} title='Your videos' href='/'/>
        <SideBarRow Icon={MdWatchLater} title='Watch later' href='/'/>
        <SideBarRow Icon={AiTwotoneLike} title='Liked vides'href='/' />
        <hr />
    </div>

)
}

export default Sidebar;
