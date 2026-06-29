import { View, Animated, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const AnimatedEjercicio = () => {
  const [translateY] = useState(new Animated.Value(-100))
  const [scale] = useState(new Animated.Value(1))
  const screenHeight = Dimensions.get('window').height

  useEffect(() => {
    const animate = () => {
      translateY.setValue(-100)
      scale.setValue(1)

      const firstDescent = Animated.timing(translateY, {
        toValue: screenHeight * 0.3,
        duration: 1500,
        useNativeDriver: true,
      })

      const expand = Animated.spring(scale, {
        toValue: 10,
        friction: 2,
        tension: 30,
        useNativeDriver: true,
      })

      const contract = Animated.spring(scale, {
        toValue: 1,
        friction: 2,
        tension: 20,
        useNativeDriver: true,
      })

      const continueDescent = Animated.timing(translateY, {
        toValue: screenHeight + 100,
        duration: 2500,
        useNativeDriver: true,
      })

      Animated.sequence([firstDescent, expand, contract, continueDescent])
        .start(() => animate())
    }

    animate()
  }, [])

  const animatedStyle = {
    transform: [{ translateY }, { scale }],
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
})

export default AnimatedEjercicio
