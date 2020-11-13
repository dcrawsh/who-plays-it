import React from 'react'

export default function Results({ results }) {
    
    const addResults = () => {
       return results.tracks.items.map(item => <li>{item.artists[0].name}</li>)
    }

    if(results.length === 0){
        return null
    }
    
    return (
        <div>
           {addResults()} 
        </div>
    )
}
