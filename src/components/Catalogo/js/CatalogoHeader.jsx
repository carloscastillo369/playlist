import { useContext } from 'react';
import { ArtistContext } from '../../../context/ArtistContext';

import '../css/CatalogoHeader.css';

const CatalogoHeader = () => {
    const {dataSearch, getSearch, typeSelected, handleChange, handleSelect} = useContext(ArtistContext)

    return (
        <div className="catalogo-header">
            <form className="form" onSubmit={(e) => getSearch(e, dataSearch, typeSelected)}>
                <select className="form-select" onChange={(e) => handleSelect(e)}>
                    <option className="form-select-option" value="artist">Artista</option>
                    <option className="form-select-option" value="album">Album</option>
                    <option className="form-select-option" value="track">Canción</option>
                </select>
                <div className="form-input-container">
                    <input 
                        className="form-input"
                        type="text"
                        placeholder="Buscar"
                        value={dataSearch}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button className="btn-search" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <h2 className="user-name">
                <i className="bi bi-person-fill"></i>
                Carlos C.
            </h2>
        </div>
    )
};

export default CatalogoHeader;
