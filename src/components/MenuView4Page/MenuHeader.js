import VistaCuatroIcon from '../../images/icono-vista-4.svg';
import LogoMenuIcon from '../../images/icons/Logo-Menu-White.svg';
// import { Link, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getInfoCommerce } from '../../store/app/commerceSlice';

const MenuHeader = () => {
  // const dispatch = useDispatch();
  // const routeParams = useParams();

  // const { commerce } = useSelector(({ commerces }) => commerces);
  // const [country, setCountry] = useState('');

  // useEffect(() => {
  //   // TODO TRAER DATOS DEL COMMERCIO CON ROUTEPARAMS.IDCOMMERCE
  //   // console.log(routeParams);
  //   const id = routeParams ? routeParams?.idCommerce : 0;
  //   dispatch(getInfoCommerce(id));
  // }, [dispatch, routeParams]);

  // useEffect(() => {
  //   if (commerce) {
  //     const dataCountry = commerce?.city?.country?.country;
  //     setCountry(dataCountry);
  //   }
  // }, [dispatch, commerce]);
  return (
    <div className="gap-32 bg-transparent relative">
      <div className="flex flex-col items-start gap-4" style={{ background: 'rgba(0,0,0,.6)' }}>
        <div className="w-full px-12 py-8">
          <div className="flex items-end justify-between w-full">
            <img
              src={VistaCuatroIcon}
              alt="restaurante-logo"
              className="w-34 h-34 border-4 border-white rounded-full"
            />
            <p className="text-14 font-bold text-white text-center">
              Menu <br /> Pedido: $70.000
            </p>
            <div
              className="flex items-center justify-around font-bold text-white text-12 rounded-sm"
              style={{ width: 68.45, height: 30, backgroundColor: '#FF004E' }}
            >
              <img width="22" src={LogoMenuIcon} alt="Logo de menu" />
              <span>3</span>
            </div>
            {/* <img
              src={commerce?.logo?.url}
              alt="restaurante-logo"
              className="w-44 h-44 inline-block border-4 border-white rounded-full shadow-lg"
            /> */}
          </div>
          {/* <div className="text-center text-white pb-8 mt-28"> */}
          {/* ----> <h1 className="font-600 text-12">{commerce?.name}</h1> */}
          {/* ----> <p>{commerce?.attention_schedule}</p> */}
          {/* <p>{commerce?.email}</p> */}
          {/* <p>{commerce?.phone}</p> */}
          {/* ----> <p>{commerce?.address}</p> */}
          {/* <p> */}
          {/*  {commerce?.city?.city} - {country} */}
          {/* </p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
