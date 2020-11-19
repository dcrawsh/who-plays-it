import React from 'react'
import Song from './Song'

export default function Results(props) {

    const { results } = props;

    
    
    const addResults = () => {
       return results.tracks.items.map((item,index) => <Song setLyrics={props.setLyrics} key={index} info={item}/> )
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
