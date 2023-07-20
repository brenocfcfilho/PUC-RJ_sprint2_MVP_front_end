import React from 'react'

import { Helmet } from 'react-helmet'

import './cidade2.css'

const Cidade2 = (props) => {
  return (
    <div className="cidade2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="cidade2-cidade2">
        <div className="cidade2-cidade21">
          <div className="cidade2-borda">
            <img
              src="/external/retngulointerno2026-cves-800h.png"
              alt="Retngulointerno2026"
              className="cidade2-retngulointerno"
            />
          </div>
          <img
            src="/external/cidade2imagem2026-clg-600h.png"
            alt="Cidade2Imagem2026"
            className="cidade2-cidade-imagem"
          />
        </div>
        <div className="cidade2-cidade-voltar">
          <div className="cidade2-maskgroup">
            <div className="cidade2-group">
              <img
                src="/external/vector2030-9bj8.svg"
                alt="Vector2030"
                className="cidade2-vector"
              />
            </div>
            <img
              src="/external/vector2030-tgbm.svg"
              alt="Vector2030"
              className="cidade2-vector1"
            />
          </div>
        </div>
        <div className="cidade2-cidade-ttulo">
          <img
            src="/external/retngulointerno2027-9rmi-200h.png"
            alt="Retngulointerno2027"
            className="cidade2-retngulointerno1"
          />
          <span className="cidade2-text">
            <span>Você escolheu a cidade de Tornarim!</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cidade2
