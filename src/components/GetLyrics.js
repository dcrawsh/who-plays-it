import {React, useState} from 'react';



export default function GetLyrics(props) {

    const [lyrics, setLyrics] = useState('');

    let artist = props.artistName.replaceAll(' ', '-').replaceAll('/','').toLowerCase();
    let song = props.songName.replaceAll(' ', '-').replaceAll('/','').toLowerCase();

    
    

    
    const handleClick = (e) => { 

            console.log(`https://www.metrolyrics.com/${song}-lyrics-${artist}.html`)
    
            fetch(`https://my-cors-solution.herokuapp.com/https://www.metrolyrics.com/${song}-lyrics-${artist}.html`)
            .then((resp) => resp.text())
            .then(text => {
                var sourceText = text
                var parser = new DOMParser();
                var doc = parser.parseFromString(sourceText, "text/html");
                var paragraphs = doc.querySelectorAll('.verse');
                console.log(paragraphs)
                let verseArray = Array.from(paragraphs)
                for(let i = 0; i < verseArray.length;i++){
                    console.log(verseArray[i].outerHTML)
                    props.setLyrics(verseArray[i].outerHTML)
                }
                
            })
                
            
        
      }
    
    
    
    
    return (
        <div>
            <button onClick={handleClick}>Lyrics</button>
            <div className="displayed-lyrics"></div>
        </div>
    )
}

