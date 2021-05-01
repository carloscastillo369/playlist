import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';

import Album from '../components/Album/js/Album';

const AlbumPage = () => {
    const [tracks, setTracks] = useState([])
    const location = useLocation();
    const enlace = location.state.enlace;
    const jsonpLink = enlace + '&output=jsonp'
    const imagen = location.state.imagen;
    const nombre = location.state.nombre;

    const getTracks = async () => {
        const data = await fetchJsonp(jsonpLink)
        const listSearch = await data.json('')
        setTracks(listSearch.data)
    };

    return (
        <>
            <Album tracks={tracks} imagen={imagen} nombre={nombre} getTracks={getTracks}/>
        </>
    )
};

export default AlbumPage;
