import { useReducer } from 'react';

export function useSetState(initialState = {}) {
  const [state, setState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    initialState
  );

  return [state, setState];
}
