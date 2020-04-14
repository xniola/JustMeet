import React from 'react'
import { View, Text,Dimensions,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class InputTopicSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          topic: ''
        };
      }


    render(){
        return(
            <View>
            <Text style={styles.text}>
            Scegli Categoria da cercare
          </Text>
                  <RNPickerSelect
                    style={styles.form}
                    onValueChange={(value) => this.setState({topic: value})}
                    items={[
                        { label: 'Studio', value: 'STUDIO' },
                        { label: 'Amici', value: 'AMICI' },
                        { label: 'Sport', value: 'SPORT' },
                        { label: 'Party', value: 'PARTY' },
                        { label: 'Generale', value: 'GENERALE' },
                          ]}
                      />

            <TouchableOpacity
             disabled={this.state.topic == ''}
              style={styles.button}
              onPress = {() => this.props.navigation.navigate("Lista Eventi [TOPIC]",{
                fullName: this.props.route.params.fullName,
                email: this.props.route.params.email,
                topic: this.state.topic
              })}>
                <Text style = {styles.text}> Cerca la categoria "{this.state.topic}" </Text>
              </TouchableOpacity>
            </View>
        )
    }
}


const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25,
        marginBottom: 25
    },
    inputContainer: {
        marginBottom: 20,
        marginTop: 20
    },
    btnPubblica: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      backgroundColor: '#448AFF',
      justifyContent: 'center',
      marginTop: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginTop: 20
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  form: {
    marginTop: 20,
    marginBottom: 20
  }
  })