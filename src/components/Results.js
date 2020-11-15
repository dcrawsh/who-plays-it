import React from 'react'
import Song from './Song'

export default function Results({ results }) {
    
    const addResults = () => {
       return results.tracks.items.map((item,index) => <Song key={index} info={item}/> )
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
