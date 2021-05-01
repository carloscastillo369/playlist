import '../css/TableTracks.css';

const TableTracks = ({tracks}) => {
    return (
        <div className="table-tracks">
            <div className="row">
                <h3 className="index">#</h3>
                <h3 className="title">Canción</h3>
                <h3 className="duration">
                    <i className="bi bi-clock-fill"></i>
                </h3>
            </div>
            <ul>
                {tracks.map((track,index) => (
                    <li key={index}>
                        <div className="row">
                            <h3 className="index">{index + 1}</h3>
                            <h3 className="title">{track.title}</h3>
                            <h3 className="duration">{Math.floor(track.duration / 60)}:{(track.duration % 60) < 10? (track.duration % 60) + '0' : (track.duration % 60)} </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableTracks
