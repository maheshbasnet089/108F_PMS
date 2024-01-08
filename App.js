import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './screens/Home';
import About from './screens/About';
import CustomDrawer from './CustomDrawer';
import ProductDetail from './screens/ProductDetail';

const {Navigator,Screen} = createDrawerNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Navigator drawerContent={(props)=><CustomDrawer  {...props} />} 
      screenOptions={{
        headerStyle : {
          backgroundColor : 'green',
        },
        headerTitleStyle : {
          fontWeight : 'bold',
          color : 'white',
          fontSize :30
        },
        headerTintColor : 'blue'
      }}
      >
        <Screen name='home' component={Home}  />
        <Screen name='about' component={About} />
        <Screen name="details" component={ProductDetail} options={{drawerItemStyle : {height : 0}}} />
     
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
