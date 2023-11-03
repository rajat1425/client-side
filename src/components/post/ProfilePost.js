import React from "react";
import {AiFillHeart} from 'react-icons/ai'
function ProfilePost(proms) {
  // const myProfile=useSelector(state=>state.appConfigReducer.myProfile);
  // const proImg=myProfile?.avatar?.url;
  return (
    <> 
    
      <div class="flex w-[100%] h-[300px] relative  my-1 p-1 rounded-2xl border group hover:opacity-60 transition-all duration-500">
        <img src={proms?.postImg} alt="" class="w-[100%] rounded-2xl" />
        <div class=" absolute left-[50%] top-[50%] space-x-2 items-center justify-center hidden group-hover:flex  transition-all duration-500">
        <h1 class="text-deepBlue leading-10 white text-lg font-bold ">{proms.likesCount}</h1>  <AiFillHeart size={40} style={{color:'red'}}/> 
        </div>
      </div>
    </>
  );
}

export default ProfilePost;
