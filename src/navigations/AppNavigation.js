import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import CameraScreen from '../screens/Camera/CameraScreen';
import ExpoCameraScreen from '../screens/ExpoCamera/ExpoCameraScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ScanHistoryScreen from '../screens/ScanHistory/ScanHistoryScreen';
import ScanDetailScreen from '../screens/ScanDetail/ScanDetailScreen';
import CaptureDetailsScreen from '../screens/CaptureDetails/CaptureDetailsScreen';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Scanner' component={ScannerScreen} />
      <Stack.Screen name='Camera' component={CameraScreen} />
      <Stack.Screen name='ExpoCamera' component={ExpoCameraScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='ScanHistory' component={ScanHistoryScreen} />
      <Stack.Screen name='ScanDetail' component={ScanDetailScreen} />
      <Stack.Screen name='CaptureDetails' component={CaptureDetailsScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;