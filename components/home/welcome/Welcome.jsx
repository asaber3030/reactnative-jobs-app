import React, { useState } from 'react'

import { useRouter } from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'


const jobTypes = ["Full-time", "Part-time", "Contract"]

const Welcome = () => {

  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abdulrahman!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={ () => {} } placeholder="Search for some jobs...!" />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          keyExtractor={ item => item }
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={ ({ item }) => ( 
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)} 
              onPress={ 
                () => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                } 
              }
              >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text> 
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Welcome