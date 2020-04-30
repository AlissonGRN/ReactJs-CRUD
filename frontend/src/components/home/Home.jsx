import React from "react";
import Main from "../template/Main";

export default (props) => (
  <Main icon="home" title="Início" subtitle="Crud de usuários">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a construção de um sistema de cadastro
      desenvolvido em React!
    </p>
  </Main>
);
