import React from 'react';
import List from './List';

const Lists = ({ lists, listname }) => {
  return (
    <div className={`lists ${listname}`}>
      {lists.map(list=><List key={list.id} list={list}/>)}
    </div>
  );
};

export default Lists;