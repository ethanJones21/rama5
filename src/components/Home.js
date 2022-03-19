import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import CoffeeIcon from '../images/coffee.svg';
import BeerIcon from '../images/beer.svg';
import CocktailIcon from '../images/cocktail.svg';
import FoodIcon from '../images/food.svg';
import CoverBlack from '../images/CoverFullBlacksvg.svg';
import SocialIcon from '../images/social.svg';
import Logo from '../images/logo.svg';
import NameCompanyIcon from '../images/name-company.svg';
import Search from './Search';
import { getCommercesWithoutUser, getTypes } from '../store/app/commerceSlice';
import ModalInvitation from './ModalInvitation';
import { getInterest, selectInterests } from '../store/app/interestSlice';
import Loading from './Loading';
import JwtService from '../services/jwtService';
import { getProfileGroup } from '../store/app/groupUserSlice';
import ImageGroup from '../images/GrupoExample.svg';

const Home = () => {
  const [allTypes, setAllTypes] = useState([]);
  const [allInterests, setAllInterests] = useState([]);
  const [sites, setSites] = useState([]);
  const { profileGroup } = useSelector(({ groupUser }) => groupUser);

  // selected
  const [selectedTypes, setSelectedTypes] = useState([false, false, false, false]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  // filters
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [interest, setInterest] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const { commercesAround, types } = useSelector(({ commerces }) => commerces);
  const interestsAround = useSelector(selectInterests);

  const handleFilterInterests = (interestId) => {
    const newSelect = [...selectedInterests];
    newSelect.forEach((sel, i, arr) => {
      arr[i] = false;
    });
    newSelect[interestId - 1] = true;
    console.log(newSelect);
    setSelectedInterests([...newSelect]);
    dispatch(getCommercesWithoutUser({ search, type, interest: interestId }));
  };

  const handleFilterTypes = (typeId) => {
    const newSelect = [...selectedTypes];
    newSelect.forEach((sel, i, arr) => {
      arr[i] = false;
    });
    newSelect[typeId - 1] = true;
    setSelectedTypes([...newSelect]);
    dispatch(getCommercesWithoutUser({ search, type: typeId, interest }));
  };

  useEffect(() => {
    dispatch(getProfileGroup());
  }, [dispatch]);

  useEffect(() => {
    if (!commercesAround && !types) {
      dispatch(getInterest());
      dispatch(getCommercesWithoutUser({ search, type, interest }));
      dispatch(getTypes());
    }
    setSites(commercesAround);
    setAllInterests(interestsAround);
    setAllTypes(types);
    setSelectedInterests(new Array(interestsAround.length).fill(false));
  }, [dispatch, interestsAround, commercesAround, search, type, types, interest]);

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url(${CoverBlack})`,
      }}
    >
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full">
          <Search type={type} interest={interest} />
        </div>

        <div className="text-center">
          <img src={NameCompanyIcon} alt="Nombre de la empresa" />
        </div>
        <p className="text-9 font-400">¿Qué quieres hacer hoy Julian?</p>

        <div className="flex justify-around items-center w-3/4 md:w-1/4 mb-8 cursor-pointer">
          <Button
            sx={{ textTransform: 'none', color: selectedTypes[0] ? '#EE27FF' : '#fff' }}
            onClick={() => handleFilterTypes(allTypes[0].id)}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-purple w-full">
              <img src={CocktailIcon} alt="tender-logo" />
            </div>
            {allTypes && allTypes.length > 0 && <span>{allTypes[0].name}</span>}
          </Button>

          <Button
            onClick={() => handleFilterTypes(allTypes[1].id)}
            sx={{ textTransform: 'none', color: selectedTypes[1] ? '#01F2EB' : '#fff' }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-cyan w-full">
              <img src={FoodIcon} alt="tender-logo" />
            </div>
            {allTypes && allTypes.length > 0 && <span>{allTypes[1].name}</span>}
          </Button>

          <Button
            onClick={() => handleFilterTypes(allTypes[2].id)}
            sx={{ textTransform: 'none', color: selectedTypes[2] ? '#F1CB00' : '#fff' }}
            className="flex flex-col items-center"
            style={{ minWidth: 55 }}
          >
            <div className="flex items-center justify-center py-5 px-8 mb-8 rounded-full border-3 border-yellow w-full">
              <img src={BeerIcon} alt="tender-logo" />
            </div>
            {allTypes && allTypes.length > 0 && <span>{allTypes[2].name}</span>}
          </Button>

          <Button
            onClick={() => handleFilterTypes(allTypes[3].id)}
            sx={{ textTransform: 'none', color: selectedTypes[3] ? '#FE014E' : '#fff' }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center p-5 mb-8 rounded-full border-3 border-pink w-full">
              <img src={CoffeeIcon} alt="tender-logo" />
            </div>
            {allTypes && allTypes.length > 0 && <span>{allTypes[3].name}</span>}
          </Button>
        </div>

        <div
          className="w-full h-34 flex flex-col items-center"
          style={{ backgroundColor: '#21354F' }}
        >
          <div className="w-full sm:w-1/2 mt-5 h-32" style={{ maxWidth: '100%' }}>
            <div
              className="flex justify-start px-12 overflow-x-auto row-categories pb-2 w-full"
              style={{ display: '-webkit-box' }}
            >
              {allInterests &&
                allInterests.length > 0 &&
                allInterests.map((item, i) => (
                  <div key={i} className="py-2 mr-6">
                    <button
                      type="button"
                      className="min-w-max flex justify-center text-center rounded text-white
                      shadow-md px-16 py-5"
                      style={{
                        backgroundColor: '#14202F',
                        border: selectedInterests[i] && '2px solid #5E7C9E',
                      }}
                      onClick={() => handleFilterInterests(item.id)}
                    >
                      <p>{item.name}</p>
                    </button>
                  </div>
                ))}
              {!allInterests && <Loading />}
              {allInterests && allInterests.length === 0 && <div>No hay intereses</div>}
            </div>
          </div>

          <div className="w-full px-10 py-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {sites &&
                sites.length > 0 &&
                sites.map(({ id, name, address, logo }, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    >
                      <div className="relative">
                        <Link to={`/commerce/${id}`}>
                          <img className="w-full" src={logo.url} alt="Sunset in the mountains" />
                          <div
                            className="absolute top-0 right-0 w-full h-full"
                            style={{ boxShadow: '0px -112px 48px -9px rgba(0,0,0,0.75) inset' }}
                          />

                          <div
                            className="absolute bottom-0 left-0 px-8 py-6 text-white text-sm w-full flex items-end justify-between z-10"
                            style={{
                              height: '6rem',
                            }}
                          >
                            <div className="flex flex-col w-2/3">
                              <h3 className="font-bold text-12 -mb-5">{name}</h3>
                              <h4 className="text-10 -mb-5 max-w-full truncate">{address}</h4>
                              <div className="flex gap-1 items-center">
                                <span className="text-9 sm:text-10"># Miedos</span>
                                <span className="text-9 sm:text-10"># Grupos</span>
                                <span className="text-9 sm:text-10"># Solteros</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end w-1/3">
                              <img src={SocialIcon} alt="Icono juego social" />
                              <span className="text-6">Interatuando 200</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              {!sites && <Loading />}
              {sites && sites.length === 0 && <div>No hay comercios</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed z-20" style={{ right: '1.5rem', bottom: '2rem' }}>
        <div
          className="rounded-full p-5 border-4 border-white overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: '#051B34', width: '5rem', height: '5rem' }}
        >
          {JwtService.getAccessToken() ? (
            <Link to="/login">
              <img
                src={profileGroup?.photos[0]?.url || ImageGroup}
                alt="img-profile"
                className="object-cover h-full w-max"
              />
            </Link>
          ) : (
            <Link to="/profile">
              <img src={Logo} className="object-cover h-[80%] w-[80%]" alt="Imagen del usuario" />
            </Link>
          )}
        </div>
      </div>

      <ModalInvitation />
    </div>
  );
};

export default Home;
