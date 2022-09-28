import React from 'react';
import Lists from './Lists';
import { useDispatch } from 'react-redux';
import { isMenuCheck } from '../modules/members';
const Main = ({ lists }) => {
  const dispatch = useDispatch();
  dispatch(isMenuCheck(false));
  return (
    <Lists lists={lists} listname="mainList"/>
  );
};
export default Main;