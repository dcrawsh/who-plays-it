import React from 'react'
import scraper from "azlyrics-scraper";


export default function Lyric(props) {

    let song = props.songName.replaceAll(' ', '').toLowerCase()
    let artist = props.artistName.replaceAll(' ', '').toLowerCase()

    
    const handleClick = (e) => { 

        scraper.getLyricFromLink(`https://www.azlyrics.com/lyrics/${artist}/${song}.html`).then(result => {
          console.log(result.join(" "));
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
