import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  FavoriteScreen,
  BookingScreen,
  CitiesScreen,
  ProfileScreen,
} from "../screen";

import MenuItems from "../menu/MenuItems";

const Drawer = createDrawerNavigator();

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <MenuItems {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} />
        <Drawer.Screen name="Bookings" component={BookingScreen} />
        <Drawer.Screen name="Cities" component={CitiesScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoutes;
