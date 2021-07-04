import React from 'react';
import { View,Text,FlatList,TouchableOpacity,StyleSheet,TextInput } from 'react-native';

export default class CityDetail extends React.Component{

static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4169e1',
      },
    };
  };

  state={name: "",detail: ""}

  handleName=(name)=>{
    this.setState({name})
  }
  handleDetail=(detail)=>{
    this.setState({detail})
  }

onSubmit=()=>{
    this.props.screenProps.addLocation(this.props.navigation.getParam('city').id,{name: this.state.name,detail: this.state.detail});
    this.props.navigation.navigate('Cities')
  }

render(){
  return(
    <View style={styles.container}>
    <FlatList
    data={this.props.navigation.getParam('city').locations}
    renderItem={({item})=>{
      return(
        <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text,{color: "grey"}}>{item.detail}</Text>
        </View>
      )
    }}
    />
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleName}
          placeholder="Name"
          placeholderTextColor= "white"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleDetail}
          placeholder="Detail"
          placeholderTextColor= "white"
        />
        <TouchableOpacity style={styles.button} onPress={()=>this.onSubmit()}><Text style={styles.text,{color: "white"}}>Add Location</Text></TouchableOpacity>
    </View>
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
    backgroundColor: "#d3d3d3",
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#4169e1',
    marginBottom: 20,
    borderRadius: 2,
    color: "white",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#4169e1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    color: "white"
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }
});