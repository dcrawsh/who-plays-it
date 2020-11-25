import React from 'react'

export default function Lyric(props) {

    return (
        <div dangerouslySetInnerHTML={{__html: props.lyrics}} className='display-lyrics' >
        
        </div>
    )
}
