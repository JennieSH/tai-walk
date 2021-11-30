import { createContext, Dispatch, useReducer } from "react";

enum Loading_Action_Type {
  ON = "on",
  OFF = "off"
}

type LoadingContextProviderProps = {
  children: React.ReactNode;
};

type LoadingAction = { type: Loading_Action_Type.OFF | Loading_Action_Type.ON };

const initState = true;

const LoadingContext = createContext<{
  loadingState: boolean;
  loadingDispatch: Dispatch<LoadingAction>;
}>({
  loadingState: initState,
  loadingDispatch: () => null
});

const loadingReducer = (state: boolean, action: LoadingAction) => {
  switch (action.type) {
    case Loading_Action_Type.OFF:
      return false;
    case Loading_Action_Type.ON:
      return true;
    default:
      return state;
  }
};

const LoadingProvider = ({ children }: LoadingContextProviderProps) => {
  const [loadingState, loadingDispatch] = useReducer(loadingReducer, initState);
  return (
    <LoadingContext.Provider value={{ loadingState, loadingDispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { Loading_Action_Type, LoadingContext, LoadingProvider };
