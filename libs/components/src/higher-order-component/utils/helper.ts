import { Decor, DecorationProps } from './types';

export const addToppings = (toppings: DecorationProps) => {
  const decoratedString = Object.keys(toppings)
    .filter((eachEntry) => toppings[eachEntry as Decor])
    .join(', ');

  return decoratedString.lastIndexOf(',') === -1
    ? decoratedString
    : decoratedString.slice(0, decoratedString.lastIndexOf(',')) +
        ' and ' +
        decoratedString.slice(decoratedString.lastIndexOf(',') + 1);
};

export const hasToppings = (toppings?: DecorationProps) => {
  return (
    toppings &&
    Object.keys(toppings).find((eachEntry) => toppings[eachEntry as Decor])
  );
};
