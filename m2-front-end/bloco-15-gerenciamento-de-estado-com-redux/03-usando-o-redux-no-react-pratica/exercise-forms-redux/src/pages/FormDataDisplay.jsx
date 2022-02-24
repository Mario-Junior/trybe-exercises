import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  onClickHandle = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    // Recupere as informações do seu estado criado no Redux
    const { userInfos } = this.props;
    const { nome, email, cpf, endereco, cidade, estado,
      curriculo, cargo, descricao } = userInfos;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {' '}
          {nome}
        </div>
        <div>
          Email:
          {' '}
          { email }
        </div>
        <div>
          CPF:
          {' '}
          { cpf }
        </div>
        <div>
          Endereço:
          {' '}
          { endereco }
        </div>
        <div>
          Cidade:
          {' '}
          { cidade }
        </div>
        <div>
          Estado:
          {' '}
          { estado }
        </div>
        <div>
          Currículo:
          {' '}
          { curriculo }
        </div>
        <div>
          Cargo:
          {' '}
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          {' '}
          { descricao }
        </div>
        <button
          type="button"
          onClick={ this.onClickHandle }
        >
          Retornar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfos: state.userReducer,
});

FormDataDisplay.propTypes = {
  userInfos: PropTypes.shape.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
