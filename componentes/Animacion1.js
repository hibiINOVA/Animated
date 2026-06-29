import { Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animation1 = () => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1, //el valor al que va a llegar la animacion
            duration: 500, //tiempo en milisegundos que dura la animacion
        }).start();
    }, []);

  return (
    <Animated.View style={{ opacity: animation }}>
      <Text style={style.texto}>Animation1</Text>
    </Animated.View>
  )
}

const style = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Animation1