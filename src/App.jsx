import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './components/Menu/Menu';
import AlbumPage from './views/AlbumPage';
import CatalogoPage from './views/CatalogoPage';

import { ArtistProvider } from './context/ArtistContext';

import './styles/App.css';

const App = () => {
    return (
        <div className="app-container">
            <Menu/>
            <ArtistProvider>
                <Router>
                    <Switch>
                        <Route path="/album" component={AlbumPage}/>
                        <Route path="/" component={CatalogoPage}/>
                    </Switch>
                </Router>
            </ArtistProvider>
        </div>
    )
};

export default App;
