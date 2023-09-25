import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import LibraryScreen from "./screens/LibraryScreen";
import LikedSongsScreen from "./screens/LikedSongsScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import SongInfoScreen from "./screens/SongInfoScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white", marginBottom: 3 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarLabelStyle: { color: "white", marginBottom: 3 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search-circle" size={32} color="white" />
            ) : (
              <Ionicons name="search-circle-outline" size={32} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          headerShown: false,
          tabBarLabelStyle: { color: "white", marginBottom: 3 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="my-library-music" size={24} color="white" />
            ) : (
              <MaterialIcons name="my-library-music" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: "white", marginBottom: 3 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="white" />
            ) : (
              <Ionicons name="person-outline" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Liked"
          component={LikedSongsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={SongInfoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
