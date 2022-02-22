import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../../utilities/useFormHook';
import AlertCustom from '../../../shared-components/AlertCustom';
import { logoutUser } from '../../../store/app/userSlice';
import { openTermsDialog } from '../../../store/app/dialogSlice';
import DialogTerms from '../../Dialogs/DialogTerms';
import InputFile from '../../../shared-components/InputFile';
import { updateProfileGroup } from '../../../store/app/groupUserSlice';

const initialData = {
  user: '',
  name: '',
};

const initialImageProfile = {
  profile1: [],
  profile2: [],
  profile3: [],
};

const indexPhotos = [0, 1, 2];

const ProfileGroup = ({ profileGroup }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(initialImageProfile);
  const [dataPhotos, setDataPhotos] = useState([]);

  const [imageProfile, setImageProfile] = useState([]);

  const { errors, form, handleChange, handleSubmit, setErrors, setForm, setInForm } = useForm(
    initialData,
    () => handleSubmitProfieData()
  );

  useEffect(() => {
    if (profileGroup) {
      setForm({ ...form, ...profileGroup });
      setDataPhotos([...profileGroup?.photos]);
    } else {
      setForm({ ...form, ...initialData });
    }
  }, [profileGroup]);

  function handleSubmitProfieData() {
    // TODO : DISPATCH TO SAVE DATA USER
    dispatch(updateProfileGroup({ dataForm: form, newImages: image }));
  }

  const handleImageChange = (e) => {
    const imageSelect = e.target.files[0];
    const { id } = e.target;

    if (imageSelect) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // dispatch(setProfileImages({ [id]: 'imageSelect?' }));
        setImage({ ...image, [id]: imageSelect });
        setImageProfile({ ...imageProfile, [id]: reader.result });
      };
      reader.readAsDataURL(imageSelect);
    } else {
      console.error('Error al cargar la imagen');
    }
  };

  return (
    <>
      <form style={{ color: '#051B34' }}>
        <AlertCustom />
        <h1 className="w-full block font-800 my-8 ">Información de grupo activo</h1>
        <p className="mb-4 font-500 text-9">Editar nombre del grupo</p>
        <TextField
          id="name"
          name="name"
          label=""
          type="text"
          value={form.name}
          variant="outlined"
          className="w-full block mb-4"
          style={{ background: '#F8F8F8', color: '#051B34' }}
          size="small"
          placeholder="Nombre del grupo..."
          onChange={handleChange}
        />

        <div
          className="w-full grid gap-8 my-12"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2,157px)' }}
        >
          <InputFile
            nameInput="profile1"
            idImage={0}
            imageProfile={imageProfile}
            profileGroup={profileGroup}
            handleImageChange={handleImageChange}
            setImageProfile={setImageProfile}
            setImage={setImage}
            image={image}
          />
          <InputFile
            nameInput="profile2"
            idImage={1}
            imageProfile={imageProfile}
            profileGroup={profileGroup}
            handleImageChange={handleImageChange}
            setImageProfile={setImageProfile}
            setImage={setImage}
            image={image}
          />
          <InputFile
            nameInput="profile3"
            idImage={2}
            imageProfile={imageProfile}
            profileGroup={profileGroup}
            handleImageChange={handleImageChange}
            setImageProfile={setImageProfile}
            setImage={setImage}
            image={image}
          />
        </div>

        <h2 className="w-full block font-800 mb-8 ">Información personal</h2>
        <p className="mb-4 font-500 text-9">Editar nombre de usuario</p>
        <TextField
          // error={!!errors.name}
          // helperText={errors.name?.message}
          id="user"
          name="user"
          label=""
          type="text"
          value={form.user}
          variant="outlined"
          className="w-full block mb-4"
          style={{ background: '#F8F8F8', color: '#051B34' }}
          size="small"
          placeholder="Nombre del grupo..."
          onChange={handleChange}
        />
        <Button
          onClick={() => {
            handleSubmitProfieData();
          }}
          variant="contained"
          className="w-full flex items-center justify-center mb-12 space-x-8 py-4 border-1 border-white text-white"
          style={{ background: '#FF004E', marginTop: '0.8rem' }}
        >
          <span className="block text-center pl-4 font-500 text-9 md:text-11">Guardar cambios</span>
        </Button>
        <a
          href="https://pos.wuay.com.co/terminos-y-condiciones-chat/"
          target="_blank"
          className="block w-full text-center font-600 text-8 mt-8 sm:text-9 md:text-10"
          rel="noreferrer"
        >
          Politicas
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className="block w-full text-center font-600 text-8 sm:text-9 md:text-10 my-4"
          rel="noreferrer"
          onClick={() => {
            dispatch(openTermsDialog());
          }}
        >
          Ver condiciones
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className="block w-full text-center font-600 text-8 sm:text-9 md:text-10"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Cerrar Sesión
        </a>
      </form>
      <DialogTerms />
    </>
  );
};

export default ProfileGroup;
