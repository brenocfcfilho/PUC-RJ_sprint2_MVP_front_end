import React from 'react'

import { Helmet } from 'react-helmet'

import './cidade1.css'

const Cidade1 = (props) => {
  return (
    <div className="cidade1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="cidade1-cidade1">
        <div className="cidade1-cidade11">
          <div className="cidade1-borda">
            <img
              src="/external/retngulointerno2027-lmvh-800h.png"
              alt="Retngulointerno2027"
              className="cidade1-retngulointerno"
            />
          </div>
          <img
            src="/external/cidade1imagem2027-f3xn-600h.png"
            alt="Cidade1Imagem2027"
            className="cidade1-cidade-imagem"
          />
        </div>
        <div className="cidade1-cidade-voltar">
          <div className="cidade1-maskgroup">
            <div className="cidade1-group">
              <img
                src="/external/vector2031-slvu.svg"
                alt="Vector2031"
                className="cidade1-vector"
              />
            </div>
            <img
              src="/external/vector2031-l1b.svg"
              alt="Vector2031"
              className="cidade1-vector1"
            />
          </div>
        </div>
        <div className="cidade1-cidade-ttulo">
          <img
            src="/external/retngulointerno2028-jzln-200h.png"
            alt="Retngulointerno2028"
            className="cidade1-retngulointerno1"
          />
          <span className="cidade1-text">
            <span>Você escolheu a cidade de Ganaris!</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cidade1
