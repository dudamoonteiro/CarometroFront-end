
import './Aluno.css';
import BasicExample from '../../Componentes/Navbar';

function Aluno() {
  return (
    <div className='pai-aluno'>
      <BasicExample></BasicExample>
      <div className="infaluno">
        <div className="caixa-aluno">
          <img className="aluna" src="https://cdn-icons-png.flaticon.com/512/1373/1373255.png" alt="" width="350px" />
        </div>
        <div className="nome">
          <h1>ALEXANDRE MAGALHÃES DEBOLLETA</h1> <br />
          <div className='info'>
            <h5 className="NM">EMAIL: alexandre@gmail.com</h5>
            <h5 className="NP">CPF: 111111111</h5>
            <h5 className="TM">DATA DE NASCIMENTO: 18/07/2007</h5>
            <h5 className="TM">CELULAR: (14) 998123456</h5>
            <h5 className="TM">CEP: 17650-000</h5>
            <h5 className="TM">LOGRADOURO: Rua das Flores</h5>
            <h5 className="TM">BAIRRO: Centro</h5>
            <h5 className="TM">CIDADE: Pompéia</h5>
            <h5 className="TM">ESTADO: SP</h5>
          </div>
        </div>

      </div>
      <div className="ocorrencias">
        <input className="OC" type="text" placeholder="Ocorrências:" />
      </div>
    </div>
  );
}

export default Aluno;