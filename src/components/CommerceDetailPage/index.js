import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BgHojas from '../../images/background-hojas.svg';
import RomperElHieloIcon from '../../images/icons/IconGroupWhite.svg';
import VolverAlDirectorioIcon from '../../images/icons/IconoVolverDirectorio.svg';
import Logo from '../../images/logo.svg';
import BackArrow from '../../images/icons/Back-Arrow-icon.svg';

const CommerceDetailPage = () => {
  const routeParams = useParams();

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

  useEffect(() => {
    // console.log(routeParams);
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center text-white p-12"
      style={{
        backgroundImage: `url(${BgHojas})`,
      }}
    >
      <div
        className="w-full rounded-xl flex flex-col items-center p-12"
        style={{ 'background-color': 'rgba(0, 0, 0, 0.4)' }}
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
              <img src={Logo} alt="Imagen del logo" />
            </button>
          </div>
          <div className="w-full -mt-14">
            <div className="flex items-center gap-4 font-bold">
              <img src={BackArrow} alt="Imagen del icono" />
              Atras
            </div>
          </div>
        </header>
        <div className="contain text-center py-8">
          <h3 className="font-bold">Nombre del bar</h3>
          <p>Hoy hasta el amanecer</p>
          <p>6:30 pm - 3:00 pm</p>
        </div>
        <footer className="w-full flex items-center justify-between">
          <p>Calle 147 - 45 25</p>
          <div className="buttons w-2/4 sm:3/5 flex items-center gap-3">
            <button
              type="button"
              className="rounded-full py-2 px-3 sm:px-5 w-1/2"
              style={{ 'background-color': '#59718c' }}
            >
              waze
            </button>
            <button
              type="button"
              className="rounded-full py-2 px-3 sm:px-5 w-1/2"
              style={{ 'background-color': '#59718c' }}
            >
              G-Maps
            </button>
          </div>
        </footer>
      </div>

      <div className="flex flex-col gap-4 my-8">
        <h4 className="font-bold text-9">Fotos del lugar</h4>
        <div className="w-full flex gap-3">
          <div className="w-1/3 rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="imagen del lugar"
            />
          </div>
          <div className="w-1/3 rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="imagen del lugar"
            />
          </div>
          <div className="w-1/3 rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="imagen del lugar"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 my-8">
          <button
            type="button"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid #BDFF01' }}
            className="w-full flex flex-col justify-center items-center rounded-xl px-4 py-8"
          >
            <img src={RomperElHieloIcon} alt="Icono de Romper el hielo" />
            Romper el hielo
          </button>
          <button
            type="button"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid #FF0550' }}
            className="w-full flex flex-col justify-center items-center rounded-xl px-4 py-8"
          >
            <img src={VolverAlDirectorioIcon} alt="Icono de Volver al directorio" />
            Volver al directorio
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
      </div>
    </div>
  );
};

export default CommerceDetailPage;
