import { CenterPanel, RowLayout } from '@app-ui-react-samples/common-styles';
import { ChangeEvent, useReducer } from 'react';
import styled from 'styled-components';
import IcecreamCompositeHOC from './helper-components/IcecreamCompositeHoC';
import {
  Action,
  defaultToppings,
  reducer,
} from './helper-components/menu/state/reducer';
import { MenuOptions } from './helper-components/MenuCheckbox';
import {
  ChipsProps,
  Decor,
  IcecreamFlavours,
  IcecreamMenu,
  NutProps,
  SyrupProps,
} from './utils/types';

const NutPropsCheckboxSettings: Record<keyof NutProps, string> = {
  almonds: 'Almonds',
  walnuts: 'Walnuts',
  cashews: 'Cashews',
};

const SyrupsPropsCheckboxSettings: Record<keyof SyrupProps, string> = {
  chocolate: 'Chocolate',
  strawberry: 'Strawberry',
};

const ChipsPropsCheckboxSettings: Record<keyof ChipsProps, string> = {
  choco: 'Choco',
  milk: 'Milk',
};

const MenuContainer = styled.div`
  background-color: rgb(217, 195, 222);
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const MenuHeaderContainer = styled.div`
  border: 1px solid green;
`;

const FlavourSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  padding-bottom: 10px;
`;

const MenuContentContainer = styled.div`
  border: 1px solid red;
`;

const MenuOptionsContainer = styled.div`
  justify-content: space-around;
  margin-bottom: 10px;
`;

const ResultContainer = styled.div`
  border: 1px solid blue;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  margin: 10px;
  padding: 10px;
`;

const Label = styled.label`
  font-family: 'Lucida Console', Courier, monospace;
`;

const MenuOptionsLayout = styled(RowLayout)`
  justify-content: center;
`;

const MenuCategory = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const HoC = () => {
  const [{ nuts, chips, syrups, flavour }, dispatch] = useReducer<
    (decoratedIcecream: IcecreamMenu, action: Action) => IcecreamMenu
  >(reducer, defaultToppings);

  const handleSelection = (key: Decor) => {
    dispatch({ type: key });
  };

  const handleFlavourSelection = (value: keyof typeof IcecreamFlavours) => {
    dispatch({ type: 'flavour', payload: { value } });
  };

  const IcecreamComp: React.FC = () => (
    <IcecreamCompositeHOC {...nuts} {...chips} {...syrups} flavour={flavour} />
  );

  return (
    <MenuContainer>
      <MenuHeaderContainer>
        <CenterPanel>
          <h2>******** ICE CREAMS *********</h2>
        </CenterPanel>
        <FlavourSelection>
          {Object.keys(IcecreamFlavours).map((eachFlavour: string) => {
            return (
              <div key={eachFlavour}>
                <input
                  type="radio"
                  value={eachFlavour}
                  checked={flavour === eachFlavour}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleFlavourSelection(e.target.value)
                  }
                />
                <Label>{IcecreamFlavours[eachFlavour]}</Label>
              </div>
            );
          })}
        </FlavourSelection>
      </MenuHeaderContainer>
      <MenuContentContainer>
        <CenterPanel>
          <h3>******** Toppings *********</h3>
        </CenterPanel>

        <MenuOptionsContainer>
          <MenuOptionsLayout>
            <MenuCategory>
              <CenterPanel>
                <h4>Nuts</h4>
              </CenterPanel>
              <MenuOptions
                options={Object.keys(defaultToppings.nuts ?? {})}
                displayName={NutPropsCheckboxSettings}
                onChange={handleSelection}
              />
            </MenuCategory>

            <MenuCategory>
              <CenterPanel>
                <h4>Syrups</h4>
              </CenterPanel>
              <MenuOptions
                options={Object.keys(defaultToppings.syrups ?? {})}
                displayName={SyrupsPropsCheckboxSettings}
                onChange={handleSelection}
              />
            </MenuCategory>

            <MenuCategory>
              <CenterPanel>
                <h4>Chips</h4>
              </CenterPanel>
              <MenuOptions
                options={Object.keys(defaultToppings.chips ?? {})}
                displayName={ChipsPropsCheckboxSettings}
                onChange={handleSelection}
              />
            </MenuCategory>
          </MenuOptionsLayout>
        </MenuOptionsContainer>
      </MenuContentContainer>
      <ResultContainer>{<IcecreamComp />}</ResultContainer>
    </MenuContainer>
  );
};

export default HoC;
