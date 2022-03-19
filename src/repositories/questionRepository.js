import http from '../services/http';

const questionUrl = '/api/v1/questions';
const sendQuestionsUrl = '/api/v1/group/interest';

const headers = {
  applicationJson: 'application/json',
  multipartFormData: 'multipart/form-data',
};

const questionRepository = {
  getQuestions: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${questionUrl}`);
    } catch (error) {
      throw error;
    }
  },
  postQuestions: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.post(`${sendQuestionsUrl}`, data);
    } catch (error) {
      throw error;
    }
  },
};

export default questionRepository;
