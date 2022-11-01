import React from 'react';
import { useDispatch } from 'react-redux';
import { isMenuCheck } from '../modules/members';
import Body from '../components/home/Body';
const HomePage = ({ lists }) => {
  const dispatch = useDispatch();
  dispatch(isMenuCheck(false));
  return (
    <Body lists={lists} />
  );
};
export default HomePage;