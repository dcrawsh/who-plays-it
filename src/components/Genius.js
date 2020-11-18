import { getLyrics } from 'genius-lyrics-api';









const clientId = '-ukuPHaMrJpNIyLmAdj8UkzUcyyNpKpggLInLEIt1JqKPRpTRW3v6pBXlr5BmM97'
const clientSecret = 'jNrjCanrvPWh7k-i5w2YA_FpTtUpJj7GsCGVDrT8FiTqoEOw6HGtKMN1NgB-AZPYq0JF-MPiw6rNFVTiGeSxMA'

fetch('https://cors-anywhere.herokuapp.com/https://api.genius.com/oauth/authorize',
{
    headers: { 
    "client_id": '-ukuPHaMrJpNIyLmAdj8UkzUcyyNpKpggLInLEIt1JqKPRpTRW3v6pBXlr5BmM97',
    "client_secret": 'jNrjCanrvPWh7k-i5w2YA_FpTtUpJj7GsCGVDrT8FiTqoEOw6HGtKMN1NgB-AZPYq0JF-MPiw6rNFVTiGeSxMA',
    "response_type": "token",
    "grant_type": "authorization_code"

    }
})
   .then(res => { console.log(res)})
    
    .catch(err => {
      console.log(err);
  })