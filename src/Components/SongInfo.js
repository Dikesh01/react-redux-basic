//
import React from "react";
import { useSelector } from "react-redux";

const SongInfo = () =>{

    let song = useSelector(state => state.selectedSong)
    // console.log(song);

    return (
        <div>
            <h1>Song Info</h1>
            {
              song && 

              <div>
                <h3>{song.name}</h3>  
                <h5>{song.author}</h5>  
                <h5>{song.duration}</h5>  
                <h5>{song.genere}</h5>
                <h5>{song.album}</h5>
              </div>  
            } 
        </div>
    )   
}

export default SongInfo;