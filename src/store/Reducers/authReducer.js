// import { createSlice} from "@reduxjs/toolkit";

// export const authReducer= createSlice(
//   {
//     name: "auth",
//     initialState: {
//       succesMessages:'',
//       errorMessages:'',
//       loader: false,
//       userInfo: '',
//     },
//     reducers: {},
//     extraReducers: {

//     },
//   }
// );

// export default authReducer.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api.js";

export const admin_login = createAsyncThunk(
  'auth/admin_login',
    async (info) => {
      console.log(info);
        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true })
            console.log(data);
        } catch (error) {
        }
    }
)


export const fetchUser = createAsyncThunk("auth/fetchUser", async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  return response.json();
});

const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessages: "",
    errorMessages: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loader = false;
      state.userInfo = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loader = false;
      state.errorMessages = action.error.message;
    });
  },
});

export default authReducer.reducer;
