export type NutProps = {
  walnuts?: boolean;
  almonds?: boolean;
  cashews?: boolean;
};

export type SyrupProps = {
  chocolate?: boolean;
  strawberry?: boolean;
};

export type ChipsProps = {
  choco?: boolean;
  milk?: boolean;
};

export const IcecreamFlavours: Record<string, string> = {
  vanilla: 'Vanilla',
  strawberry: 'Strawberry',
  chocolate: 'Chocolate',
  butterscotch: 'Butterscotch',
};

export type SyrupDecorationProps = NutProps & SyrupProps;
export type DecorationProps = SyrupDecorationProps & ChipsProps;
export type Decor = keyof DecorationProps;

export type SelectedToppings = {
  nuts?: NutProps;
  syrups?: SyrupProps;
  chips?: ChipsProps;
};
export type BaseIcecream = {
  flavour?: keyof typeof IcecreamFlavours;
};

export type IcecreamMenu = SelectedToppings & BaseIcecream;
