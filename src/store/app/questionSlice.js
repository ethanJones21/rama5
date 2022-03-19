import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import questionsService from '../../services/apiService/questionsService';

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await questionsService.getQuestions();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postQuestions = createAsyncThunk(
  'questions/postQuestions',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await questionsService.postQuestions(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const questionAdapter = createEntityAdapter({});

export const { selectAll: selectQuestions } = questionAdapter.getSelectors(
  (state) => state.questions
);

const questionSlice = createSlice({
  name: 'questions',
  initialState: questionAdapter.getInitialState({
    loading: false,
    errors: '',
    data: null,
    respQuestions: null,
  }),
  reducers: {},

  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.loading = true;
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      questionAdapter.setAll(state, action.payload);
    },
    [getQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al traer las preguntas';
    },
    [postQuestions.pending]: (state) => {
      state.loading = true;
    },
    [postQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.respQuestions = action.payload;
    },
    [postQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al traer las preguntas';
    },
  },
});

export default questionSlice.reducer;
