import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { handlePending, handleFulfieldRegister, handleFulfieldLogin, handleFulfieldLogOut, handleRefreshUser, handleRejected } from './handlers';
import { register, logIn, logOut, refreshUser } from './operations';

const arrOfThunks = [register, logIn, logOut];
const func = type => arrOfThunks.map(el => el[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleFulfieldRegister)
      .addCase(logIn.fulfilled, handleFulfieldLogin)
      .addCase(logOut.fulfilled, handleFulfieldLogOut)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...func('pending')), handlePending)
      .addMatcher(isAnyOf(...func('rejected')), handleRejected)
      
  },
});

export const authReducer = authSlice.reducer;
