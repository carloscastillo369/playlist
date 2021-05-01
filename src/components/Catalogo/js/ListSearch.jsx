import { useContext } from 'react';
import { ArtistContext } from '../../../context/ArtistContext';

import CardArtist from './CardArtist';
import CardAlbum from './CardAlbum';
import CardTrack from './CardTrack';

import '../css/ListMusic.css';

const ListSearch = () => {
    const {artists, albums, tracks, typeSelected} = useContext(ArtistContext);

    return (
        <div>
            <h1 className="title-resultado">Resultados</h1>
            {typeSelected === "artist"?
                <ul className="list-items">
                    {artists.map((artist, index) => (
                        <CardArtist key={index} artist={artist}/>
                    ))}
                </ul>

                :

             typeSelected === "album"?
                <ul className="list-items">
                    {albums.map((album, index) => (
                        <CardAlbum key={index} album={album}/>
                    ))}
                </ul>

                :

                <ul className="list-items">
                    {tracks.map((track, index) => (
                        <CardTrack key={index} track={track}/>
                    ))}
                </ul>
            }
        </div>
    )
};

export default ListSearch;
