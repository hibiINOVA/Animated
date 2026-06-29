import React, { useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const Time = () => {
  const [opacidad] = useState(new Animated.Value(0))
  const [escala] = useState(new Animated.Value(0.3))
  const [translateY] = useState(new Animated.Value(60))

  useEffect(() => {
    Animated.timing(opacidad, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()

    Animated.timing(escala, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    Animated.timing(translateY, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Animated.Image</Text>

      <Animated.Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c_P3ObD9z389_N_ZRSWwRRrHB-tr9Bqylg&s' }}
        style={[
          styles.image,
          { opacity: opacidad, transform: [{ scale: escala }] },
        ]}
        resizeMode="contain"
      />

      <Text style={[styles.subtitle, { marginTop: 30 }]}>Animated.ScrollView</Text>

      <Animated.ScrollView
        style={[styles.scroll, { transform: [{ translateY }], opacity: opacidad }]}
      >
        {['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'].map((item, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
  },
  scroll: {
    maxHeight: 220,
    width: width * 0.85,
  },
  item: {
    backgroundColor: '#4A90D9',
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default Time
