import React from 'react'

export default function Artist( {info} ) {
    return (
        <div>
        <li>{info.artists[0].name}</li>
        </div>
    )
}
