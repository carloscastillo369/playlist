import CardHeader from '../js/CardHeader';
import TableTracks from '../js/TableTracks';

import '../css/Album.css';

const Album = ({tracks, imagen, nombre, getTracks}) => {
    return (
        <div className="album-container">
            <CardHeader imagen={imagen} nombre={nombre} getTracks={getTracks}/>
            <TableTracks tracks={tracks}/>
        </div>
    )
}

export default Album
