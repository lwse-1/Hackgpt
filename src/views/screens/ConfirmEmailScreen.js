import { View,
         Text,
         StyleSheet, 
         ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
const [code, setCode] = useState('');

const navigation = useNavigation();

const onConfirmPressed = () => {
    navigation.navigate('Home');
};

const onSignInPressed = () => {
    navigation.navigate('SignIn');
};

const onResendPressed = () => {
console.warn('onResendPressed');
};


return (
<ScrollView showsVerticalScrollIndicator={false} >
<View style={styles.root}>
<Text style={styles.title}>Confirm your email</Text>

<CustomInput 
placeholder="Enter your confirmation Code" 
value={code} 
setValue={setCode} 
/>


<CustomButton 
text="Confirm" 
onPress={onConfirmPressed} 
/>

<CustomButton 
text="Resend code" 
onPress={onResendPressed} 
type="SECONDARY"
/>

<CustomButton 
text="Back to Sign in" 
onPress={onSignInPressed} 
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

title: {
fontSize: 24,
fontWeight: 'bold' ,
color: '#051C60' ,
margin: 10,
},

text: {
color: 'gray' ,
marginVertical: 10,
},

link: {
color: '#FDB075' ,
},

});

export default ConfirmEmailScreen;