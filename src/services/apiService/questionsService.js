// import { serialize } from 'object-to-formdata';
import questionRepository from '../../repositories/questionRepository';

const questionsService = {
  getQuestions: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await questionRepository.getQuestions();
    } catch (error) {
      throw error;
    }
  },
  postQuestions: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await questionRepository.postQuestions(data);
    } catch (error) {
      throw error;
    }
  },
};

export default questionsService;
