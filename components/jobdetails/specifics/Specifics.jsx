import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({ points, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((p, idx) => (
          <View key={idx} style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{p}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics