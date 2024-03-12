import { FETCH_ACTIONS } from "../actions";
const initalState = {
  items: [],
  loding: false,
  error: null,
};

const InventoryReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.PROGRASS: {
      return {
        ...state,
        loding: true,
      };
    }
    case FETCH_ACTIONS.SUCCESS: {
      return {
        ...state,
        loding: false,
        items: action.data,
      };
    }
    case FETCH_ACTIONS.ERROR: {
      return {
        ...state,
        loding: false,
        error: action.data,
      };
    }
  }
};
export { InventoryReducer, initalState };
