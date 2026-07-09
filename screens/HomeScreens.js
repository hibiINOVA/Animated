import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

function HomeScreens({navigation}) {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subtitulo}>Te encuentras en la pantalla de inicio</Text>
        <Pressable style={styles.btn}>
            <Text style={styles.texto}
            onPress={() => navigation.navigate('Mi Perfil')}>
            Mi perfil
            </Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        color: '#475569',
        marginBottom: 30,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue', // Azul aciano
        width: 280,
        height: 80,
        justifyContent: 'center',          // Centra el texto verticalmente
        alignItems: 'center'               // Centra el texto horizontalmente
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
export default HomeScreens