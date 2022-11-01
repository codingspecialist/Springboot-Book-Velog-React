import React from 'react';
import {  useSelector } from 'react-redux';
const Profile = ({userId}) => {
    const profileList = useSelector(state=>state.members.members);
    const profileMember = profileList.find(list=> list.userId === userId)
    return (
        <div className='profile'>
            <div className='photo'>
                <img src={`/${profileMember.imgsrc}`} alt="dd"/>
            </div>
            <div className='text'>
                <h3>{profileMember.title}</h3>
                <p>{profileMember.desc}</p>
            </div>
        </div>
    );
}
export default Profile;