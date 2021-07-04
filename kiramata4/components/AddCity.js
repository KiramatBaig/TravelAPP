import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default class AddCity extends React.Component {
  
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-options" size={25} color={tintColor} />
    ),
  };

  state = {city: "",country: "" };

  handleCity=(city)=>{
    this.setState({city})
  }
  handleCountry=(country)=>{
    this.setState({country})
  }

  onSubmit=()=>{
    this.props.screenProps.add({name: this.state.city,country: this.state.country});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,color: "white",marginBottom: 20}}>Cities</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleCity}
          placeholder="City"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleCountry}
          placeholder="Country"
        />
        <TouchableOpacity style={styles.button} onPress={()=>this.onSubmit()}><Text style={styles.text}>Add City</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    backgroundColor: '#4169e1',
    padding: 8,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    fontSize: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  text: {
    color: "white",
    fontSize: 15,
  }
});
