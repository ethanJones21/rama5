import { Button, ButtonGroup, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LlamarMeseroIcon from '../../images/icons/llamar-mesero.svg';

function ConfirmOrderPage() {
  const [price, setPrice] = useState([35, 50, 100]);
  // no funciona asi pensar como hacerlo
  const [count, setCount] = useState([1, 1, 1]);
  const initPrice = [...price];

  const blue = '#051B34';
  const increment = (i) => {
    // const newCount = [];
    // newCount[i] = count[i] + 1;
    // setCount(newCount[i]);
    // setPrice(initPrice[i] * newCount[i]);
  };
  const decrement = (i) => {
    // const newCount = [];
    // newCount[i] = count[i] - 1;
    // setCount(newCount);
    // setPrice(initPrice[i] * newCount);
  };

  const [orders, setOrders] = useState([
    {
      comida: [
        {
          product: 'Ceviche',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia veritatis beatae reprehenderit distinctio officiis nam asperiores, maiores dolorem, in aliquid animi excepturi perferendis eligendi perspiciatis rerum amet dolores voluptate.',
          price: 50,
          count: 1,
        },
        // {
        //   product: 'Chicharron',
        //   description:
        //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia veritatis beatae reprehenderit distinctio officiis nam asperiores, maiores dolorem, in aliquid animi excepturi perferendis eligendi perspiciatis rerum amet dolores voluptate.',
        //   price: 80,
        //   count: 1,
        // },
      ],
      bebidas: [
        {
          product: 'Cerveza importada',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia veritatis beatae reprehenderit distinctio officiis nam asperiores, maiores dolorem, in aliquid animi excepturi perferendis eligendi perspiciatis rerum amet dolores voluptate.',
          price: 100,
          count: 1,
        },
        // {
        //   product: 'Cerveza importada',
        //   description:
        //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia veritatis beatae reprehenderit distinctio officiis nam asperiores, maiores dolorem, in aliquid animi excepturi perferendis eligendi perspiciatis rerum amet dolores voluptate.',
        //   price: 100,
        //   count: 1,
        // },
      ],
    },
  ]);

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start text-white"
      style={{ backgroundColor: '#F4F5FA' }}
    >
      <header
        className="flex items-center justify-between p-20 sticky top-0"
        style={{
          backgroundColor: blue,
        }}
      >
        <Link to="/home" className="flex justify-center">
          <img src="assets/icons/Back-Arrow.svg" alt="icon-back" className="inline-block w-8" />
        </Link>
        <h3 className="font-bold text-white text-12">Confirmar orden</h3>
        <span />
      </header>

      <div
        className="flex flex-col gap-4 text-black p-20 min-h-screen mb-52"
        style={{ backgroundColor: '#F4F5FA' }}
      >
        {orders.map((order) => {
          const tags = Object.keys(order); // [comidas, bebidas]
          return tags.map((tag, i) => {
            return (
              <div className="product" key={i}>
                <h3 className="font-bold text-12 text-black">
                  {tag}: {order[tag].length} und
                </h3>
                {order[tag].map(({ product, description, price, count }, i) => (
                  <div className="card bg-white rounded-sm p-8 mt-4">
                    <div className="content flex items-start justify-between">
                      <img
                        className="w-40 h-40 rounded-4"
                        src="https://images.pexels.com/photos/9406884/pexels-photo-9406884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                      <div className="text w-3/4 max-w-full" style={{ maxHeight: 40 }}>
                        <h4 className="font-bold text-12 truncate" style={{ color: blue }}>
                          {product}
                        </h4>
                        <p className="truncate">{description}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex gap-8 items-center justify-end py-4">
                      <span className="font-bold text-12" style={{ color: blue }}>
                        $100.000
                      </span>
                      <div>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                          <Button
                            sx={{ backgroundColor: blue }}
                            disabled={count === 1}
                            onClick={() => decrement()}
                            variant="contained"
                          >
                            -
                          </Button>
                          <span className="px-12 text-12 font-bold">1</span>
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
                  </div>
                ))}
              </div>
            );
          });
        })}
      </div>

      <div className="fixed bottom-0 left-0 px-20 p-8 w-full bg-white flex flex-col gap-3 text-black">
        <TextField
          style={{ backgroundColor: '#F5F5F5' }}
          placeholder="Comentarios para tu pedido"
          multiline
        />
        <div className="w-full">
          <button
            type="button"
            className="px-8 py-6 flex items-center justify-center gap-3 w-full rounded-full text-white text-center text-12 font-bold bg-transparent"
            style={{ color: '#FE014E' }}
          >
            Tu cuenta + Iva: $73.000
            <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
          </button>
        </div>

        <div className="buttons flex gap-4">
          <button
            type="button"
            className="p-8 flex items-center justify-center gap-3 w-full rounded-md text-white text-center font-bold text-8"
            style={{ background: '#051B34' }}
          >
            Llamar al mesero
            <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
          </button>
          <button
            type="button"
            className="px-8 py-6 flex items-center justify-center gap-12 w-full rounded-md text-white text-center font-bold text-8"
            style={{ backgroundColor: '#00CE84' }}
          >
            Transferir orden al mesero
            <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrderPage;
