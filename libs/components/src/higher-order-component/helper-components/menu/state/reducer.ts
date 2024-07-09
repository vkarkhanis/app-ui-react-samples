import {
  DecorationProps,
  IcecreamFlavours,
  IcecreamMenu,
} from '../../../utils/types';

export type Action =
  | { type: keyof DecorationProps }
  | { type: 'flavour'; payload: { value: keyof typeof IcecreamFlavours } };

export const defaultToppings: IcecreamMenu = {
  nuts: {
    almonds: false,
    walnuts: false,
    cashews: false,
  },
  syrups: {
    chocolate: false,
    strawberry: false,
  },
  chips: {
    choco: false,
    milk: false,
  },
  flavour: 'vanilla',
};

export const reducer = (decoratedIcecream: IcecreamMenu, action: Action) => {
  switch (action.type) {
    case 'almonds':
    case 'cashews':
    case 'walnuts': {
      return {
        ...decoratedIcecream,
        nuts: {
          ...decoratedIcecream.nuts,
          [action.type]: !decoratedIcecream.nuts?.[action.type],
        },
      };
    }

    case 'chocolate':
    case 'strawberry': {
      return {
        ...decoratedIcecream,
        syrups: {
          ...decoratedIcecream.syrups,
          [action.type]: !decoratedIcecream.syrups?.[action.type],
        },
      };
    }
    case 'choco':
    case 'milk': {
      return {
        ...decoratedIcecream,
        chips: {
          ...decoratedIcecream.chips,
          [action.type]: !decoratedIcecream.chips?.[action.type],
        },
      };
    }
    case 'flavour': {
      return { ...decoratedIcecream, flavour: action.payload.value };
    }
    default: {
      return decoratedIcecream;
    }
  }
};
