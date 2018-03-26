import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        city: '',
        forecast: {
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=78fe49ceb1f9bc3eeae5b3900d4e2576&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
          <View style={styles.inputtext3}>
            <Text style={styles.text2}>Masukkan Nama Kota</Text>
          </View>
          <View style={styles.inputtext2}>
              <TextInput
                style={styles.text3}
                placeholder="Masukkan"
                onChangeText={(city) => this.setState({ city })}
              />
          </View>
          <View style={styles.inputtext3}>
              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#FF3D00"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>
          </View>
          <View style={styles.infocuaca}>
              <View style={styles.tampilinfo}>
                <Text style={styles.text}>
                  Kota = {this.state.city} {'\n'}
                </Text>
                <Text style={styles.text}>
                  Cuaca = {this.state.forecast.main} {'\n'}
                </Text>
                <Text style={styles.text}>
                  Desc = {this.state.forecast.description} {'\n'}
                </Text>
              </View>
            </View>
          <View style={styles.footer}>
            <Text style={styles.textfooter}>Copyright @m13</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F8BBD0',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#880E4F',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#E91E63',
    flex: 2,
    justifyContent: 'center',
    margin: 10
  },
  inputtext2: {
    backgroundColor: '#FCE4EC',
    flex: 2,
    justifyContent: 'center',
    margin: 10
  },
  inputtext3: {
    backgroundColor: '#E91E63',
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  infocuaca: {
    backgroundColor: '#C51162',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  tampilinfo: {
    backgroundColor: '#C51162',
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#880E4F',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#E8F5E9',
    flexDirection: 'row',
  },

  text: {
    padding: 10, fontSize: 20, color: 'white'
  },
  text3: {
    padding: 10, fontSize: 20, color: 'black', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight: 'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
  },
  textfooter: {
    padding: 15, fontSize: 15, color: 'white', textAlign: 'center', fontWeight: 'bold'
  }
});
