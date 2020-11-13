import React from 'react'

export default function SearchForm(props) {
    return (
        <form>
            <input type="text" name="searchInput" value={props.searchInput} onChange={props.handleInput}/>
            <input type="submit"></input>
        </form>
    )
}


