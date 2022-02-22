// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import {
//   getCategoriesByUser,
//   selectCategories,
//   setSelectCategory,
// } from '../../store/app/categorySlice';
// import { getProdutsByCategory, selectProducts } from '../../store/app/productsSlice';

import ThreeTabs from './Tabs';

const MenuContent = () => {
  // const dispatch = useDispatch();
  // const routeParams = useParams();

  const allCategories = [
    { id: '1', category: 'Fuertes', selected: true },
    { id: '2', category: 'Bebidas', selected: false },
    { id: '3', category: 'Fuertes', selected: false },
    { id: '4', category: 'Bebidas', selected: false },
  ];
  const allProducts = [
    {
      id: '1',
      name: 'Foo Fighters',
      price: 30,
      description:
        'Pollo apanado, cebolla grille, queso, lechuga y tomate, asados tomate de todo tipo',
      photo: {
        url: 'https://images.pexels.com/photos/9406884/pexels-photo-9406884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    },
    {
      id: '2',
      name: 'Foo Fighters',
      price: 30,
      description:
        'Pollo apanado, cebolla grille, queso, lechuga y tomate, asados tomate de todo tipo',
      photo: {
        url: 'https://images.pexels.com/photos/9406884/pexels-photo-9406884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    },
    {
      id: '3',
      name: 'Foo Fighters',
      price: 30,
      description:
        'Pollo apanado, cebolla grille, queso, lechuga y tomate, asados tomate de todo tipo',
      photo: {
        url: 'https://images.pexels.com/photos/9406884/pexels-photo-9406884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    },
    {
      id: '4',
      name: 'Foo Fighters',
      price: 30,
      description:
        'Pollo apanado, cebolla grille, queso, lechuga y tomate, asados tomate de todo tipo',
      photo: {
        url: 'https://images.pexels.com/photos/9406884/pexels-photo-9406884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    },
  ];
  // const allCategories = useSelector(selectCategories);
  // const allProducts = useSelector(selectProducts);
  // const { selectCategory } = useSelector(({ categories }) => categories);

  // useEffect(() => {
  //   dispatch(getCategoriesByUser(routeParams?.idCommerce)).then((item) => {
  //     if (item?.payload) handleFilterProducts(item?.payload[0]?.id);
  //   });
  // }, [dispatch, routeParams]);

  // const handleFilterProducts = (idCategory) => {
  //   dispatch(setSelectCategory(idCategory));
  //   dispatch(getProdutsByCategory(idCategory));
  // };

  return (
    <>
      <div className="flex justify-center w-full mt-8">
        <div
          className="flex justify-start ml-14 overflow-x-auto row-categories pb-2 w-full"
          style={{ display: '-webkit-box' }}
        >
          {allCategories.map((item) => (
            <div id={item.id} className="py-2 mr-6">
              <button
                type="button"
                className="min-w-max flex justify-center text-center rounded bg-active text-white
                shadow-md px-24 py-5"
                style={{
                  backgroundColor: item.selected ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.3)',
                }}
                // onClick={() => handleFilterProducts(item.id)}
              >
                <p>{item.category}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-white">
        <span>Hoy hasta el amanecer</span>
        <ThreeTabs allProducts={allProducts} />
      </div>

      {/* <div className="flex justify-center w-full mt-8">
        <div className="flex justify-start ml-14 overflow-x-auto row-categories pb-2 w-full" style={{display : '-webkit-box'}}>
          {allCategories.map((item) => (
            <div id={item.id} className="py-2 mr-8">
              <button
                type="button"
                className={`min-w-max flex justify-center text-center rounded ${
                  selectCategory === item.id ? 'bg-white' : 'bg-active text-white'
                } shadow-md px-16 py-5`}
                // onClick={() => handleFilterProducts(item.id)}
              >
                <p>{item.category}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <MenuProducts productsFilter={allProducts} /> */}
    </>
  );
};

export default MenuContent;
