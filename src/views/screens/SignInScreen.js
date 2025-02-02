import { View, 
         Text, 
         Image, 
         StyleSheet, 
         useWindowDimensions, 
         ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../src/assets/BHC.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


    const {height}= useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
      //Validate user
      navigation.navigate('Home');
    };
    
    const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPassword');
    };

    const onSignUpPressed = () => {
      navigation.navigate('SignUp');
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain"
         />

      <CustomInput 
         placeholder="Username" 
         value={username} 
         setValue={setUsername} 
         />

      <CustomInput 
         placeholder="Password" 
         value={password} 
         setValue={setPassword}
         secureTextEntry={true}
         />

      <CustomButton 
      text="Sign In" 
      onPress={onSignInPressed} 
      />
      
      <CustomButton 
         text="Forgot password?" 
         onPress={onForgotPasswordPressed} 
         type="TERTIARY"
         />

      <SocialSignInButtons/>

      <CustomButton 
         text="Don't have an account? Create one" 
         onPress={onSignUpPressed} 
         type="TERTIARY"
         />

    </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 250,
    },
});

export default SignInScreen;