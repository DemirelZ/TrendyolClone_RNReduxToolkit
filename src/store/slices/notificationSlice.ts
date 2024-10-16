import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Notification, NotificationSliceProps} from '../../models/models';
import {getNotifications} from '../actions/notificationAction';

const initialState: NotificationSliceProps = {
  notifications: [],
  pending: false,
  error: false,
};

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNotifications.pending, state => {
        state.pending = true;
      })
      .addCase(
        getNotifications.fulfilled,
        (state, action: PayloadAction<Notification[]>) => {
          (state.pending = false), (state.notifications = action.payload);
        },
      )
      .addCase(getNotifications.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default NotificationSlice.reducer;
