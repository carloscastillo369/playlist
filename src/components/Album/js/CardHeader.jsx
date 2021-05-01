import '../css/CardHeader.css';

const CardHeader = ({imagen, nombre, getTracks}) => {
    return (
        <div className="card-header">
            <img className="card-header__imagen" src={imagen} alt=""/>
            <div className="card-header__detail">
                <h3 className="card-header__nombre">{nombre}</h3>
                <button className="btn-show" onClick={getTracks}>Mostrar</button>
            </div>
        </div>
    )
}

export default CardHeader
