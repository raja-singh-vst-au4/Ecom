import React, { Component } from 'react'
import { Text,ScrollView,View,TextInput,TouchableOpacity,Alert,

  
   StyleSheet,KeyboardAvoidingView,AsyncStorage, Image } from 'react-native'
   import {apiLogin} from './Const'
   //import Icon from 'react-native-vector-icons/FontAwesome';
   import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'
//   import Icon from 'react-native-vector-icons'
//  import  Header1 from './Header'
// import Icon from 'react-native-vector-icons/AntDesign';

class Login extends Component {
    constructor(props) {
        super(props)
        this.user= React.createRef();
        this.passwd = React.createRef();
        this.state = {
    username:'',
   password:'' ,
   asyncUserInfo:'',
    isLoading:false           
               }
        
    }
    loginHandler=()=>
    {
     
        let data = new FormData();
        data.append(  "action","login",);
        data.append( "email",this.state.username,);
        data.append(   "password",this.state.password,);
       
   
   fetch(apiLogin+`?action=login&email=${this.state.username}&password=${this.state.password}`,
            {
            method:'POST',
            headers: {
              
                'content-type': "application/json"
              
        },
        
            }
     
            )
            .then(response => {
                
                if (response.status == 200) {
                    return response.json();
                
                }
              // alert('true')
            })
            .then( responseJson => {
                let str = responseJson;
             //  console.log(str)


                if(str[0].code==="1"){
                    this.setState({ isLoading: false,asyncUserInfo:str[0] }, () => {
                        this.storeToken()
                     
                      
                        
                    })
                   
                }
          
                else  {

                    this.setState({ isLoading: false}, () => {
                        
                        Alert.alert(
                            'Unable to fetch detail',
                            "Please retry again after some time",
                            [
                                { text: 'OK', onPress: () =>console.log("") },
                            ],
                            { cancelable: false },
                        );
                        this.user.current.clear();
                        this.passwd.current.clear();
                    })
                } 
            })
            .catch(error => {
                console.error(error);
            });
    }   
    storeToken = async () => {

        try {
            await AsyncStorage.setItem('asyncUserInfo', JSON.stringify(this.state.asyncUserInfo)).then(
                 this.props.navigation.navigate('Signup')
                
                )
        } catch (e) {
            console.log(e)
        }
    }

      
    render() {
     
        return (
       <View  style={styles.background}>
          
                      
                
                 
                  <ScrollView>
                  <KeyboardAvoidingView >
                  
                 <View style= {{paddingTop:70}} > 
                {/* <View> */}
                 <Text style = {styles.headline}>
                      Login
                      </Text>
                      {/* </View> */}
                    <Image source ={require('../Assets/LoginImage.png')}/>
                 </View>
               <View style = {{alignItems:'center'}}>
                 {/* <View style={{paddingTop:300}} > */}
               
                <View style = {{marginTop:20, }} >
                 
                <TextInput 
                style={styles.rectangle3}
                placeholder = '      Email'
                placeholderTextColor='white'
                onChangeText={(text)=>{this.setState({username:text})}}
                 ref = {this.user}
               />
               </View>
               <View style = {{padding:20}}>
               <TextInput  style={styles.rectangle3}
               placeholder = '     Password'
               
               placeholderTextColor='white'
               onChangeText={(text)=>{this.setState({password:text})}}
                ref= {this.passwd}
           

                         secureTextEntry= {true}  /> 
                  
                                        </View>
                                        <View style= {{padding:20,flexDirection:'row'}}>
        <Text style= {styles.alreadyHave}>
        Forgot your password?

        </Text>
        <TouchableOpacity 
                    
                    onPress={()=>this.click()}
                   >
                  {/* <Icon 
                
                 
                 
        reverse
        name='long-arrow-right'
        type='fontAwesome'
        color='#ef3651'
        size={55}
     
        <
      /> */}
      <View>
      <ion-icon name="arrow-forward"></ion-icon>
      </View>
         
        
         
        

        </TouchableOpacity>
    </View>
               <View  style ={{alignSelf:'center'}}>

                   <TouchableOpacity
                  style={[ styles.rectangle]}
                  >
                       <Text 
                       onPress={()=>this.loginHandler()}
                       style={styles.login} >
                           Login
                       </Text>
                       </TouchableOpacity>
               </View >
                <View style= {{padding:20,alignSelf:'center'}}>
                    <TouchableOpacity>
                    <Text style= {styles.loginAs}>Login as a vendor</Text>
                    </TouchableOpacity>
                </View>
              
             
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
        alignSelf:'center'
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
        width: 94,
        height: 50,
        color: '#f6f6f6',
        // fontFamily: 'Metropolis',
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
        flex:1
      },
      loginAs: {
       
        height: 20,
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 20,
       
        
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

})
export default Login