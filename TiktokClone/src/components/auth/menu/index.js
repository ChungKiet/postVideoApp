import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { Feather } from '@expo/vector-icons'

/**
 * @param props
 * @param props.authPage
 * @param props.setAuthPage
 * @param props.setDetailsPage
 * @returns Component
 */

export default function AuthMenu({ authPage, setAuthPage, setDetailsPage}){
   return (
      <View style={styles.container}>
         <View style={styles.containerMain}>
            <Text style={styles.headerText}>
               {authPage == 0? 'sign in': 'sign up'}
            </Text>
            <TouchableOpacity
               onPress={() => setDetailsPage(true)}>
               <Feather name='user' size={24} color='black' />
               <Text style={styles.providerButtonText}>
                  Use Email
               </Text>
            </TouchableOpacity>
         </View>

         <TouchableOpacity style={styles.containerBottomButton}
            onPress={() => authPage == 0? setAuthPage(1): setAuthPage(0)}>
            {
               authPage == 0 ?
               <Text > Don't have an account? <Text style={styles.bottomButtonText}>Sign up</Text> </Text>
               :
               <Text> Already have an account? <Text style={styles.bottomButtonText}>Sign In</Text></Text>
            }
         </TouchableOpacity>
      </View>
   )
}