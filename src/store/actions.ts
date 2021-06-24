import * as AppActionCreators from "./app/actions";
import * as AppThunksCreators from "./app/thunks";
import * as DataActionCreators from "./data/actions";
import * as DataThunksCreators from "./data/thunks";

export const ActionCreators = {
  ...AppActionCreators,
  ...AppThunksCreators,
  ...DataActionCreators,
  ...DataThunksCreators,
};
