import { createStackNavigator, Header } from "@react-navigation/stack";
import { Routes } from "./Routs";
import countrydetails from "../screens/countrydetails";
import countrylist from "../screens/countrylist";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CountryList from "../screens/countrylist";
import countrywiki from "../screens/countrywiki";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabTitle from "../components/tabTitle/tabtitle";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const MainTabNavigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name={Routes.countrylist} options={{tabBarLabel :() => <TabTitle title={'Countries'}/>}} component={countrylist} />
            <Tab.Screen name={Routes.countrywiki} options={{tabBarLabel :() => <TabTitle title={'Country Wiki'}/>}} component={countrywiki}/>
        </Tab.Navigator>

    )
}

const MainMenudrawer = () =>{
    return(
        <Drawer.Navigator>
        <Drawer.Screen name={Routes.countrylist} component={CountryList}/>
        <Drawer.Screen name={Routes.countrywiki} component={countrywiki}/>
        </Drawer.Navigator>
    );
}

const MainNavigation=()=>{

return(
    
<Stack.Navigator initialRouteName={Routes.countrylist}>
<Stack.Screen name={'Countries'} component={MainTabNavigation}/>
<Stack.Screen name={Routes.countrydetails} component={countrydetails}/>
</Stack.Navigator>
)

}
export default MainNavigation;