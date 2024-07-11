import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Home = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="screen1" backBehavior="history">
      <Drawer.Screen
        name="screen1"
        component={Screen1}
        options={{ title: 'Screen 1' }}
      />
      <Drawer.Screen
        name="screen2"
        component={Screen2}
        options={{ title: 'Screen 2' }}
      />
    </Drawer.Navigator>
  );
};

export default Home;
