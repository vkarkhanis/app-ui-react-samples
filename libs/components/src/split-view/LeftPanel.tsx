import React, { createRef, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SplitViewContext } from './context';

const LeftPanelContainer = styled.div<{ minWidth?: string }>`
  ${({ minWidth }) => {
    return css`
      min-width: ${minWidth};
    `;
  }}
`;

export const LeftPanel: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  minWidth?: number;
}> = ({ children, minWidth = 10 }) => {
  const leftRef = createRef<HTMLDivElement>();

  const minWidthValue = minWidth + '%';

  const { leftWidth, setLeftWidthHandle: setLeftWidth } =
    useContext(SplitViewContext);

  useEffect(() => {
    if (leftRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftRef.current?.clientWidth);
        return;
      }

      leftRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftRef, leftWidth, setLeftWidth]);

  return (
    <LeftPanelContainer ref={leftRef} minWidth={minWidthValue}>
      {children}
    </LeftPanelContainer>
  );
};
