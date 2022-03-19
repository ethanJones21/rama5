import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Qr from '.';

export default function QrFinalPage() {
  const history = useHistory();
  return (
    <div className="w-full h-screen flex justify-center" style={{ background: '#121038' }}>
      <div
        className="h-screen flex flex-col justify-center gap-16 relative"
        style={{ width: '90%' }}
      >
        <div className="text-white p-4">
          <h2 className="text-12 font-600 text-center">No puedes ingresar</h2>
        </div>
        <div className="text-white absolute top-16 left-2">
          <Button
            sx={{ color: '#fff', textTransform: 'none' }}
            onClick={history.goBack}
            className="flex justify-center"
          >
            <div>
              <img src="assets/icons/Back-Arrow.svg" alt="icon-back" className="inline-block w-8" />
            </div>
            <p className="pl-4">Atras</p>
          </Button>
        </div>
        <div>
          <Qr />
        </div>
      </div>
    </div>
  );
}
