import { createContext } from 'react';

type SplitViewContextValue = {
  leftWidth: number | undefined;
  // eslint-disable-next-line no-unused-vars
  setLeftWidthHandle: (leftWidth: number | undefined) => void;
  // eslint-disable-next-line no-unused-vars
  onMouseDown: (e: React.MouseEvent) => void;
};

export const SplitViewContext = createContext<SplitViewContextValue>({
  leftWidth: undefined,
  // eslint-disable-next-line no-unused-vars
  setLeftWidthHandle: (leftWidth: number | undefined) => leftWidth,
  onMouseDown: (e: React.MouseEvent) => e
});
