import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from './components/home'
import { WorkersScreen } from './components/workers'
import { FarmsScreen } from './components/farms'
import { AccountScreen } from './components/account'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          switch (route.name){
            case "Home":
              iconName=focused ? 'home-sharp' : 'home-outline';
              break;
            case "Workers":
              iconName=focused ? 'flag-sharp' : 'flag-outline';
              break;
            case "Farms":
              iconName=focused ? 'earth' : 'earth-outline';
              break;
            case "Account":
              iconName=focused ? 'search-circle' : 'search-circle-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Workers" component={WorkersScreen}/>
        <Tab.Screen name="Farms" component={FarmsScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
