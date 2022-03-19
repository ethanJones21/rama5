import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import ModalImage from 'react-modal-image-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import RomperElHieloIcon from '../../images/icons/IconGroupWhite.svg';
// import Logo from '../../images/logo.svg';
import BackArrow from '../../images/icons/Back-Arrow-icon.svg';
import Map from '../Map';
import Marker from '../Map/Marker';
import { getInfoCommerce } from '../../store/app/commerceSlice';
import Loading from '../Loading';
import { MenuIcon } from '../../svg';
import ModalInvitation from '../ModalInvitation';
import JwtService from '../../services/jwtService';

const CommerceDetailPage = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const history = useHistory();

  const handleClickMenu = () => {
    history.push(`/qr-menu`);
  };

  const handleClickGame = (id) => {
    if (JwtService.getAccessToken()) {
      return history.push(`/login`);
    }
    return history.push(`/intro-game/${id}`);
  };

  const { commerce } = useSelector(({ commerces }) => commerces);

  useEffect(() => {
    // TODO TRAER DATOS DEL COMMERCIO CON ROUTEPARAMS.IDCOMMERCE
    // console.log(routeParams);
    const id = routeParams ? routeParams?.idCommerce : 0;
    dispatch(getInfoCommerce(id));
  }, [dispatch, routeParams]);

  const [tags, setTags] = useState([
    { name: '# Cocteles', selected: false },
    { name: '# Fabuloso', selected: false },
    { name: '# amor', selected: false },
    { name: '# familia', selected: true },
    { name: '# smile', selected: false },
    { name: '# rock', selected: false },
    { name: '# Parquedero', selected: false },
    { name: '# Zona Fumadores', selected: false },
    { name: '# Zona Fumadores', selected: true },
    { name: '# MusicaEnVivo', selected: false },
    { name: '# PagosNequi', selected: false },
    { name: '# Terraza', selected: false },
  ]);

  const map = (status) => {
    if (status === Status.LOADING) return <div>Loading</div>;
    if (status === Status.FAILURE) return <div>Error</div>;
    // TODO: VER SI DA LA DIRECCION EXACTA
    return (
      <Map zoom={10} center={{ lat: Number(commerce.latitude), lng: Number(commerce.longitude) }}>
        <Marker position={{ lat: Number(commerce.latitude), lng: Number(commerce.longitude) }} />
      </Map>
      // <Map zoom={10} center={{ lat: -34.397, lng: 150.644 }}>
      //   <Marker position={{ lat: -34.397, lng: 150.644 }} />
      // </Map>
    );
  };

  const apiKey = 'AIzaSyDCBhEjpLeS6xCLHgiDTI1yDOKspT34vpE';

  if (!commerce) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#051B34',
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center text-white p-12"
      style={{
        backgroundImage: `url(${commerce.banner.url})`,
      }}
    >
      <div
        className="w-full rounded-xl flex flex-col items-center p-12"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <header className="flex flex-col w-full py-3">
          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              className="w-40 flex items-center justify-center rounded-full p-8 -mt-20"
              style={{
                backgroundColor: '#051B34',
                border: '3px solid #2D4B67',
              }}
            >
              <img src={commerce.logo.url} alt="Imagen del logo" />
            </button>
          </div>
          <div className="w-full -mt-14">
            <Button
              sx={{ color: '#fff', textTransform: 'none' }}
              onClick={history.goBack}
              className="flex items-center gap-4 font-bold"
            >
              <img src={BackArrow} alt="Imagen del icono" />
              Atras
            </Button>
          </div>
        </header>
        <div className="contain text-center py-8">
          <h3 className="font-bold">{commerce.name}</h3>
          <p>{commerce.current_state}</p>
          <p>{commerce.attention_schedule}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-8">
        <h4 className="font-bold text-9">Fotos del lugar</h4>

        <div className="flex justify-center w-full mt-8">
          <div
            className="flex justify-start overflow-x-auto row-categories pb-2 w-full"
            style={{ display: '-webkit-box' }}
          >
            <div className="w-1/3 rounded-md overflow-hidden mr-6">
              <ModalImage
                small="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                large="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Hello World!"
              />
            </div>
            <div className="w-1/3 rounded-md overflow-hidden mr-6">
              <ModalImage
                small="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                large="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Hello World!"
              />
            </div>
            <div className="w-1/3 rounded-md overflow-hidden mr-6">
              <ModalImage
                small="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                large="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Hello World!"
              />
            </div>
            <div className="w-1/3 rounded-md overflow-hidden mr-6">
              <ModalImage
                small="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                large="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Hello World!"
              />
            </div>
            <div className="w-1/3 rounded-md overflow-hidden mr-6">
              <ModalImage
                small="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                large="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Hello World!"
              />
            </div>
          </div>
        </div>

        {/* <div className="w-full flex gap-3">
          
          <div className="w-1/3 rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="imagen del lugar"
            />
          </div>
        </div> */}

        <div className="flex items-center justify-between my-8 gap-2">
          <button
            onClick={handleClickMenu}
            type="button"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid #FF00B8' }}
            className="w-1/2 flex flex-col justify-center items-center rounded-xl px-4 py-10"
          >
            <MenuIcon />
            Menu
          </button>
          <button
            onClick={() => handleClickGame(commerce.id)}
            type="button"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid #00FFA3' }}
            className="w-1/2 flex flex-col justify-center items-center rounded-xl px-4 py-8"
          >
            <img src={RomperElHieloIcon} alt="Icono de Romper el hielo" />
            Romper el hielo
          </button>
        </div>

        <div className="tags p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <h4 className="font-bold text-9">Conexión con el sitio</h4>
          <div className="tags flex flex-wrap gap-4 mt-8">
            {tags.map(({ name, selected }, index) => {
              return (
                <div
                  className="tag py-2 rounded-full px-8 flex justify-center items-center"
                  style={{
                    minWidth: '72',
                    border: '1px solid #59718C',
                    backgroundColor: selected ? '#59718C' : 'transparent',
                  }}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col justify-between mt-8">
          <p>
            <span className="font-bold">Ubicación:</span> {commerce.address}
          </p>
          <div className="w-full mt-8 rounded-md overflow-hidden">
            <Wrapper apiKey={apiKey} render={map} />
          </div>
        </div>
      </div>
      <ModalInvitation />
    </div>
  );
};

export default CommerceDetailPage;

// wuay-342321
