import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Time from './componentes/Time'
import Spring from './componentes/Spring'
import AnimatedEjercicio from './componentes/AnimatedEjercicio'

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AnimatedEjercicio />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingBottom: 40,
  },
})
