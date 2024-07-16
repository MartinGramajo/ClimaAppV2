import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataClima: {
    name: "",
    coord: {
      lon: "",
      lat: "",
    },
    main: {
      feels_like: "",
      humidity: "",
      temp: "",
      temp_max: "",
      temp_min: "",
    },
    sys: {
      country: "",
    },
    weather: [
      {
        description: "",
        icon: "",
      },
    ],
    wind: {
      speed: "",
    },
  },
  dataForm: {
    city: "tucuman",
    country: "arg",
  },
  mostrarSpinner: true,
  status: "idle",
  error: null,
};

export const consultarApi = createAsyncThunk(
  "clima/consultarApi",
  async (dataForm) => {
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${dataForm.city},${dataForm.country}&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${dataForm.city},${dataForm.country}&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
  }
);

const climaSlice = createSlice({
  name: "clima",
  initialState,
  reducers: {
    setDataForm: (state, action) => {
      state.dataForm = action.payload;
    },
    resetForm: (state) => {
      state.dataForm = { city: "tucuman", country: "arg" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(consultarApi.pending, (state) => {
        state.mostrarSpinner = true;
      })
      .addCase(consultarApi.fulfilled, (state, action) => {
        state.dataClima = action.payload;
        state.mostrarSpinner = false;
      })
      .addCase(consultarApi.rejected, (state, action) => {
        state.error = action.error.message;
        state.mostrarSpinner = false;
      });
  },
});

export const { setDataForm, resetForm } = climaSlice.actions;

export default climaSlice.reducer;
