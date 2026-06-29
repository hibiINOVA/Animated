import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const Animacion5 = () => {
    const [animation] = useState(new Animated.Value(1));
    
    const presionarBtn = () => {
        Animated.spring(
            animation, {
                toValue: 0.8,
                useNativeDriver: true
            }
        ).start();
    }

    const soltarrBtn = () => {
        Animated.spring(
            animation, {
                toValue: 1,
                friction: 4,
                tension: 10,
                useNativeDriver: true
            }
        ).start();
    }



    const estiloAnimacion = {
        transform: [{
            scale: animation
        }]
    }

  return (
    <View style={styles.contenedor}>
        <TouchableWithoutFeedback
        onPressIn={presionarBtn}
        onPressOut={soltarrBtn}
        >
            <Animated.View style={[styles.btn, estiloAnimacion]}>
                <Text style={styles.texto}>Iniciar secion</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
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
export default Animacion5