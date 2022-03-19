import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import commercesService from '../../services/apiService/commerceService';

export const getCommercesWithoutUser = createAsyncThunk(
  'commerces/getCommercesWithoutUser',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      // data = {search, type, interest}
      return await commercesService.getCommercesWithoutUser(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTypes = createAsyncThunk(
  'commerces/getTypes',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await commercesService.getTypes();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCommerces = createAsyncThunk(
  'commerces/getCommerces',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await commercesService.getCommerce(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getInfoCommerce = createAsyncThunk(
  'commerces/getInfoCommerce',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await commercesService.getInfoCommerce(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCommerceAround = createAsyncThunk(
  'commerces/getCommerceAround',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await commercesService.getCommercesAround(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const commerceAdapter = createEntityAdapter({});

export const { selectAll: selectCommerces } = commerceAdapter.getSelectors(
  (state) => state.commerces
);

const commerceSlice = createSlice({
  name: 'commerces',
  initialState: commerceAdapter.getInitialState({
    loading: false,
    errors: '',
    commerce: null,
    commercesAround: null,
    types: null,
  }),
  reducers: {},

  extraReducers: {
    [getInfoCommerce.pending]: (state, action) => {
      state.loading = true;
    },
    [getInfoCommerce.fulfilled]: (state, action) => {
      state.loading = false;
      state.commerce = action.payload;
    },
    [getInfoCommerce.rejected]: (state, action) => {
      state.loading = false;
      state.commerce = null;
    },
    [getCommerceAround.pending]: (state) => {
      state.loading = true;
    },
    [getCommerceAround.fulfilled]: (state, action) => {
      state.loading = false;
      state.commercesAround = action.payload;
    },
    [getCommerceAround.rejected]: (state) => {
      state.loading = false;
      state.commercesAround = null;
    },
    [getCommercesWithoutUser.pending]: (state) => {
      state.loading = true;
    },
    [getCommercesWithoutUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.commercesAround = action.payload;
    },
    [getCommercesWithoutUser.rejected]: (state) => {
      state.loading = false;
      state.commercesAround = null;
    },
    [getTypes.pending]: (state) => {
      state.loading = true;
    },
    [getTypes.fulfilled]: (state, action) => {
      state.loading = false;
      state.types = action.payload;
    },
    [getTypes.rejected]: (state) => {
      state.loading = false;
      state.types = null;
    },
  },
});

export default commerceSlice.reducer;
