import React, { useState } from 'react'
import { View, Text} from 'react-native'
import AuthDetails from '../../components/auth/detail'
import styles from '../../components/auth/detail/style'
import AuthMenu from '../../components/auth/menu'

/**
 * @returns Component
 */

export default function AuthScreen(){
   const [authPage, setAuthPage ] = useState(0)
   const [detailPage, setDetailPage] = useState(false)
   return (
      <View style={styles.container}>
      {
         detailPage?
         <AuthDetails authPage={authPage} setDetailsPage={setDetailPage} />
         :
         <AuthMenu authPage={authPage} setDetailsPage={setDetailPage} />
      }

      </View>
   )
}

