import { WithChocoChips, WithNuts, WithSyrups } from '../IcecreamHOC';
import { IceCream } from './Icecream';

export default WithChocoChips(
  WithNuts(WithSyrups(({ flavour }) => <IceCream flavour={flavour} />))
);
