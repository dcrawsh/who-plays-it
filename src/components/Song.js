import React from 'react'
import Lyrics from './Lyrics'

export default function Artist( {info} ) {
    
   
    let wikiSearch = `https://en.wikipedia.org/wiki/${info.artists[0].name.replace(' ','_')}`
    return (
        
        <div className="song-container">

    
            <div className='album-art'><img src={info.album.images[1].url}/></div>
            <div className="song-container-details">
                <div className="artist-name"><a href={wikiSearch}>{info.artists[0].name}</a></div>
            
            
                <div className="song-info">{info.album.name} · {info.name} </div>
                <div className="release-date">Release Date: {info.album.release_date}</div><br/>
                <Lyrics artistName={info.artists[0].name} songName={info.name}/>
                <hr></hr>
            </div>
        </div>
    )
}
