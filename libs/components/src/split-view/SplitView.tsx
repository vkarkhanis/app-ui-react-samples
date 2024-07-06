import React, { createRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SplitViewContext } from './context';

type SplitViewProps = {
  children: any;
};

const SplitViewContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const MIN_WIDTH = 50;

export const SplitView: React.FC<SplitViewProps> = ({ children }) => {
  const [leftWidth, setLeftWidth] = useState<undefined | number>(undefined);
  const splitPaneRef = createRef<HTMLDivElement>();

  const [separatorXPosition, setSeparatorXPosition] = useState<
    undefined | number
  >(undefined);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setSeparatorXPosition(e.clientX);
      setDragging(true);
    },
    [setSeparatorXPosition, setDragging]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging) e.preventDefault();
      if (dragging && leftWidth && separatorXPosition) {
        const newLeftWidth = leftWidth + e.clientX - separatorXPosition;
        setSeparatorXPosition(e.clientX);

        if (splitPaneRef.current) {
          const splitPaneWidth = splitPaneRef.current.clientWidth;

          if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
            setLeftWidth(splitPaneWidth - MIN_WIDTH);
            return;
          }
        }
        setLeftWidth(newLeftWidth);
      }
    },
    [
      dragging,
      leftWidth,
      separatorXPosition,
      setLeftWidth,
      setSeparatorXPosition,
    ]
  );

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const setLeftWidthHandle = (width: number | undefined) => {
    setLeftWidth(width);
  };

  return (
    <SplitViewContext.Provider
      value={{
        leftWidth: leftWidth,
        setLeftWidthHandle: setLeftWidthHandle,
        onMouseDown,
      }}
    >
      <SplitViewContainer ref={splitPaneRef}>{children}</SplitViewContainer>
    </SplitViewContext.Provider>
  );
};
