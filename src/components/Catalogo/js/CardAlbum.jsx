import '../css/CardMusic.css';

const CardArtist = ({album}) => {
    return (
        <>
            <li className="card-music">
                <img className="card-music__image" src={album.artist.picture_medium} alt=""/>
                <h4 className="card-music__album">{album.artist.name}</h4>
                <span className="card-music__album">{album.title}</span>
            </li>
        </>

    )
};

export default CardArtist;