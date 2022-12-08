import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  name: undefined,
  img:undefined,
};

export const ApkContext = createContext(INITIAL_STATE);

const ApkReducer = (state, action) => {
  switch (action.type) {
    case "APK_NAME":
      return action.payload;
    case "RESET_NAME":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const ApkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApkReducer, INITIAL_STATE);
  return (
    <ApkContext.Provider
      value={{
        name: state.name,
        img:state.img,
        dispatch,
      }}
    >
      {children}
    </ApkContext.Provider>
  );
};