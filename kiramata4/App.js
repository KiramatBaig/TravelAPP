import React from 'react';
import { View } from 'react-native';
import CitiesList from './components/CitiesList';
import CityDetail from './components/CityDetail';
import AddCity from './components/AddCity';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from 'react-native-vector-icons';

const StackNavigator = createStackNavigator({
  'Cities': CitiesList,
  'City Detail': CityDetail,
});
const TabNavigator = createBottomTabNavigator(
  {
    AddCity: AddCity,
    Cities: StackNavigator,
    
  },
  {
    tabBarOptions: {
      activeTintColor: '#4169e1',
    },
  }
);
StackNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons name="people" size={25} color={tintColor} />
  ),
};


const Container = createAppContainer(TabNavigator);

let id=3
export default class App extends React.Component {

state={list: [{id:1,name: "Islamabad",country: "Pakistan",locations: [{name: "Margalla Hills",detail: "Trekking"}]},{id:2,name: "Istanbul",country: "Turkey",locations: [{name: "Blue Mosque",detail: "Historic Building"}]},{id:3,name: "Vancouver",country: "Canada",locations: [{name: "Gastown",detail: "Architecture"}]},]}

add=(obj)=>{
    id++
    this.setState({list: [...this.state.list,{id: id,name: obj.name,country: obj.country}]})
    alert("City Added!")
  }
  addLocation=(id,obj)=>{
    this.setState((prevState)=>({list: prevState.list.map((item)=>{
      if(item.id===id){
        return {...item,locations: [...item.locations||[],obj]}
      }
      else
      return item
    })}))
  }

  render() {
    return (
      <Container
        screenProps={{ list: this.state.list, add: this.add,addLocation: this.addLocation }}
      />
    );
  }
}

