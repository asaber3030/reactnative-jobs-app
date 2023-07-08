import React, { useEffect } from 'react'

import axios from 'axios'

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import { useFetch } from '../../hook/useFetch'

import jobs from '../../constants/data'

const tabs = ["About", "Qualifications", "Responsibilites"]

const JobDetails = () => {

  const params = useSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {

  }

  const [activeTab, setActiveTab] = useState(tabs[0])

  const [data, setData] = useState(jobs.filter(job => job.job_id == params.id)[0]);

  const displayContent = () => {
    switch (activeTab) {
      case tabs[0]:
          return (
            <JobAbout 
              info={data.job_description ?? 'N/A'}
            />
          )
        break;

      case tabs[1]:
        return (
          <Specifics 
            title={tabs[1]}
            points={data.job_highlights?.Qualifications ?? ['N/A']}
          />
        )
        break;

      case tabs[2]:
        return (
          <Specifics 
            title={tabs[2]}
            points={data.job_highlights?.Responsibilities ?? ['N/A']}
          />
        )
        break;
    }
  }

  useEffect(() => {
    setData(jobs.filter(job => job.job_id == params.id)[0])
  }, [])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerLeft: () => (
          <ScreenHeaderBtn 
            iconUrl={icons.left}
            dimension="60%"
            handlePress={ () => router.push('/') }
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn 
            iconUrl={icons.share}
            dimension="60%"
            handlePress={ () => router.goBack() }
          />
        ),
        headerTitle: ''
      }} />

      <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}> 
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company 
              companyLogo={data.employer_logo} 
              jobTitle={data.job_title} 
              companyName={data.employer_name} 
              location={data.job_country} 
            />
            <JobTabs 
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            { displayContent() }

          </View>
        </ScrollView>

        <JobFooter url={data?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
      </>
      
    </SafeAreaView>
  )
}

export default JobDetails
