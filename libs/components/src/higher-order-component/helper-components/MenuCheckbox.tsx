import {
  CenteredColumnLayout,
  CenteredRowLayout,
} from '@app-ui-react-samples/common-styles';
import React from 'react';
import styled from 'styled-components';
import { Decor, DecorationProps } from '../utils/types';

const MenuText = styled.h5`
  font-family: cursive;
  font-weight: normal;
  font-style: italic;
`;

type MenuCheckboxProps = {
  value: Decor;
  displayName: string;
  onChange: (value: Decor) => void;
};

export const MenuCheckbox: React.FC<MenuCheckboxProps> = ({
  value,
  displayName,
  onChange,
}) => {
  const handleChange = () => {
    onChange?.(value as Decor);
  };
  return (
    <>
      <input type="checkbox" onChange={handleChange} />
      <MenuText>{displayName}</MenuText>
    </>
  );
};

export const MenuOptions: React.FC<{
  options: string[];
  displayName?: Partial<Record<keyof DecorationProps, string>>;
  onChange: (value: Decor) => void;
}> = ({ options, displayName, onChange }) => {
  return (
    <CenteredColumnLayout>
      {options.map((eachKey: string) => {
        const key = eachKey as Decor;
        return (
          <CenteredRowLayout key={key}>
            <MenuCheckbox
              value={key}
              displayName={displayName?.[key] ?? eachKey}
              onChange={onChange}
            />
          </CenteredRowLayout>
        );
      })}
    </CenteredColumnLayout>
  );
};
