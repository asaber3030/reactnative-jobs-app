import React from 'react'

import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'

import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import styles from './nearbyjobs.style'
import jobs from '../../../constants/data'

const Nearbyjobs = () => {

  const router = useRouter()
  
  const data = jobs;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {data.map(job => (
          <NearbyJobCard 
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={ () => router.push(`/job-details/${job.job_id}`) }
          />
        ))}
      </View>
    </View>
  )
}

export default Nearbyjobs