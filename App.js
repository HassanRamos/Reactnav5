import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function HomeScreen( {navigation})
{
  return(
    <View>
      <Text>Home screen</Text>
      <Button title='Navigate to Deatil screen' onPress={()=>{
        navigation.navigate('Details')
      }}/>
    </View>
  )
}
function DetailScreen({navigation})
{
  return(
    <View>
      <Text>DetailScreen</Text>
      <Button title='Navigate to Home screen' onPress={()=>{
        navigation.navigate('Home')
      }}/>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

