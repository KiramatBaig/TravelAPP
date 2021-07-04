import React from 'react';
import { View,Text,FlatList,StyleSheet,TouchableOpacity,Button } from 'react-native';

export default class Cities extends React.Component{

static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4169e1',
      },
    };
  };
  


render(){
  return(
    <View style={styles.container}>
    <FlatList
    data={this.props.screenProps.list}
    renderItem={({item})=>{
      return(
        <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('City Detail',{city: item})}><Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text,{color: "grey"}}>{item.country}</Text></TouchableOpacity>
        </View>
      )
    }}
    />
    </View>
  )
}
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#d3d3d3"
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  }
});