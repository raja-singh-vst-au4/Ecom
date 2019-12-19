import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import Forgot from './Forgot'
import Signup from './Signup'
import Mainpage2 from './Mainpage2'





const MainNavigator = createStackNavigator({
  //  Mainpage2:{screen:Mainpage2},
  Login: {screen: Login},
    Signup :{screen :Signup},
    Forgot:{screen:Forgot},
  
    // Employees:{screen:Employees},
       //  Nextpage:{screen:Nextpage},
    //    Dashboard :{screen : Dashboard}
  },

  {
    defaultNavigationOptions: {
     header: null
    }},
  
  );
  
//   const Navigate = createAppContainer(MainNavigator);
//   export default Navigate
  
  export default createAppContainer(MainNavigator);;