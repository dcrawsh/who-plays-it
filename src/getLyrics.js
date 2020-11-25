

 function fetchLyrics(){
    var sourceText;
    fetch('https://my-cors-solution.herokuapp.com/https://www.metrolyrics.com/another-one-lyrics-mac-demarco.html')
    .then((resp) => resp.text())
    .then(text => {
        sourceText = text})     
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(sourceText, "text/html");
    var paragraphs = doc.querySelectorAll('p');
    console.log(paragraphs)
    }
    
 