import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={ styles.container } onPress={ handleNavigate }>
      <View style={styles.logoContainer}>
        <Text style={styles.companyName} numberOfLines={1}>{job.employer_name}</Text>
        <Image 
          source={{ 
            uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.textContainer}> 
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard