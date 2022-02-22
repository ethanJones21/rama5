import { Icon } from '@mui/material';

const InputFile = ({
  nameInput,
  idImage,
  imageProfile,
  profileGroup,
  handleImageChange,
  setImageProfile,
  setImage,
  image,
}) => {
  return (
    <div
      className="w-full flex justify-center items-center rounded-12 relative shadow-lg"
      style={{
        height: '157px',
        background: `${
          // eslint-disable-next-line no-nested-ternary
          imageProfile?.[nameInput]?.length > 0
            ? `url("${imageProfile[nameInput]}") no-repeat center/cover`
            : profileGroup?.photos?.length > 0
            ? `url("${profileGroup?.photos[idImage]?.url}") no-repeat center/cover`
            : '#EDEDED'
        }`,
      }}
    >
      <input
        type="file"
        id={nameInput}
        name={nameInput}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          handleImageChange(e);
          e.target.value = '';
        }}
      />
      {!imageProfile?.[nameInput]?.length > 0 && (
        /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
        <label
          htmlFor={nameInput}
          className="block flex justify-center items-center bg-white rounded-full shadow-lg"
          style={{ width: '36px', height: '36px' }}
        >
          <Icon fontSize="medium" color="action">
            photo_camera
          </Icon>
        </label>
      )}

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span
        className={`absolute top-4 right-4 bg-white p-2 rounded-full flex justify-center items-center ${
          imageProfile?.[nameInput]?.length > 0 ? 'block' : 'hidden'
        }`}
        style={{ width: '20px', height: '20px' }}
        onClick={() => {
          setImageProfile({ ...imageProfile, [nameInput]: [] });
          setImage({ ...image, [nameInput]: [] });
        }}
      >
        <Icon fontSize="small" sx={{ color: '#051B34' }}>
          remove_circle_outline
        </Icon>
      </span>
    </div>
  );
};

export default InputFile;
