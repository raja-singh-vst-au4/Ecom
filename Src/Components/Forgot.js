import React, { Component } from 'react';
import { Text,ScrollView,View,TextInput,TouchableOpacity,

  
  StyleSheet,KeyboardAvoidingView,AsyncStorage, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome';




 class Forgot extends Component {


    constructor(props) {
        super(props)
        this.user= React.createRef();
        this.state = {
             forgotMail:''
        }
    }
    emailValidate=()=>
    {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return ( re.test(String(this.state.forgotMail).toLowerCase()));
         this.user.current.clear()
    }
    
    render() {
        return (
            <View  style={styles.background}>
          
                      
                
                 
            <ScrollView>
            <KeyboardAvoidingView >
            
           <View style= {{paddingTop:120}} > 
          {/* <View> */}
           <Text style = {styles.headline}>
           Forgot password
                </Text>
                {/* </View> */}
              <Image source ={require('../Assets/LoginImage.png')}/>
           </View>
           <View>
               <Text style = {styles.pleaseEnter}>
               Please, enter your email address. You will receive a link to create a new password via email.
               </Text>
               </View>
         <View style = {{alignItems:'center'}}>
         <View style = {{marginTop:20, }} >
           
           <TextInput 
           style={[styles.rectangle3]}
           placeholder = '      Email'
           placeholderTextColor='white'
           onChangeText={(text)=>{this.setState({forgotMail:text})}}
           onSubmitEditing={()=>this.emailValidate(),()=>{{(this.emailValidate())?null:
        
           
          null}} }
            ref = {this.user}
          />
          </View>
       
         <View  style ={{alignSelf:'center',padding:20}}>
      
             <TouchableOpacity
            style={[ styles.rectangle]}
             >
                 <Text 
                 onPress={()=>this.props.navigation.navigate('Login')}
                 style={styles.login} >
                     Send
                 </Text>
                 </TouchableOpacity>
         </View >
        
        
       
          </View>
       <View>
           
      
      
      
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
       
         
         
         
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
      alignSelf:'center',
      
    },
    rectangle: {
      width: wp('90%'),
      height: 48,
      shadowColor: 'rgba(239, 54, 81, 0.35)',
      shadowOffset: { width: 4, height: 0 },
      shadowRadius: 8,
      borderRadius: 25,
      backgroundColor: '#ef3651',
      
    },
    headline: {
    width: 286,
    height: 50,
    color: '#f6f6f6',
    fontFamily: 'Metropolis',
    fontSize: 34,
    fontWeight: '700',
    marginBottom:15,
    marginLeft:15
  },
  
    rectangle3: {
      width: wp('90%'),
      height: 64,
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: { width: 1, height: 0 },
      shadowRadius: 8,
      borderRadius: 4,
      backgroundColor: '#2a2c36',
      color:'#f5f5f5',
     
   
    },
   
    login: {
      // width: 44,
      height: 20,
      color: '#f5f5f5',
      // fontFamily: 'Metropolis',
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 20,
      alignSelf:'center',
      marginTop:12
     
   
    },
    background: {
      width: wp('100%'),
      height: hp('100%'),
      backgroundColor: '#1e1f28',
      flex:1,
      justifyContent:'space-around'
    },
    alreadyHave: {
      width: 176,
      height: 20,
      color: '#f6f6f6',
      fontFamily: 'Metropolis',
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      marginLeft:150
    },
    vector: {
      width: 16,
      height: 8,
      backgroundColor: '#ef3651',
    },
    pleaseEnter: {
        width: 343,
        height: 40,
        color: '#f6f6f6',
        fontFamily: 'Metropolis',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
        marginTop:30,
        marginLeft:20

      },
      Border:{
          borderColor:'red'
      }
  });

export default Forgot
