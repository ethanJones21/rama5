import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(false), ms);
  });
};

export const asyncPopUpFirstTime = createAsyncThunk(
  'popup/firstTime',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await wait(10 * 1000);
      // await wait(180 * 1000); // 3 minutes
      dispatch(firstPopUp());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const asyncPopUpAllTime = createAsyncThunk(
  'popup/allTime',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await wait(1800 * 1000); // 30 minutes
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const popupAdapter = createEntityAdapter({});

export const { selectAll: selectPopUp } = popupAdapter.getSelectors((state) => state.popup);

const popupSlice = createSlice({
  name: 'popup',
  initialState: popupAdapter.getInitialState({
    errors: {},
    loading: false,
    first: false,
    open: false,
  }),
  reducers: {
    firstPopUp: (state) => {
      state.first = true;
    },
    openPopUp: (state) => {
      state.open = true;
    },
    closePopUp: (state) => {
      state.open = false;
    },
  },
  extraReducers: {
    [asyncPopUpFirstTime.pending]: (state) => {
      state.loading = true;
    },
    [asyncPopUpFirstTime.fulfilled]: (state, action) => {
      state.loading = false;
      state.open = true;
      // popupAdapter.setAll(state, action.payload); //si tuviera data la llena
    },
    [asyncPopUpFirstTime.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [asyncPopUpAllTime.pending]: (state) => {
      state.loading = true;
    },
    [asyncPopUpAllTime.fulfilled]: (state, action) => {
      state.loading = false;
      state.open = true;
    },
    [asyncPopUpAllTime.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { openPopUp, closePopUp, firstPopUp } = popupSlice.actions;

export default popupSlice.reducer;
