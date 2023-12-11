import React from 'react';
import'./profile.css';

const ProfilePage = ({ onGoBack }) => {
  const userProfile = {
    nome: 'Breno Carnevalli',
    dataNascimento: '21 de julho de 1990',
    cpf: '000.000.000-00',
    endereco: 'Alemeda Central, 1234, Cidade, Estado'
  };

  return (
    <div className="profile-page">
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {userProfile.nome}</p>
      <p><strong>Data de Nascimento:</strong> {userProfile.dataNascimento}</p>
      <p><strong>CPF:</strong> {userProfile.cpf}</p>
      <p><strong>Endereço:</strong> {userProfile.endereco}</p>
      <button onClick={onGoBack}>Página Principal</button>
    </div>
  );
};

export default ProfilePage;
