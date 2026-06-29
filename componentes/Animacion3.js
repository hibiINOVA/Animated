import { View, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animacion3 = () => {
    const [animation] = useState(new Animated.Value(14));
    
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 40,
            duration: 500,
        }).start();
    }, []);

  return (
    <View>
        <Animated.Text style={[style.texto, {fontSize: animation}]}>hola</Animated.Text>
    </View>
  )
}

const style = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion3