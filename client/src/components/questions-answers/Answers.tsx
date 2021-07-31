import React from 'react';
import List from './List';
import { useState, useEffect } from 'react';
const Answers = (props: any) => {
  const [current, setCurrent] = useState(0);
  return <List list={props.answers} />
}

export default Answers;

