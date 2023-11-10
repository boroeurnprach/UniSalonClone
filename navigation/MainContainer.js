import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// Screens
import HomeScreen from './screens/HomeScreen';
import Shop from './screens/ShopScreen';
import Video from './screens/VideoScreen';
import Professor from './Professor';
import Promotion from './Promotion';

//Screen names
const homeName = "Home";
const shopName = "Shops";
const videoName = "Videos";
const proName = "Professors";
const promoName = "Promotions";



const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = 'location';
                            IconComponent = Entypo;
                        } else if (rn === shopName) {
                            iconName = 'shop';
                            IconComponent = Entypo;
                        } else if (rn === videoName) {
                            iconName = 'video';
                            IconComponent = Feather;
                        } else if (rn === proName) {
                            iconName = "person";
                            IconComponent = Ionicons;
                        } else if (rn === promoName) {
                            iconName = "gift"
                            IconComponent = MaterialCommunityIcons; // Use 
                        }
                        return <IconComponent name={iconName} size={focused ? 20 : 20} color={focused ? 'purple' : color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'purple',
                    inactiveTintColor: 'grey',

                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 20, height: 20 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={shopName} component={Shop} />
                <Tab.Screen name={videoName} component={Video} />
                <Tab.Screen name={proName} component={Professor} />
                <Tab.Screen name={promoName} component={Promotion} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
