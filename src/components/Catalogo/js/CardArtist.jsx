import { Link } from 'react-router-dom';

import '../css/CardMusic.css';

const CardArtist = ({artist}) => {
    return (
        <>
            <Link to={{
                pathname:"/album",
                state: { 
                    enlace : artist.tracklist,
                    imagen : artist.picture_medium,
                    nombre : artist.name
                }
            }}>
                <li className="card-music">
                    <img className="card-music__image" src={artist.picture_medium} alt=""/>
                    <h4 className="card-music__album">{artist.name}</h4>
                </li>
            </Link>
        </>

    )
};

export default CardArtist;