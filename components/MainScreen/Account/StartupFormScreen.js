import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import * as DocumentPicker from 'expo-document-picker';
import AppUploadField from '../components/AppUploadField'
import * as ImagePicker from 'expo-image-picker';

const StartupFormScreen = () => {
    const handleBackButton = ()=>{
        console.log("Back button in the startup form screen clicked")
    }
    const handleRegistrationButton = ()=>{
        console.log('Registration button called')
    }
    const openDocumentpicker = async()=>{
        const documentPickerResult = await DocumentPicker.getDocumentAsync();
        console.log(documentPickerResult)

    }
    const openImagepicker = async()=>{
        const imagePickerResult = await ImagePicker.launchImageLibraryAsync()
        console.log(imagePickerResult)

    }
    const uploadPitch = ()=>{
        // console.log('hi')
        
    }
  return (
    <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.backButton} onPress = {handleBackButton}>
                        <MaterialCommunityIcons name='arrow-left' size={16} />
                        &nbsp;Back
                    </Text>
                    <Text style = {styles.heading}>
                        Startup Registration form
                    </Text>

                    <View style = {styles.fieldContainer}>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Startup Name <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000'/></Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Describe your startup in 50 words<MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000'/></Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Company's Website URL (if any)</Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Company's Linkedin URL (if any)</Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Company's Twitter URL (if any)</Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Company's Instagram URL (if any)</Text>
                            <AppTextInput/>
                        </View>


                        {/* <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Logo <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000'/></Text>
                            <AppTextInput/>
                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Image <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000'/></Text>
                            <AppTextInput/>
                        </View> */}


                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Logo <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000' /></Text>
                            <View style = {styles.uploadBox}>
                                <AppUploadField width='70%' title = "Upload Files" onPress = {openImagepicker}/>
                                <AppButton width = '28%' title = "Pitch" onPress = {uploadPitch} />
                            </View>

                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Image <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000' /></Text>
                            <View style = {styles.uploadBox}>
                                <AppUploadField width='70%' title = "Upload Files" onPress = {openImagepicker}/>
                                <AppButton width = '28%' title = "Pitch" onPress = {uploadPitch} />
                            </View>

                        </View>
                        <View style = {styles.fieldBox}>
                            <Text style = {styles.fieldHeading}>Pitch <MaterialCommunityIcons name = "asterisk" size = {12} color = '#FF0000' /></Text>
                            <View style = {styles.uploadBox}>
                                <AppUploadField width='70%' title = "Upload Files" onPress = {openDocumentpicker}/>
                                <AppButton width = '28%' title = "Pitch" onPress = {uploadPitch} />
                            </View>

                        </View>




                        <View style = {styles.fieldBox}>
                            <AppButton title = "Register" onPress= {handleRegistrationButton}/>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </Screen>
  )
}

export default StartupFormScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,

    },
    backButton: {
        color: colors.primary,
        fontSize: 15,

    },
    heading:{
        textAlign: 'center',
        fontSize : 18,
        fontWeight : 'bold',
    },
    fieldContainer:{
        marginTop : 20,
    },
    fieldHeading:{
        fontSize : 16,
        fontWeight : '500',
    },
    uploadBox:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})