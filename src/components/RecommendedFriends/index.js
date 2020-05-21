import React from 'react';
import FollowFriendListItem from '../FollowFriendListItem/index';
import './RecommendedFriends.css';

function RecommendedFriends() {

  let listfriend = [
    {avatar: 'https://i.pinimg.com/236x/be/2d/30/be2d307e7f0004d3b014ee1120756a93--avatar-buttons.jpg', username: 'hoangnam09'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlOHlFDxEb9wCnKOaA7KyOIpgy3p8jga4_IqAt3zv6BuDaQTuh&usqp=CAU', username: 'namchin02'},
    {avatar: 'https://i.pinimg.com/236x/be/2d/30/be2d307e7f0004d3b014ee1120756a93--avatar-buttons.jpg', username: 'hoangnfds'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_COpHfdAyNcaI_gyUBUJ8tGrcMXw9Muuc51PpOmzIhcJbxw1r&usqp=CAU', username: 'hofds9'},
    {avatar: 'https://i.pinimg.com/236x/be/2d/30/be2d307e7f0004d3b014ee1120756a93--avatar-buttons.jpg', username: 'hoadsnam09'}
    
  ]
  return (
    <div className="wrapper">
      <div className="header">
        <h3>Gợi ý cho bạn</h3>
        <p>Xem tất cả</p>
      </div>
      <div className="friends">
        {listfriend.map((item) =><FollowFriendListItem avatar={item.avatar} username={item.username} />)}
      </div>
    </div>
  )
}

export default RecommendedFriends;