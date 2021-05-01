import '../css/CardMusic.css';

const CardTrack = ({track}) => {
    return (
        <>
            <li className="card-music">
                <img className="card-music__image" src={track.artist.picture_medium} alt=""/>
                <h4 className="card-music__album">{track.title}</h4>
                <h5 className="card-music__artist">{track.artist.name}</h5>
                <audio src={track.preview}></audio>
            </li>
        </>

    )
};

export default CardTrack;
