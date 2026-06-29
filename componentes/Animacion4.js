import { View, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animacion4 = () => {
    const [animation] = useState(new Animated.Value(0));
    
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 360,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

    const interpolacion = animation.interpolate({
        inputRange: [0, 360], //rango de entrada de datos.
        outputRange: ["0deg", "360deg"] //rango de salida de datos.
    })

    const estiloAnimacion = {
        transform: [{
            rotate: interpolacion
        }]
    }

  return (
    <View>
        <Animated.View style={[style.caja, estiloAnimacion]}></Animated.View>
    </View>
  )
}

const style = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },
});

export default Animacion4