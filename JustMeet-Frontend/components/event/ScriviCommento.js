import React from 'react'
import { View, Text,Dimensions,StyleSheet,TextInput,TouchableOpacity, Alert,ScrollView} from 'react-native';

export default class ScriviCommento extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          body: ''
        };
      }
    
    
     handleBody = (text) => {
        this.setState({ body: text })
     }


    render(){
        return(
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder={'Scrivi commento...'}
                    placeholderTextColor={'grey'}
                    underlineColorAndroid='transparent' 
                    value = {this.state.body}
                    onChangeText = {this.handleBody}
                />
            

                <TouchableOpacity
                disabled={(this.state.body == '')}
                 style={styles.button}
                 onPress = {() => 
                   this.props.navigation.navigate('Pubblica Commento',{
                     body: this.state.body,
                     idEvento: this.props.route.params.idEvento,
                     email: this.props.route.params.email
                   })
               } >
                   <Text style = {styles.text}>Pubblica Commento</Text>
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
        marginBottom: 25,
        marginTop:20
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
  }
})