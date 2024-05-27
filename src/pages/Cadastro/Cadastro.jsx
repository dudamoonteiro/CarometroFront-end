
import './Cadastro.css';
import { Link } from 'react-router-dom';
import BasicExample2 from '../../Componentes/Navba2';

function Cadastro() {
  return (
    <div className="pai-cadastro">
      <BasicExample2></BasicExample2>
      <div className="caixa">
        <form action="" className="formCadastro">
          <div className="Login">
            <h1>CADASTRO</h1>
            <div className="formulario">  
              <label htmlFor="">Nome:</label>
              <input type="text" placeholder="Nome:" />
              <br />
              <label htmlFor="">Email:</label>
              <input type="text" placeholder="Email:" /><br />
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder="Senha:" /><br />
              <label htmlFor="">Confirmar senha:</label>
              <input type="password" placeholder="Confirmar senha:" /><br /> 
  
              
              <div className='entraBotao'>
                <Link button className='buttonEntrar' to="/PaginaInicial">Entrar</Link>
                
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro; 