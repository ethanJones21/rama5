import { serialize } from 'object-to-formdata';
import groupUserRepository from '../../repositories/groupUserRepository';

const GroupUserService = {
  rejectGroupInvitation: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.rejectGroupUser(data);
    } catch (error) {
      throw error;
    }
  },
  acceptGroupInvitation: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.acceptGroupUser(data);
    } catch (error) {
      throw error;
    }
  },
  saveGroupUser: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.saveGroupUser(serialize(data));
    } catch (error) {
      throw error;
    }
  },
  postGroupSilent: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.postGroupSilent(serialize(data));
    } catch (error) {
      throw error;
    }
  },
  postGroupInvitation: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.postGroupInvitation(serialize(data));
    } catch (error) {
      throw error;
    }
  },
  deleteGroupRoom: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.deleteGroupRoom(data);
    } catch (error) {
      throw error;
    }
  },
  getGroupsInCommerce: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.getGroupsInCommerce();
    } catch (error) {
      throw error;
    }
  },
  getProfileGroup: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await groupUserRepository.getProfileGroup();
    } catch (error) {
      throw error;
    }
  },
  updateProfileGroup: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const { dataForm, newImages } = data;
      return await groupUserRepository.updateProfileGroup(
        serialize(profileRequestData(dataForm, newImages, 'PUT'), { nullsAsUndefineds: true })
      );
    } catch (error) {
      throw error;
    }
  },
};

const handleCheckUpdateImage = (formData, newImages) => {
  const convertData = Object.entries(newImages);
  return convertData.map((item, index) => {
    if (item[1].length === 0) return formData[index].url;
    return item[1];
  });
};

const profileRequestData = (dataInteres, newImages, method) => {
  dataInteres = dataInteres || {};
  return {
    group_name: dataInteres.name,
    user_name: dataInteres.user,
    photos: handleCheckUpdateImage(dataInteres?.photos, newImages),
    _method: method,
  };
};

export default GroupUserService;
