import messagesRepository from '../../repositories/messagesRepository';

const messagesService = {
  getMessagePublic: async (message) => {
    console.log(message);
    // eslint-disable-next-line no-useless-catch
    try {
      return await messagesRepository.getMessage(message);
    } catch (error) {
      throw error;
    }
  },
  getInvitedMessages: async (page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await messagesRepository.getInvitedMessages(page);
    } catch (error) {
      throw error;
    }
  },
  getPublicMessages: async (idCommerce, page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await messagesRepository.getPublicMessages(idCommerce, page);
    } catch (error) {
      throw error;
    }
  },
  getRoomMessages: async (idRoom, page) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await messagesRepository.getRoomMessages(idRoom, page);
    } catch (error) {
      throw error;
    }
  },
  postMessages: async (body) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await messagesRepository.postMessages(body);
    } catch (error) {
      throw error;
    }
  },
};

export default messagesService;
