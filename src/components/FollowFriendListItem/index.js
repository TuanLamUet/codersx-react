import React from 'react';
import './FollowFriendListItem.css';


function FollowFriendListItem(props) {
  return(
    <div className="friend">
      <div className="avatar">
        <img src={props.avatar} alt='default' />
      </div>
      <div className="info">
        <div className="username">
          <p>{props.username}</p>
        </div>
        <p className="recommended">Gợi ý cho bạn</p>
      </div>
      <div className="follow">
        <a href="abc.com">Theo dõi</a>
      </div>
    </div>
  )
}

export default FollowFriendListItem;