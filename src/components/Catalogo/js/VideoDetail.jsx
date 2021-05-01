import React from 'react'
import Artista from '../../../assets/artista-img.png';

import '../css/VideoDetail.css';

const VideoDetail = () => {
    return (
        <>
            <div className="video-detail-container">
                <div className="video-detail__image-container">
                    <img className="video-detail__image" src={Artista} alt=""/>
                    <i className="bi bi-play-fill"></i>
                    <i className="bi bi-pause-fill"></i>
                </div>
                <div className="video-detail__detail">
                    <h1 className="detail__name">Nombre Artista</h1>
                    <h2 className="detail__text">sub-texto</h2>
                    <h3 className="detail__description">Descripción asdfñlasjfjasfjñasjdflds dasfjaskfj safjlksajdf sfjdl</h3>
                    <div className="video-detail__buttons">
                        <button className="btn-play">Reproducir</button>
                        <button className="btn-follow">Seguir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDetail
