import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreens';
import PerfilScreen from './screens/PerfilScreen';
import ConfigScreen from './screens/ConfigScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={
            {
              headerTitleAlign: 'right',
              headerStyle: {
                backgroundColor: '#F4511E'
              },
              headerTintColor: '#fff'
            }
          }
        >
          <Stack.Screen name='Inicio' component={HomeScreen}
            screenOptions={{
              title: 'Menu principal',
              headerStyle: { backgroundColor: '#10B981' },
              headerTintColor: '#fff'
            }} />

          <Stack.Screen name='Mi Perfil' component={PerfilScreen}
            screenOptions={{
              title: 'Mi Perfil',
              headerStyle: { backgroundColor: '#3B82f6' },
              headerTintColor: '#fff'
            }} />

            <Stack.Screen name='Configuracion' component={ConfigScreen}
            screenOptions={{
              title: 'Configuración',
              headerStyle: { backgroundColor: '#64748B' },
              headerTintColor: '#fff'
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});