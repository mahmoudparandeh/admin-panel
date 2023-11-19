import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {UserModel} from "../../../models/auth/user.model";
import {LoginDto} from "../../../models/auth/login.dto";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Get User': emptyProps,
    'Get User Success': props<{user: UserModel}>(),
    'Get User Failure': props<{error: Error}>(),

    'Login User': props<{data: LoginDto}>(),
    'Login User Success': props<{token: string, user: UserModel}>(),
    'Login User Failure': props<{error: Error}>(),
  }
})
