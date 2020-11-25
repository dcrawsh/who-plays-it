function getLyrics(artist, song) {
    $.get('https://my-cors-solution.herokuapp.com/https://www.metrolyrics.com/another-one-lyrics-mac-demarco.html', function(response) { 
        var lyrics = jQuery(response).find('.verse')
        let lyricsArray = Array.from(lyrics)
        for(let i = 0; i < lyricsArray.length;i++){
            console.log(lyricsArray[i].outerHTML)
        }
    });  
}
