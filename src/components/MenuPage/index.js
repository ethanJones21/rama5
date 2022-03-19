import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuHeader from './MenuHeader';
// import CoverMenu from '../../images/cover-menu.jpg';
import LlamarMeseroIcon from '../../images/icons/llamar-mesero.svg';
import { getInfoCommerce } from '../../store/app/commerceSlice';
import {
  getCategoriesByUser,
  selectCategories,
  setSelectCategory,
} from '../../store/app/categorySlice';
import { getProdutsByCategory, selectProducts } from '../../store/app/productsSlice';
import MenuContent from './MenuContent';
import Loading from '../Loading';
import ModalInvitation from '../ModalInvitation';

const MenuPage = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();

  const { commerce } = useSelector(({ commerces }) => commerces);

  useEffect(() => {
    const id = routeParams ? routeParams?.idCommerce : 0;
    dispatch(getInfoCommerce(id));
  }, [dispatch, routeParams]);

  // MENU CONTENT
  const allCategories = useSelector(selectCategories);
  const allProducts = useSelector(selectProducts);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { selectCategory } = useSelector(({ categories }) => categories);

  useEffect(() => {
    dispatch(getCategoriesByUser(routeParams?.idCommerce));
  }, [dispatch, routeParams]);

  const handleFilterProducts = (idCategory) => {
    dispatch(setSelectCategory(idCategory));
    dispatch(getProdutsByCategory(idCategory));
  };

  // esto es lo que tiene
  // background: 'no-repeat center/cover',
  // backgroundImage: `url(${commerce?.banner?.url})`,

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
    <>
      <div
        className="w-full min-h-screen overflow-y-auto pb-32"
        style={{
          backgroundImage: `url(${commerce.banner.url})`,
        }}
      >
        <MenuHeader />
        <MenuContent />
        <div className="fixed bottom-0 left-0 px-12 pb-12 w-full">
          <button
            type="button"
            className="p-8 flex items-center justify-center gap-3 w-full rounded-full border-2 border-white text-white text-center font-bold"
            style={{ background: '#000' }}
          >
            Llamar al mesero
            <img src={LlamarMeseroIcon} alt="Icono de llamar al mesero" />
          </button>
        </div>
      </div>
      <ModalInvitation />
    </>
  );
};

export default MenuPage;
