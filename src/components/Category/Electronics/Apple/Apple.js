import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import applePhone from './actionCreator';

export default function Apple() {
    const select = useSelector(state=>state);
    const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(applePhone())}></button>
    </>
  );
}
