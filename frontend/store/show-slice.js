import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowInformation: false,
};

const showInformationSlice = createSlice({
    name: "show",
    initialState: initialState,
    reducers: {
        showInformation: function (state) {
            state.isShowInformation = !state.isShowInformation;
        },
    },
});

export const showInformationAction = showInformationSlice.actions;
export default showInformationSlice;
