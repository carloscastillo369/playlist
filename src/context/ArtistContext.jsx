import React, { useState } from 'react';
import fetchJsonp from 'fetch-jsonp';

export const ArtistContext = React.createContext();

export const ArtistProvider = ({children}) => {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [dataSearch, setDataSearch] = useState('');
    const [typeSelected, setTypeSelected] = useState('artist');

    const handleSelect = (e) => {
        e.preventDefault();
        setTypeSelected(e.target.value);
    }

    const getSearch = async (e, dataSearch, type) => {
        e.preventDefault();
        const data = await fetchJsonp(`https://api.deezer.com/search/${type}/?q=${dataSearch}&index=0&limit=10&output=jsonp`)
        const listSearch = await data.json('')
        if(type === "artist"){
            setArtists(listSearch.data)
        }
        if(type === "album"){
            setAlbums(listSearch.data)
        }
        if(type === "track"){
            setTracks(listSearch.data)
        }
        setDataSearch('')
    };

    const handleChange = (e) => {
        e.preventDefault();
        setDataSearch(e.target.value);
    };

    return (
        <ArtistContext.Provider
        value = {{
            artists,
            albums,
            tracks,
            dataSearch,
            typeSelected,
            getSearch,
            handleChange,
            handleSelect
        }}>
            {children}
        </ArtistContext.Provider>
    )
};