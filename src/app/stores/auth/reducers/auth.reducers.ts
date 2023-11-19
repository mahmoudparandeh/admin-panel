import {UserModel} from "../../../models/auth/user.model";
import {createReducer, on} from "@ngrx/store";
import {AuthActions} from "../actions/auth.actions";

export interface AuthState {
  token?: string;
  user?: UserModel;
  loading?: boolean;
  success?: boolean;
  error?: Error;
}

const initialAuthState: AuthState = {
  token: localStorage.getItem('accessToken') ?? undefined,
  user: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.getUser, (state, _) =>({
    ...state,
    loading: true
  })),
  on(AuthActions.getUserSuccess, (state, action) =>({
    ...state,
    loading: false,
    success: true,
    error: undefined,
    user: action.user
  })),
  on(AuthActions.getUserFailure, (state, action) =>({
    ...state,
    loading: false,
    success: false,
    error: action.error
  })),
  on(AuthActions.loginUser, (state, _) =>({
    ...state,
    loading: true
  })),
  on(AuthActions.loginUserSuccess, (state, action) =>({
    ...state,
    loading: false,
    user: action.user,
    token: action.token,
    success: true,
    error: undefined
  })),
  on(AuthActions.loginUserFailure, (_, action) =>({
    ...initialAuthState,
    loading: false,
    error: action.error
  }))
);
