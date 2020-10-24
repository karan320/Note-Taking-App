import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/NameContext';

const navigator = createStackNavigator(
    {
        Home: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            title: 'Note App'
        }
    }
);



const App = createAppContainer(navigator);

export default () => {
    return <Provider>
         <App />
     </Provider>
}