import React from 'react'

import { Helmet } from 'react-helmet'

import './tela-inicial-mapa.css'

const TelaInicialMapa = (props) => {
  return (
    <div className="tela-inicial-mapa-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="tela-inicial-mapa-tela-inicial-mapa">
        <img
          src="/external/mapaimagem2029-84n-1500w.png"
          alt="MapaImagem2029"
          className="tela-inicial-mapa-mapa-imagem"
        />
        <div className="tela-inicial-mapa-cidade2cone">
          <span className="tela-inicial-mapa-text">
            <span>Tornarim</span>
          </span>
          <img
            src="/external/cidade2coneimagem2029-6ic-200h.png"
            alt="Cidade2coneImagem2029"
            className="tela-inicial-mapa-cidade2cone-imagem"
          />
        </div>
        <div className="tela-inicial-mapa-cidade1cone">
          <span className="tela-inicial-mapa-text2">
            <span>Garanis</span>
          </span>
          <img
            src="/external/cidade1coneimagem2029-r03i-200h.png"
            alt="Cidade1coneImagem2029"
            className="tela-inicial-mapa-cidade1cone-imagem"
          />
        </div>
        <div className="tela-inicial-mapa-ttulo">
          <img
            src="/external/retngulointerno2029-7q4-200h.png"
            alt="Retngulointerno2029"
            className="tela-inicial-mapa-retngulointerno"
          />
          <span className="tela-inicial-mapa-text4">
            <span>
              Você acabou de chegar em Terra Incognita!
              Escolha sua cidade para começar sua aventura
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TelaInicialMapa
