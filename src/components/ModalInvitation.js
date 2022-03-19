import { Button, Modal, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MarkerIcon } from '../svg';
import { asyncPopUpAllTime, asyncPopUpFirstTime, closePopUp } from '../store/app/popupSlice';

function ModalInvitation() {
  const { open, first } = useSelector(({ popup }) => popup);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closePopUp());
    dispatch(asyncPopUpAllTime({}));
  };
  const history = useHistory();

  useEffect(() => {
    if (!first) {
      dispatch(asyncPopUpFirstTime({}));
    }
  }, [dispatch, first]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#fff',
    boxShadow: 24,
    borderRadius: '20px',
    p: 3,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          className="absolute left-0 flex items-center justify-center p-4 rounded-full w-36 h-36"
          style={{
            left: '40%',
            top: '-2.2rem',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <MarkerIcon />
        </div>
        <Typography
          sx={{ fontWeight: 'bold', textAlign: 'center', color: '#051B34', marginTop: '.5rem' }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Experiencia personalizada
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
          Nuestra plataforma inteligente te ayuda a encontrar lugares que se ajusten a tus intereses
        </Typography>
        <div className="flex justify-center item-center gap-8 mt-8">
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ borderRadius: '9999px', textTransform: 'none', backgroundColor: '#051B34' }}
          >
            Mas tarde
          </Button>
          <Button
            onClick={() => {
              history.push('/login');
            }}
            variant="contained"
            sx={{ borderRadius: '9999px', textTransform: 'none', backgroundColor: '#FF004E' }}
          >
            Lo quiero
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalInvitation;
