import React from 'react'
import './HomeFeed.css'
import SideBar from './home_components/Sidebar.js'

export default function HomeFeed() {
  return (
    <div className="feed">
        <div className="feed_container">
            <SideBar></SideBar>
        </div>
    </div>
  )
}
