import React, { useState, useEffect } from 'react'
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const FLAT_DATA = Array.from({ length: 10 }, (_, i) => ({
  key: String(i + 1),
  text: `Elemento ${i + 1}`,
}))

const SECTIONS = [
  { title: 'Frutas', data: ['Manzana', 'Banana', 'Naranja', 'Uva'] },
  { title: 'Verduras', data: ['Lechuga', 'Tomate', 'Zanahoria', 'Pepino'] },
  { title: 'Carnes', data: ['Pollo', 'Res', 'Cerdo', 'Pescado'] },
]

const Spring = () => {
  const [flatAnims] = useState(() =>
    FLAT_DATA.map(() => new Animated.Value(0))
  )

  const [sectionAnims] = useState(() => {
    const headers = {}
    const items = {}
    SECTIONS.forEach((s) => {
      headers[s.title] = new Animated.Value(0)
      items[s.title] = s.data.map(() => new Animated.Value(0))
    })
    return { headers, items }
  })

  useEffect(() => {
    flatAnims.forEach((anim, i) => {
      setTimeout(() => {
        Animated.spring(anim, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }).start()
      }, i * 80)
    })
  }, [])

  useEffect(() => {
    SECTIONS.forEach((s, si) => {
      setTimeout(() => {
        Animated.spring(sectionAnims.headers[s.title], {
          toValue: 1,
          friction: 5,
          tension: 30,
          useNativeDriver: true,
        }).start()
      }, si * 300)

      sectionAnims.items[s.title].forEach((iv, ii) => {
        setTimeout(() => {
          Animated.spring(iv, {
            toValue: 1,
            friction: 6,
            tension: 50,
            useNativeDriver: true,
          }).start()
        }, si * 300 + (ii + 1) * 120)
      })
    })
  }, [])

  const renderFlatItem = ({ index }) => (
    <Animated.View
      style={[
        styles.flatItem,
        { opacity: flatAnims[index], transform: [{ scale: flatAnims[index] }] },
      ]}
    >
      <Text style={styles.flatItemText}>{FLAT_DATA[index].text}</Text>
    </Animated.View>
  )

  const renderSectionHeader = ({ section }) => (
    <Animated.View
      style={[
        styles.sectionHeader,
        {
          opacity: sectionAnims.headers[section.title],
          transform: [{ scale: sectionAnims.headers[section.title] }],
        },
      ]}
    >
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </Animated.View>
  )

  const renderSectionItem = ({ item, section, index }) => {
    const anim = sectionAnims.items[section.title][index]
    return (
      <Animated.View
        style={[
          styles.sectionItem,
          {
            opacity: anim,
            transform: [
              {
                translateX: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.sectionItemText}>{item}</Text>
      </Animated.View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Animated.FlatList</Text>
      <Animated.FlatList
        data={FLAT_DATA}
        renderItem={renderFlatItem}
        style={styles.flatList}
        scrollEnabled={false}
      />

      <Text style={[styles.subtitle, { marginTop: 30 }]}>
        Animated.SectionList
      </Text>
      <Animated.SectionList
        sections={SECTIONS}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSectionItem}
        style={styles.sectionList}
        scrollEnabled={false}
      />
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
  flatList: {
    width: width * 0.85,
  },
  flatItem: {
    backgroundColor: '#50B86C',
    padding: 14,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  flatItemText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  sectionList: {
    width: width * 0.85,
  },
  sectionHeader: {
    backgroundColor: '#E67E22',
    padding: 14,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionHeaderText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  sectionItem: {
    backgroundColor: '#F39C12',
    padding: 12,
    marginVertical: 3,
    marginLeft: 15,
    borderRadius: 8,
  },
  sectionItemText: {
    color: '#fff',
    fontSize: 14,
  },
})

export default Spring
