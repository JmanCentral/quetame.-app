import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as Location from 'expo-location';


export default function App() {
   useEffect(() => {
    (async () => {
      // Esto verifica que los permisos que pusimos en el app.json funcionan
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("Estado del permiso:", status);
    })();
  }, []);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
