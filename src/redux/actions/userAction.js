//
import { SELECTE_SONG } from "./actionTypes";


export const select_song = (song) =>{

    return (
        {type: SELECTE_SONG,
        payload: song
    }
    )
        
    
    
}