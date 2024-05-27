
import './PaginaInicial.css';
import BasicExample from '../../Componentes/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import fundoVermelho from "../CarouselImage/fundoVermelho.avif"
import { Link } from 'react-router-dom';

function PaginaInicial() {
  return (
    <div className='pai-pagina'>
      <BasicExample></BasicExample>
      {/* <h1>Escolha sua turmas</h1> */}
      <div className='começo'>
        <Carousel>
          <Carousel.Item>
            <img src={fundoVermelho} alt="" />
            <fundoAzul />
            <Link to={'/turmas2'}>
            <Carousel.Caption>
              <h3>IDEV1</h3>
              <p>
                Desenvolvimento de Sistemas - 2022.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <img src={fundoVermelho} alt="" />
            <fundoAzul />
            <Link to={'/turmas'}>
            <Carousel.Caption>
              <h3>IDEV2</h3>
              <p>
                Desenvolvimento de Sistemas - 2023.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <fundoAzul />
            <Link to={'/turmas2'}>
            <img src={fundoVermelho} alt="" />
            <Carousel.Caption>
              <h3>IDEV3</h3>
              <p>
                Desenvolvimento de Sistemas - 2024.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <img src={fundoVermelho} alt="" />
            <fundoAzul />
            <Link to={'/turmas4'}>
            <Carousel.Caption>
              <h3>ELE/MEC1</h3>
              <p>
                Eletroeletrônica e Mecânica - 2022.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <img src={fundoVermelho} alt="" />
            <fundoAzul />
            <Link to={'/turmas5'}>
            <Carousel.Caption>
              <h3>ELE/MEC2</h3>
              <p>
                Eletroeletrônica e Mecânica - 2023.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <img src={fundoVermelho} alt="" />
            <fundoAzul />
            <Link to={'/turmas5'}>
            <Carousel.Caption>
              <h3>ELE/MEC3</h3>
              <p>
                Eletroeletrônica e Mecânica - 2024.
              </p>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

        </Carousel>

      </div>

    </div>

  );
}

export default PaginaInicial;