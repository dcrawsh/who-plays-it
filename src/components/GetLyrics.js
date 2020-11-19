import React from 'react'
import scraper from "azlyrics-scraper";




export default function GetLyrics(props) {

    

    let song = props.songName.replaceAll(' ', '').toLowerCase()
    let artist = props.artistName.replaceAll(' ', '').toLowerCase()

    
    const handleClick = (e) => { 
        return scraper.getLyricFromLink(`https://www.azlyrics.com/lyrics/${artist}/${song}.html`).then(result => {
          props.setLyrics(result.join(" "));
      }).catch(error => {
          console.log(error)
      });
      }
    
    
    
    
    return (
        <div>
            <button onClick={handleClick}>Lyrics</button>
        </div>
    )
}
