import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, TextPropTypes} from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './style'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../redux/actions'

/** 
   * @param props 
   * @param props.authPage
   * @param props.setDetailsPage
   * @returns Component
*/
export default function AuthDetails({ authPage, setDetailsPage}){
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()
   
   const handleLogin = () => {
      dispatch(login(email, password))
         .then(() => {
            console.log('login successful')
         })
         .catch(() => {
            console.log('login unsuccessful')
         })
   }

   const handleRegister = () => {
      dispatch(register(email, password))
         .then(() => {
            console.log('register successful')
         })
         .catch(() => {
            console.log('register unsuccessful')
         })
   }

   return (
      <View styles={styles.container}>
         <TouchableOpacity onPress={() => setDetailsPage(false)}>
            <Feather name='arrow-left' size={24} color='black' />
         </TouchableOpacity>
         <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
            placeholder='Email'>

         </TextInput>
         <TextInput 
            onChangeText={(text) => setPassword(text)}
            placeholder='Password'
            style={styles.textInput}
            secureTextEntry
            >

         </TextInput>
         <TouchableOpacity 
            style={styles.button}
            onPress={() => authPage == 0? handleLogin() : handleRegister()}
            >
            <Text style={styles.buttonText}>
               {authPage==0? 'Sign In': 'Sing Up'}
            </Text>
         </TouchableOpacity>
      </View>
   )
}