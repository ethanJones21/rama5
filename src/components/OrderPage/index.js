import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Hamburger from '../../images/hamburger.png';
import LlamarMeseroIcon from '../../images/icons/llamar-mesero.svg';

function OrderPage() {
  const [price, setPrice] = useState(35);
  const [count, setCount] = useState(1);
  const initPrice = 35;

  const blue = '#051B34';

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setPrice(initPrice * newCount);
  };
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setPrice(initPrice * newCount);
  };

  return (
    <>
      <div
        className="w-full h-full overflow-y-scroll"
        style={{
          backgroundColor: '#191F40',
        }}
      >
        <header className="flex flex-col items-center gap-4 p-20 sticky top-0">
          <div className="w-full flex items-center gap-40">
            <Link to="/home" className="flex justify-center">
              <img src="assets/icons/Back-Arrow.svg" alt="icon-back" className="inline-block w-8" />
            </Link>
            <h3 className="font-bold text-white text-13">Combo Hamburger</h3>
          </div>
          <div className="w-full">
            <Link
              to="/view-6"
              className="flex items-center justify-center gap-3 w-full rounded-full text-white text-center font-bold"
              style={{ color: '#01F2EB', textTransform: 'none' }}
            >
              Pedido: $73.000
              <ArrowRightAltIcon />
            </Link>
          </div>
        </header>
        <div className="w-full bg-white min-h-screen flex flex-col items-center gap-4 px-20 py-16">
          <img src={Hamburger} alt="Imagen del menu" />
          <div className="pt-5">
            <h5 className="font-bold text-11" style={{ color: blue }}>
              Descripcion
            </h5>
            <p>Carne de res de 160 grs, cebolla grille, queso, lechuga, tomate</p>
          </div>
          <div className="table w-full">
            <div className="product py-6">
              <div className="line-1 w-full flex justify-between py-4">
                <h5 className="font-bold text-11" style={{ color: blue }}>
                  Media
                </h5>
                <h5 className="font-bold text-11 mr-16" style={{ color: blue }}>
                  ${price}.000
                </h5>
              </div>
              <hr />
              <div className="flex justify-end py-4">
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button
                    sx={{ backgroundColor: blue }}
                    disabled={count === 1}
                    onClick={() => decrement()}
                    variant="contained"
                  >
                    -
                  </Button>
                  <span className="px-12 text-12 font-bold">{count}</span>
                  <Button
                    style={{ backgroundColor: blue }}
                    onClick={() => increment()}
                    variant="contained"
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="product py-6">
              <div className="line-1 w-full flex justify-between py-4">
                <h5 className="font-bold text-11" style={{ color: blue }}>
                  Botella
                </h5>
                <h5 className="font-bold text-11 mr-16" style={{ color: blue }}>
                  ${price}.000
                </h5>
              </div>
              <hr />
              <div className="flex justify-end py-4">
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button
                    sx={{ backgroundColor: blue }}
                    disabled={count === 1}
                    onClick={() => decrement()}
                    variant="contained"
                  >
                    -
                  </Button>
                  <span className="px-12 text-12 font-bold">{count}</span>
                  <Button
                    style={{ backgroundColor: blue }}
                    onClick={() => increment()}
                    variant="contained"
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
              <div className="fixed bottom-0 left-0 w-full p-20 flex flex-col gap-6 items-center mt-12 bg-white">
                <div className="w-full">
                  <button
                    type="button"
                    className="px-8 py-6 flex items-center justify-center gap-12 w-full rounded-full border-2 border-white text-white text-center font-bold"
                    style={{ backgroundColor: '#00CE84' }}
                  >
                    Transferir orden al mesero
                    <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
                  </button>
                </div>

                <div className="w-full">
                  <button
                    type="button"
                    className="px-8 py-6 flex items-center justify-center gap-4 w-full rounded-full text-white text-center font-bold"
                    style={{ backgroundColor: blue }}
                  >
                    Llamar al mesero
                    <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
                  </button>
                </div>
                <Button
                  style={{ color: blue, fontWeight: 'bold', fontSize: 18, textTransform: 'none' }}
                  variant="text"
                >
                  Seguir pidiendo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
