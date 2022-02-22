import { useState } from 'react';
import CoffeeIcon from '../images/coffee.svg';
import BeerIcon from '../images/beer.svg';
import CocktailIcon from '../images/cocktail.svg';
import FoodIcon from '../images/food.svg';
import CoverBlack from '../images/CoverFullBlacksvg.svg';
import SocialIcon from '../images/social.svg';
import Logo from '../images/logo.svg';
import NameCompanyIcon from '../images/name-company.svg';
import CarouselTags from './CarouselTags';
import Search from './Search';

const Home = () => {
  const [tags, setTags] = useState([
    'Todos',
    '# Cocteles',
    '# Comida',
    '# Rock',
    '# Discotecas',
    '# Restaurantes',
    '# Comida',
    '# Bares',
    '# Discotecas',
    '# Rock',
    '# Comida',
    '# Bares',
  ]);

  const [sites, setSites] = useState([
    {
      name: 'Nombre del sitio',
      category: 'Categoria',
      tags: ['#Miedos', '#Grupos', '#Solteros'],
      social: 'Interatuando 2000',
    },
    {
      name: 'Nombre del sitio2',
      category: 'Categoria',
      tags: ['#Tranki', '#Grupos', '#Solteros'],
      social: 'Interatuando 2000',
    },
    {
      name: 'Nombre del sitio3',
      category: 'Categoria',
      tags: ['#tag1', '#tag2', '#tag3'],
      social: 'Interatuando 2000',
    },
    {
      name: 'Nombre del sitio4',
      category: 'Categoria',
      tags: ['#tag1', '#tag2', '#tag3'],
      social: 'Interatuando 2000',
    },
  ]);

  // const dispatch = useDispatch();

  // const routeParams = useParams();

  // const { commerce } = useSelector(({ commerces }) => commerces);

  // useEffect(() => {
  // TODO TRAER DATOS DEL COMMERCIO CON ROUTEPARAMS.IDCOMMERCE
  // const id = routeParams.idCommerce ? parseInt(routeParams?.idCommerce, 10) : 0;
  // localStorage.setItem('@Menu', id);
  // dispatch(getInfoCommerce(id));
  // }, [dispatch, routeParams]);

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url(${CoverBlack})`,
      }}
    >
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full">
          <Search />
        </div>

        <div className="text-center">
          <img src={NameCompanyIcon} alt="Nombre de la empresa" />
        </div>
        <p className="text-9 font-400">¿Qué quieres hacer hoy Julian?</p>

        <div className="flex justify-around items-center w-3/4 md:w-1/4 mb-8 cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-purple w-full">
              <img src={CocktailIcon} alt="tender-logo" />
            </div>
            <span>Disco</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-cyan w-full">
              <img src={FoodIcon} alt="tender-logo" />
            </div>
            <span>Comida</span>
          </div>

          <div className="flex flex-col items-center" style={{ minWidth: 55 }}>
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-yellow w-full">
              <img src={BeerIcon} alt="tender-logo" />
            </div>
            <span>Bares</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-pink w-full">
              <img src={CoffeeIcon} alt="tender-logo" />
            </div>
            <span>Cafes</span>
          </div>
        </div>
        <div
          className="w-full pl-2 h-34 flex flex-col items-center"
          style={{ backgroundColor: '#21354F' }}
        >
          <div className="w-full sm:w-1/2 pl-8 mt-5 h-32" style={{ maxWidth: '100%' }}>
            <CarouselTags tags={tags} />
          </div>

          <div className="max-w-screen-xl px-10 py-5 mx-auto sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {sites.map(({ name, category, tags, social }, index) => {
                return (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                      <a>
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="Sunset in the mountains"
                        />
                        <div
                          className="absolute top-0 right-0 w-full h-full"
                          style={{ 'box-shadow': '0px -112px 48px -9px rgba(0,0,0,0.75) inset' }}
                        />
                      </a>
                      <a href="#!">
                        <div className="absolute bottom-0 left-0 px-8 py-6 text-white text-sm w-full">
                          <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                              <h3 className="font-bold">{name}</h3>
                              <h4 className="text-12">{category}</h4>
                              <div className="flex gap-1 items-center">
                                {tags.map((tag, i) => {
                                  return (
                                    <span key={i} className="text-9 sm:text-10">
                                      {tag}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <img src={SocialIcon} alt="Icono juego social" />
                              <span className="text-6">{social}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}

              <h4 className="text-center font-bold text-14 my-8">Explora otros sitios</h4>

              {sites.map(({ name, category, tags, social }, index) => {
                return (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                      <a>
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="Sunset in the mountains"
                        />
                        <div
                          className="absolute top-0 right-0 w-full h-full"
                          style={{ 'box-shadow': '0px -112px 48px -9px rgba(0,0,0,0.75) inset' }}
                        />
                      </a>
                      <a href="#!">
                        <div className="absolute bottom-0 left-0 px-8 py-6 text-white text-sm w-full">
                          <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                              <h3 className="font-bold">{name}</h3>
                              <h4 className="text-12">{category}</h4>
                              <div className="flex gap-1 items-center">
                                {tags.map((tag, i) => {
                                  return (
                                    <span key={i} className="text-9 sm:text-10">
                                      {tag}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <img src={SocialIcon} alt="Icono juego social" />
                              <span className="text-6">{social}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed" style={{ right: '1.7rem', bottom: '8rem' }}>
        <button
          type="button"
          className="rounded-full p-5 border-4 border-white"
          style={{ backgroundColor: '#051B34' }}
        >
          <img src={Logo} alt="Imagen del usuario" />
        </button>
      </div>
    </div>
  );
};

export default Home;
