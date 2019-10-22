import React from 'react';
​
const DisplayList = ({artistList}) => {
    return (
    <div>
        {artistList.map((artist) => (
            <div className = 'artist-container' key = {artist.name}>
                <img className = 'artist-img' src = {artist.artistImg} alt = {artist.name} />
                <div className = 'artist-info'>
                    <h3>{artist.name}</h3>
                    <p>{artist.genre}</p>
                </div>
            </div>
        ))}
    </div>
    )
}
​
export default HOC;