import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducers";

const authSelector = createFeatureSelector<AuthState>('auth');

const selectToken = createSelector(authSelector, (state) => state?.token);
const selectSuccess = createSelector(authSelector, (state) => state?.success);
const selectFailure = createSelector(authSelector, (state) => state?.error);
const selectLoading = createSelector(authSelector, (state) => state?.loading);
const selectUser = createSelector(authSelector, (state) => state?.user);

export const AuthSelectors = {
    token: selectToken,
    success: selectSuccess,
    error: selectFailure,
    user: selectUser,
    loading: selectLoading
}
