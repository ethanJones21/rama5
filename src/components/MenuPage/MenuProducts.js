import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import numeral from 'numeral';
import DialogProductDescription from '../Dialogs/DialogProductDescription';
import { TruncateString } from '../../utilities/truncateString';
import { openProductDialog } from '../../store/app/dialogSlice';

const MenuProducts = ({ productsFilter }) => {
  const dispatch = useDispatch();

  if (productsFilter.length === 0 || !productsFilter) {
    return (
      <>
        <div
          className="flex justify-center items-start mt-4"
          style={{ color: '#051B34', height: '100vh' }}
        >
          <div className="mt-16" style={{ width: '315px' }}>
            <div className="flex justify-center mb-8">
              <h2 className="text-12 text-center font-600 text-white">
                Selecciona una de las categorias...
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="w-full flex justify-center mt-4 pb-8 min-h-screen"
        style={{ color: '#051B34' }}
      >
        <div style={{ width: '90%' }}>
          <div className="flex justify-start mb-8">
            <h2 className="text-12 font-600 text-white">Nuestra Carta</h2>
          </div>
          <div>
            {productsFilter.map((item) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                className="w-full flex justify-center text-white rounded-8 mb-8"
                style={{ background: 'rgba(0,0,0,0.3)' }}
                onClick={() => {
                  dispatch(openProductDialog(item));
                }}
              >
                <div className="w-full flex flex-col p-8 divide-y divide-gray-500 space-y-8">
                  <div className="w-full flex justify-between items-center px-4">
                    <div className="flex items-center">
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                      {item?.photo?.url && (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        <img
                          src={item?.photo?.url}
                          alt={item.name}
                          className="w-40 h-40 rounded-4"
                        />
                      )}
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                      <div className="flex flex-col items-center ml-4">
                        <p
                          className="text-12 font-600 w-full"
                          // onClick={() => {
                          //   dispatch(openProductDialog(item));
                          // }}
                        >
                          {TruncateString(item.name, 30)}
                        </p>
                        <p className="text-11 font-600 w-full">
                          {numeral(item.price_sale).format('$ 0,0')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex space-x-16 items-center">
                    <p className="pt-8">
                      {TruncateString(item?.description, 90)}
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <div
                        className="inline-block pl-4 font-bold text-white"
                        onClick={() => {
                          dispatch(openProductDialog(item));
                        }}
                      >
                        Ver mas
                      </div>
                      {/* <Link
                        to="#"
                        className="inline-block pl-4 font-bold text-white"
                        // style={{ color: '#051B34' }}
                        onClick={() => {
                          dispatch(openProductDialog(item));
                        }}
                      >
                        Ver mas
                      </Link> */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DialogProductDescription />
    </>
  );
};

export default MenuProducts;
