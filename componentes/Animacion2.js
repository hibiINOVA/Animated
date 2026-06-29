import { Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animacion2 = () => {
    const [animation] = useState(new Animated.Value(0));
    
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 450, //el valor al que va a llegar la animacion
            duration: 10000, //tiempo en milisegundos que dura la animacion
        }).start();
    }, []);

  return (
    <Animated.View style={[style.caja, { width: animation }]}>
      
    </Animated.View>
  )
}

const style = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion2