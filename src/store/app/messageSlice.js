import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import messagesService from '../../services/apiService/messageService';
import { closeMessageDialog } from './dialogSlice';

const messageAdapter = createEntityAdapter({});

export const getMessagePublic = createAsyncThunk(
  'messages/getMessagePublic',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await messagesService.getMessagePublic(data?.data?.id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getInvitedMessages = createAsyncThunk(
  'messages/getInvitedMessages',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await messagesService.getInvitedMessages(data?.page);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPublicMessages = createAsyncThunk(
  'messages/getPublicMessages',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await messagesService.getPublicMessages(data?.id, data?.page);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRoomMessages = createAsyncThunk(
  'messages/getRoomMessages',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await messagesService.getRoomMessages(data?.id, data?.page);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postMessages = createAsyncThunk(
  'messages/postMessages',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await messagesService.postMessages(data);
      if (data?.is_dialog) dispatch(closeMessageDialog());
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const factoryMessage = (message) => {
  return {
    name: message?.groupUser?.data?.name,
    interests: message?.groupUser?.data?.interests?.map((item, index) =>
      message?.groupUser?.data?.interests?.length - 1 === index
        ? item?.interest
        : `${item?.interest} / `
    ),
    message: message?.message,
    image: message?.groupUser?.data?.photos[0]?.url,
    show: true,
    groupId: message?.groupUser?.data?.id,
    groupRoomId: message?.groupUser?.data?.group_room?.id || 0,
    id: message?.id,
    isMyGroup: message?.groupUser?.data?.is_my_group,
    isInvited: message?.groupUser?.data?.group_room?.is_invited,
  };
};

const factoryMessageRoom = (message) => {
  return {
    name: message?.groupUserRoom?.data?.groupSender?.data?.name,
    interests: message?.groupUserRoom?.data?.groupSender?.data?.interests.map((item, index) =>
      message?.groupUserRoom?.data?.groupSender?.data?.interests.length - 1 === index
        ? item?.interest
        : `${item?.interest} / `
    ),
    message: message?.message,
    image: message?.groupUserRoom?.data?.groupSender?.data?.photos[0]?.url,
    show: true,
    senderInfo: message?.groupUserRoom?.data?.groupSender?.data,
    groupId: message?.groupUserRoom?.data?.groupSender?.data?.id,
    groupRoomId: message?.groupUserRoom?.data?.id,
    id: message?.id,
    isMyGroup: message?.groupUserRoom?.data?.groupSender?.data?.is_my_group,
    isInvited: message?.groupUserRoom?.data?.groupSender?.data?.group_room?.is_invited,
  };
};

const messageSlice = createSlice({
  name: 'messages',
  initialState: messageAdapter.getInitialState({
    loading: false,
    errors: {},
    messagesPublic: [],
    messagesRoom: [],
    pagePublic: 1,
    pageRoom: 1,
    hasMorePublic: true,
    hasMoreRoom: true,
    successMessageRoom: false,
    messagesInvited: [],
    pageInvited: 1,
    hasMoreInvited: true,
  }),
  reducers: {
    addMessagePublic: (state, action) => {
      state.messagesPublic = [factoryMessage(action?.payload?.data), ...state.messagesPublic];
    },
    addMessageRoom: (state, action) => {
      state.messagesRoom = [factoryMessageRoom(action?.payload?.data), ...state.messagesRoom];
    },
    addMessageInvited: (state, action) => {
      state.messagesInvited = [factoryMessageRoom(action?.payload?.data), ...state.messagesInvited];
    },
  },
  extraReducers: {
    [getPublicMessages.pending]: (state) => {
      state.loading = true;
    },
    [getPublicMessages.fulfilled]: (state, action) => {
      const messages = action?.payload?.map((message) => factoryMessage(message));
      state.loading = false;
      state.messagesPublic = [...state.messagesPublic, ...messages];
      state.pagePublic += 1;
    },
    [getPublicMessages.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.hasMorePublic = false;
    },
    [postMessages.pending]: (state) => {
      state.loading = true;
      state.errors = {};
      state.successMessageRoom = false;
    },
    [postMessages.fulfilled]: (state, action) => {
      state.loading = false;
      state.successMessageRoom = true;
      state.errors = {};
    },
    [postMessages.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.successMessageRoom = false;
    },
    [getRoomMessages.pending]: (state) => {
      state.loading = true;
    },
    [getRoomMessages.fulfilled]: (state, action) => {
      const messages = action?.payload?.map((message) => factoryMessageRoom(message));
      state.loading = false;
      state.messagesRoom = [...state.messagesRoom, ...messages];
      state.pageRoom += 1;
    },
    [getRoomMessages.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.hasMoreRoom = false;
    },

    [getInvitedMessages.pending]: (state) => {
      state.loading = true;
    },
    [getInvitedMessages.fulfilled]: (state, action) => {
      const messages = action?.payload?.map((message) => factoryMessage(message));
      state.loading = false;
      state.messagesInvited = [...state.messagesInvited, ...messages];
      state.pageInvited += 1;
    },
    [getMessagePublic.fulfilled]: (state, action) => {
      const message = factoryMessage(action.payload);
      state.messagesPublic = [message, ...state.messagesPublic];
    },
    [getInvitedMessages.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.hasMoreInvited = false;
    },
  },
});

export const { addMessagePublic, addMessageRoom, addMessageInvited } = messageSlice.actions;

export default messageSlice.reducer;
