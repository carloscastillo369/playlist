import CatalogoHeader from './CatalogoHeader';
import ListSearch from './ListSearch';

import '../css/Catalogo.css';

const Catalogo= () => {
    return (
        <div className="catalogo-container">
            <CatalogoHeader/>
            <ListSearch/>
        </div>
    )
};

export default Catalogo;
