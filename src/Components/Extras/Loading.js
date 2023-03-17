import React from "react";
import {
    LoadingStyle
} from './Divider.elements';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

function Loading () {
  return (
    <LoadingStyle>
        <AiOutlineLoading3Quarters className='rotate'/>
    </LoadingStyle>
  )
}

export default Loading;