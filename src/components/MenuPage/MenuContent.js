import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getCategoriesByUser,
  selectCategories,
  setSelectCategory,
} from '../../store/app/categorySlice';
import { getProdutsByCategory, selectProducts } from '../../store/app/productsSlice';

import ThreeTabs from './Tabs';

const MenuContent = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();

  const allCategories = useSelector(selectCategories);
  const allProducts = useSelector(selectProducts);
  const { selectCategory } = useSelector(({ categories }) => categories);

  useEffect(() => {
    dispatch(getCategoriesByUser(routeParams?.idCommerce)).then((item) => {
      if (item?.payload) handleFilterProducts(item?.payload[0]?.id);
    });
  }, [dispatch, routeParams]);

  const handleFilterProducts = (idCategory) => {
    dispatch(setSelectCategory(idCategory));
    dispatch(getProdutsByCategory(idCategory));
  };

  return (
    <>
      <div className="flex justify-center w-full my-8">
        <div
          className="flex justify-start px-12 overflow-x-auto row-categories pb-2 w-full"
          style={{ display: '-webkit-box' }}
        >
          {allCategories.map((item) => (
            <div id={item.id} className="py-2 mr-6">
              <button
                type="button"
                className="min-w-max flex justify-center text-center rounded  shadow-md px-16 py-5 text-white"
                style={{
                  background:
                    selectCategory === item.id ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.3)',
                }}
                onClick={() => handleFilterProducts(item.id)}
              >
                <p>{item.category}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center text-white pb-16">
        <span>Hoy hasta el amanecer</span>
        <ThreeTabs allProducts={allProducts} />
      </div>
    </>
  );
};

export default MenuContent;
