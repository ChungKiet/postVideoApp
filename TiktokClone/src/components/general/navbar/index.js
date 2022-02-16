import React from 'react'
import { View, TExt, Touchable, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function NavBarGeneral({title = 'NavBarGeneral', leftButton = {display: false}}){
   const navigation = useNavigation();

   return (
      <View>
         <TouchableOpacity
            style = {styles.button}
            onPress={() => navigation.goBack()}>
            <Feather name='arrow-left' size={24} color='white' />
         </TouchableOpacity>
         <Text style={styles.title}>
            {title}
         </Text>
         <Touchable
            style={styles.button}
            onPress = {()=> leftButton.display ? leftButton.action() : null}>
            <Feather name={leftButton.name} size={26} color={leftButton.display? 'pink': 'white'} />
         </Touchable>
      </View>
   )

}