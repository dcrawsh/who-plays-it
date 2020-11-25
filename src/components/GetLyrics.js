import {React, useState } from 'react';
export default function GetLyrics(props) {
    
    
    
    const [hasLyrics, setHasLyrics] = useState('');
    let artist = props.artistName.replaceAll(' ', '-').replaceAll('/','').toLowerCase();
    let song = props.songName.replaceAll(' ', '-').replaceAll('/','').toLowerCase();
    const handleClick = () => {
      if (document.getElementById(`${artist}_${song}_lyrics`).innerHTML !== '') {
        document.getElementById(`${artist}_${song}_lyrics`).innerHTML = '';
        setHasLyrics(false);
      } else {
        fetch(`https://my-cors-solution.herokuapp.com/https://www.metrolyrics.com/${song}-lyrics-${artist}.html`)
          .then(resp => resp.text())
          .then(text => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(text, 'text/html');
              const verses = doc.querySelectorAll('.verse');
              const verseArray = Array.from(verses);
              if (verseArray.length === 0) {
                document.getElementById(`${artist}_${song}_lyrics`).innerHTML = 'Not Found';
              } else {
                document.getElementById(`${artist}_${song}_lyrics`).innerHTML = '';
              }
              for (let i = 0; i < verseArray.length;i++){
                console.log(verseArray[i].outerHTML)
                document.getElementById(`${artist}_${song}_lyrics`).innerHTML += verseArray[i].outerHTML;
              }
          });
        setHasLyrics(true);
      }
    }
    return (
      <div>
        <button className="lyrics-button" onClick={handleClick}>{hasLyrics ? 'Hide Lyrics' : 'Show Lyrics'}</button>
        <div className="lyric-container" id={`${artist}_${song}_lyrics`}></div>
      </div>
    );
}