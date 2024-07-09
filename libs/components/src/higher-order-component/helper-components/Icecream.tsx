import { IcecreamFlavours } from '../utils/types';

export const IceCream: React.FC<{
  flavour?: keyof typeof IcecreamFlavours;
}> = ({ flavour = 'vanilla' }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      {IcecreamFlavours[flavour]} IceCream
    </div>
  );
};
