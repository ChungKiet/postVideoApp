import React from "react";
import { View, Text, Image } from 'react-native'
import { useUser } from '../../../../hooks/useUser'
import styles from "./style";
import { generalStyle } from '../../../../styles'

const CommentItem = ({item}) => {
   const user = useUser(item.creator).data
   // console.log(user)
   return (
      <View style={styles.container}>
         <Image style={styles.container}>

         </Image>
         <View style={styles.containerText}>
            <Text style={styles.displayName}>
               { user.displayName }
            </Text>
            <Text>
               {item.comment}
            </Text>
         </View>
      </View>
   )
}

export default CommentItem