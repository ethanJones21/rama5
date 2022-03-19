import http from '../services/http';

const commerceUrl = '/api/v1/commerces';

const headers = {
  applicationJson: 'application/json',
  multipartFormData: 'multipart/form-data',
};

const commerceRepository = {
  getCommercesWithoutUser: async ({ search, type, interest }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (search !== '') {
        return await http.get(`${commerceUrl}?search=${search}`);
      }
      if (type !== '') {
        return await http.get(`${commerceUrl}?type=${type}`);
      }
      if (interest !== '') {
        return await http.get(`${commerceUrl}?interest=${interest}`);
      }
      return await http.get(`${commerceUrl}`);
    } catch (error) {
      throw error;
    }
  },

  getTypes: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${commerceUrl}/types`);
    } catch (error) {
      throw error;
    }
  },

  getCommerce: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.post(`${commerceUrl}/`, data);
    } catch (error) {
      throw error;
    }
  },
  getInfoCommerce: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${commerceUrl}/user/${id}`);
    } catch (error) {
      throw error;
    }
  },

  getCommercesAround: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.post(`${commerceUrl}/game`, data);
    } catch (error) {
      throw error;
    }
  },
};

export default commerceRepository;
