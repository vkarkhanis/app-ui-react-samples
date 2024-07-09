import { addToppings } from './utils/helper';
import { BaseIcecream, DecorationProps } from './utils/types';

export const WithAllNuts = (IceCreamComponent: React.FC<BaseIcecream>) => {
  const IcecreamWithAllNuts = ({ flavour }: BaseIcecream) => {
    const decoratedString = addToppings({
      almonds: true,
      cashews: true,
      walnuts: true,
    });

    return (
      <>
        <IceCreamComponent flavour={flavour} />
        <div> --- added {decoratedString}</div>
      </>
    );
  };

  return IcecreamWithAllNuts;
};

export const WithNuts = (IceCreamComponent: React.FC<BaseIcecream>) => {
  const IcecreamWithNuts = (nutsProps: DecorationProps & BaseIcecream) => {
    const { almonds, walnuts, cashews, ...rest } = nutsProps;
    const decoratedString = addToppings({ almonds, walnuts, cashews });

    return (
      <>
        <IceCreamComponent {...rest} />
        {decoratedString && <div> --- added {decoratedString}</div>}
      </>
    );
  };

  return IcecreamWithNuts;
};

export const WithSyrups = (IceCreamComponent: React.FC<BaseIcecream>) => {
  const SyrupDecoration = (syrupProps: DecorationProps & BaseIcecream) => {
    const { strawberry, chocolate, ...rest } = syrupProps;

    const decoratedString = addToppings({ strawberry, chocolate });

    return (
      <>
        <IceCreamComponent {...rest} />
        {decoratedString && <div> --- added {decoratedString} syrups</div>}
      </>
    );
  };

  return SyrupDecoration;
};

export const WithChocoChips = (
  IceCreamComponent: React.FC<BaseIcecream>
): React.FC<BaseIcecream> => {
  const ChocoChipsDecoration = (chipsProps: DecorationProps & BaseIcecream) => {
    const { milk, choco, ...rest } = chipsProps;
    const decoratedString = addToppings({ milk, choco });

    return (
      <>
        <IceCreamComponent {...rest} />
        {decoratedString && <div> --- added {decoratedString} chips</div>}
      </>
    );
  };

  return ChocoChipsDecoration;
};
