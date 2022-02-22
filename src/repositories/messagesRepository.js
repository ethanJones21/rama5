import http from '../services/http';

const messageUrl = '/api/v1/roomMessages';

const messagesRepository = {
  getMessage: async (room) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${messageUrl}/show/${room}`);
    } catch (error) {
      throw error;
    }
  },
  getInvitedMessages: async (page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${messageUrl}?page=${page}`);
    } catch (error) {
      throw error;
    }
  },
  getPublicMessages: async (idCommerce, page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${messageUrl}/public/${idCommerce}?page=${page}`);
    } catch (error) {
      throw error;
    }
  },
  getRoomMessages: async (idRoom, page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${messageUrl}/${idRoom}?page=${page}`);
    } catch (error) {
      throw error;
    }
  },
  postMessages: async (body) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.post(`${messageUrl}`, body);
    } catch (error) {
      throw error;
    }
  },
};

export default messagesRepository;
