import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import GroupUserService from '../../services/apiService/groupUserService';
import { openAlert } from './alertSlice';
import { closeTemplateDialog, openTemplateDialog } from './dialogSlice';

export const acceptInvitationGroup = createAsyncThunk(
  'groupUser/acceptGroupUser',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.acceptGroupInvitation(data);
      dispatch(openAlert({ message: 'Se ha aceptado correctament el grupo', severity: 'success' }));
      dispatch(closeTemplateDialog());
      return response;
    } catch (error) {
      dispatch(openAlert({ message: `Atención : ${error}`, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const rejectInvitationGroup = createAsyncThunk(
  'groupUser/rejectGroupUser',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.rejectGroupInvitation(data);
      dispatch(
        openAlert({ message: 'Se ha rechazado correctament el grupo', severity: 'success' })
      );
      dispatch(closeTemplateDialog());
      return response;
    } catch (error) {
      dispatch(openAlert({ message: `Atención : ${error}`, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const saveGroupuser = createAsyncThunk(
  'groupUser/saveGroupuser',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.saveGroupUser(data);
      dispatch(
        openAlert({ message: 'Se ha registrado el grupo correctamente', severity: 'success' })
      );
      return response;
    } catch (error) {
      dispatch(openAlert({ message: `No se pudo registar el grupo. ${error}`, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const postGroupSilent = createAsyncThunk(
  'groupUser/postGroupSilent',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.postGroupSilent(data);
      dispatch(
        openAlert({ message: 'Se ha silenciado el grupo correctamente', severity: 'success' })
      );
      return response;
    } catch (error) {
      dispatch(openAlert({ message: error, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const postGroupInvitation = createAsyncThunk(
  'groupUser/postGroupInvitation',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.postGroupInvitation(data);
      dispatch(
        openAlert({ message: 'Se ha enviado la invitación correctamente', severity: 'success' })
      );
      return response;
    } catch (error) {
      dispatch(openAlert({ message: error, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const deleteGroupRoom = createAsyncThunk(
  'groupUser/postGroupInvitation',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await GroupUserService.deleteGroupRoom(data);
      dispatch(openTemplateDialog());
      return response;
    } catch (error) {
      dispatch(openAlert({ message: error?.data, severity: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export const getGroupsInCommerce = createAsyncThunk(
  'groupUser/getGroupsInCommerce',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await GroupUserService.getGroupsInCommerce();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProfileGroup = createAsyncThunk(
  'groupUser/getProfileGroup',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      return await GroupUserService.getProfileGroup();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProfileGroup = createAsyncThunk(
  'groupUser/updateProfileGroup',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(openAlert({ message: 'Perfil actualizado correctamente', severity: 'success' }));
      return await GroupUserService.updateProfileGroup(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const groupUserAdapter = createEntityAdapter({});

export const { selectAll: selectGroupUser } = groupUserAdapter.getSelectors(
  (state) => state.groupUser
);

const groupUserSlice = createSlice({
  name: 'groupUser',
  initialState: groupUserAdapter.getInitialState({
    loading: false,
    errors: '',
    data: null,
    groupId: null,
    selectGroup: null,
    profileGroup: null,
    targetGroup: null,
    room: null,
    profileImages: null,
    focus: '0',
  }),
  reducers: {
    selectGroup: (state, action) => {
      state.selectGroup = action.payload;
    },
    emptySelectGroup: (state) => {
      state.selectGroup = null;
    },
    targetGroup: (state, action) => {
      state.room = state?.targetGroup;
      state.targetGroup = action?.payload;
    },
    setProfileImages: (state, action) => {
      state.profileImages = action.payload;
    },
  },
  extraReducers: {
    [saveGroupuser.pending]: (state, action) => {
      state.loading = true;
    },
    [saveGroupuser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [saveGroupuser.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
    },
    [postGroupSilent.pending]: (state, action) => {
      state.groupId = action.meta.arg.group_user_target_id;
      state.loading = true;
    },
    [postGroupSilent.fulfilled]: (state, action) => {
      state.loading = false;
      state.groupId = null;
    },
    [postGroupSilent.rejected]: (state, action) => {
      state.groupId = null;
      state.loading = false;
    },
    [postGroupInvitation.pending]: (state, action) => {
      state.groupId = action.meta.arg.group_user_id;
      state.loading = true;
    },
    [postGroupInvitation.fulfilled]: (state, action) => {
      state.loading = false;
      state.groupId = null;
    },
    [postGroupInvitation.rejected]: (state, action) => {
      state.groupId = null;
      state.loading = false;
    },
    [deleteGroupRoom.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteGroupRoom.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteGroupRoom.rejected]: (state, action) => {
      state.loading = false;
    },
    [getGroupsInCommerce.pending]: (state) => {
      state.loading = true;
    },
    [getGroupsInCommerce.fulfilled]: (state, action) => {
      state.loading = false;
      groupUserAdapter.setAll(state, action.payload);
    },
    [getGroupsInCommerce.rejected]: (state, action) => {
      state.loading = false;
      state.errors = 'Error al obetener los grupos en el comercio';
    },
    [getProfileGroup.pending]: (state) => {
      state.loading = true;
    },
    [getProfileGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.profileGroup = action.payload;
    },
    [getProfileGroup.rejected]: (state) => {
      state.loading = false;
    },
    [updateProfileGroup.pending]: (state) => {
      state.loading = true;
    },
    [updateProfileGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.profileGroup = action?.payload;
    },
    [updateProfileGroup.rejected]: (state) => {
      state.loading = false;
    },
    [acceptInvitationGroup.pending]: (state, action) => {
      state.loading = true;
      state.focus = action.payload;
    },
    [acceptInvitationGroup.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [acceptInvitationGroup.rejected]: (state) => {
      state.loading = false;
      state.focus = '0';
    },
    [rejectInvitationGroup.pending]: (state, action) => {
      state.loading = true;
    },
    [rejectInvitationGroup.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [rejectInvitationGroup.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { selectGroup, emptySelectGroup, targetGroup, setProfileImages } =
  groupUserSlice.actions;

export default groupUserSlice.reducer;
