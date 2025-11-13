import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes")) // corrected
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes)); 
      toast("Paste Created Successfully");
    },

    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex(p => p._id === action.payload._id);
      if (index >=0) {
        state.pastes[index] = action.payload; 

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Updated Successfully");
      }
    },

    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("All Pastes Cleared");
    },

    removeFromPastes: (state, action) => {
      state.pastes = state.pastes.filter(p => p._id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Removed Successfully");
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;
export default pasteSlice.reducer;
