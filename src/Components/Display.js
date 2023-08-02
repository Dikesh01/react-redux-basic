import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { select_song } from "../redux/actions/userAction";

const Display = () =>{
    let dispatch = useDispatch();
    let songData = useSelector(state => state.songsList)
    return (
        <div className="display_song">
            <h1>List of all songs...</h1>
            {
                songData && 
                    songData.map((song,index) =>{
                        return(
                                <h3 onClick={()=>dispatch(select_song(song))}>{song.name}</h3>  
                        )                       
                    })
            }
        </div>
    )
}

export default Display;