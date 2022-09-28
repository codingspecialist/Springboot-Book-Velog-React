import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ list }) => {
  return (
    
    <div className='listBox'>
      <Link to={`listview/${list.id}`}>
      <div className='listImgBox'>
        <img src={list.src} alt="" />
      </div>
      <div className='listTextBox'>
        <div className='listText'>
          <h3>{list.title}</h3>
          <p>{list.headdesc}</p>
        </div>
        <div className='listDayComment'>
        {list.dayCount}일전·{list.commentCount}개의 댓글
        </div>
      </div>
      <div className='listUserBox'>
        <img src={list.userSrc} alt=""/>
        <span>by</span>
        {list.userId}
      </div>
      </Link>
    </div>
  );
};

export default List;