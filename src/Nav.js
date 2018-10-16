import { StackNavigator } from 'react-navigation';
import SignUp from "./screens/SignUp";

const Nav = StackNavigator({
  Home: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      title: 'Вход'
    })
  }
});

export default Nav;
