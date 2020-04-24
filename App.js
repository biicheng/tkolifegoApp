//在屏幕之間移動，下一步將function獨立一隻js
// In App.js in a new project
// import * as React from 'react';
import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//導向頁面
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import TpageScreen from './src/pages/TpageScreen';
import Page3Screen from './src/pages/Page3Screen';
// import MrtLineScreen from './src/pages/mrt/MrtLineScreen';
import scrollTabView from './src/pages/mrt/scrollTabView';

// import { StackNavigator, TabNavigator, } from 'react-navigation';
// import {t2PagesScreen} from './src/pages/t2Pages'


class App extends Component{
  // function App() 
  render(){
    const Stack = createStackNavigator();
    //隱藏鰾提列
    //<Stack.Navigator screenOptions={{headerShown: false}}>
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}
              options={{ title: 'Home Page' }} />
            <Stack.Screen name="Details" component={DetailsScreen}
              options={{ title: 'Details Page' }} />
            <Stack.Screen name="Tpage" component={TpageScreen}
              options={{ title: '簡易匯率表' }} />
            <Stack.Screen name="Page3" component={Page3Screen}
              options={{ title: '分頁插件測試' }} />
            <Stack.Screen name="Mrtl" component={scrollTabView}
              options={{ title: 'scrollable-tab-view' }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
export default App;

// class HomeScreen extends Component{
//   constructor(props) {
//     super(props);
//   }
//   // function 
//   render() {
//     return (
//       <ScrollView>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <View style={{marginTop:40}}>
//           <Button
//             title="Go to Tpage"
//             onPress={() => this.props.navigation.navigate('Tpage', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             })}
//           />
//         </View>
//       </View>
//       </ScrollView>
//     );
//   }
// }

// class DetailsScreen extends Component{
//   constructor(props) {
//     super(props);
//   }
//   // function 
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <View style={{marginTop:50}}>
//           <Button
//             title="Back Home"
//             onPress={() => this.props.navigation.navigate('Home')}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// class TpageScreen extends Component{
//   constructor(props) {
//     super(props);
//     this.axios = require('axios');
//   }
//   // function 
//   render() {
//     const { itemId } = this.props.route.params;
//     const { otherParam } = this.props.route.params;
    
//     var mrtLine='';
//     const axios = require('axios');
//     axios.get("https://tkolifego.000webhostapp.com/MrtLine/ksmrtLine/r")
//     // axios.get("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/KRTC?$filter=LineNo%20eq%20'O'&$top=30&$format=JSON")
//     // axios.get("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/StationOfLine/KRTC?$top=30&$format=JSON")
//       .then((response) => response.json())
//       .then(function (response) {
//         // handle success
//         // alert(response[menber][aa][age]);
//         // alert(typeof(response));
//         alert('request_success: '+JSON.stringify(response));
//         // mrtLine=<Text>...</Text>;
//         //JSON.parse(JSON.stringify(response)).data
//         // alert('mrtLine: '+mrtLine.line);
//         // alert('request_success: '+JSON.parse(JSON.stringify(response)).data);
//         // alert(typeof(JSON.parse(JSON.stringify(response)).data))
//         console.log(JSON.parse(JSON.stringify(response.data))[20]);
//       })
//       .catch(function (error) {
//         // handle error
//         alert('request_err: '+JSON.stringify(response));
//         console.log(error);
//       })
//       .then(function (add) {
//         // always executed
//       });
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Tpage Screen...</Text>
//         <View style={{marginTop:50}}>
//           <Text>itemId: {JSON.stringify(itemId)}</Text>
//           <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//           {/* <Text>...{mrtLine}</Text> */}
//         </View>
//         <View style={{marginTop:50}}>
//           <Button
//             title="Back Home"
//             onPress={() => this.props.navigation.navigate('Home')}
//           />
//         </View>
//       </View>
//     );
//   }
// }


// // import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import 'react-native-gesture-handler';

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// // export default function App() {
// //   return (
// //     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
// //   );
// // }
// class App extends Component{
//   render(){
//     return (
//       <NavigationContainer>
//         <View>
//           <Text>...</Text>
//         </View>
//       </NavigationContainer>
//       // <>
//       //   <StatusBar barStyle="dark-content" />
//       //   <SafeAreaView>
//       //     <ScrollView
//       //       contentInsetAdjustmentBehavior="automatic"
//       //       style={styles.scrollView}>
//       //       <Header />
//       //       {global.HermesInternal == null ? null : (
//       //         <View style={styles.engine}>
//       //           <Text style={styles.footer}>Engine: Hermes</Text>
//       //         </View>
//       //       )}
//       //       <View style={styles.body}>
//       //         <View style={styles.sectionContainer}>
//       //           <Text style={styles.sectionTitle}>Step One</Text>
//       //           <Text style={styles.sectionDescription}>
//       //             Edit <Text style={styles.highlight}>App.js</Text> to change this
//       //             screen and then come back to see your edits.
//       //           </Text>
//       //         </View>
//       //         <View style={styles.sectionContainer}>
//       //           <Text style={styles.sectionTitle}>See Your Changes</Text>
//       //           <Text style={styles.sectionDescription}>
//       //             <ReloadInstructions />
//       //           </Text>
//       //         </View>
//       //         <View style={styles.sectionContainer}>
//       //           <Text style={styles.sectionTitle}>Debug</Text>
//       //           <Text style={styles.sectionDescription}>
//       //             <DebugInstructions />
//       //           </Text>
//       //         </View>
//       //         <View style={styles.sectionContainer}>
//       //           <Text style={styles.sectionTitle}>Learn More</Text>
//       //           <Text style={styles.sectionDescription}>
//       //             Read the docs to discover what to do next:
//       //           </Text>
//       //         </View>
//       //         <LearnMoreLinks />
//       //       </View>
//       //     </ScrollView>
//       //   </SafeAreaView>
//       // </>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
