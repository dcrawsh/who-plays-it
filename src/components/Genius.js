









const clientId = '-ukuPHaMrJpNIyLmAdj8UkzUcyyNpKpggLInLEIt1JqKPRpTRW3v6pBXlr5BmM97'
const clientSecret = 'jNrjCanrvPWh7k-i5w2YA_FpTtUpJj7GsCGVDrT8FiTqoEOw6HGtKMN1NgB-AZPYq0JF-MPiw6rNFVTiGeSxMA'

fetch('https://api.genius.com/search?q=LilWayne&page=1&per_page=20&access_token=QU_Xji1jsj5gzA-bei8fPddYKE1iqpMdeR1j2oHn6WUa9wnX1XhYsSAL-l_cd1W2')
.then(res => { console.log(res)})
    
.catch(err => {
      console.log(err);
  })

  fetch('https://api.genius.com/oauth/authorize',
{
    headers: { 
    "Access-Control-Allow-Origin": "*",
    "client_id": '-ukuPHaMrJpNIyLmAdj8UkzUcyyNpKpggLInLEIt1JqKPRpTRW3v6pBXlr5BmM97',
    "client_secret": 'jNrjCanrvPWh7k-i5w2YA_FpTtUpJj7GsCGVDrT8FiTqoEOw6HGtKMN1NgB-AZPYq0JF-MPiw6rNFVTiGeSxMA',
    "response_type": "token",
    "grant_type": "authorization_code"
    }
})
   .then(res => { res.json()})
    .catch(err => {
      console.log(err);
  })