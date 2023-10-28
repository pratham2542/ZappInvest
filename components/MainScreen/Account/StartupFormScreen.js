import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from '../Screen'
import colors from '../../../config/colors'
import AppTextInput from '../../utils/AppTextInput'
import AppButton from '../../utils/AppButton'
import * as DocumentPicker from 'expo-document-picker';
import AppUploadField from '../../utils/AppUploadField'
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { Formik } from 'formik'
import ErrorMessage from '../../utils/ErrorMessage'


const StartupFormScreen = ({navigation}) => {
    const startupSchema = Yup.object().shape({
        email: Yup.string().trim().required().email(),
        password: Yup.string().trim().required().min(5)
      })
    
    const handleBackButton = () => {
        // console.log("")
        navigation.goBack();

    }
    const handleRegistrationButton = () => {
        console.log('Registration button called')
    }
    const openDocumentpicker = async () => {
        const documentPickerResult = await DocumentPicker.getDocumentAsync();
        console.log(documentPickerResult)

    }
    const openImagepicker = async () => {
        const imagePickerResult = await ImagePicker.launchImageLibraryAsync()
        console.log(imagePickerResult)

    }
    const uploadPitch = () => {
        // console.log('hi')

    }
    return (
        <Screen style = {{backgroundColor: '#fff'}}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.backButton} onPress={handleBackButton}>
                        <MaterialCommunityIcons name='arrow-left' size={16} />
                        &nbsp;Back
                    </Text>
                    <Text style={styles.heading}>
                        Startup Registration form
                    </Text>

                    <Formik
                        initialValues={{ startupName: '', description: '', websiteURL: '', linkedinURL: '', twitterURL: '', instagramURL: '', description: '' }}
                        onSubmit={(values) => handleLogin(values)}
                        validationSchema={startupSchema}
                    >
                        {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
                            return (
                                <>
                                    <View style={styles.fieldContainer}>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Startup Name <MaterialCommunityIcons name="asterisk" size={12} color='#FF0000' /></Text>
                                            <AppTextInput 
                                                placeholder={"Enter Startup name"}
                                                value={values.startupName}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('startupName')}
                                                name='startupName'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Describe your startup in 50 words<MaterialCommunityIcons name="asterisk" size={12} color='#FF0000' /></Text>
                                            <AppTextInput 
                                                placeholder={"Enter description"}
                                                value={values.description}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('description')}
                                                name='description'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Company's Website URL (if any)</Text>
                                            <AppTextInput 
                                                placeholder={"Enter website url"}
                                                value={values.websiteURL}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('websiteURL')}
                                                name='websiteURL'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Company's Linkedin URL (if any)</Text>
                                            <AppTextInput 
                                                placeholder={"Enter linkedin url"}
                                                value={values.linkedinURL}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('linkedinURL')}
                                                name='linkedinURL'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Company's Twitter URL (if any)</Text>
                                            <AppTextInput 
                                                placeholder={"Enter twitter url"}
                                                value={values.twitterURL}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('twitterURL')}
                                                name='twitterURL'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Company's Instagram URL (if any)</Text>
                                            <AppTextInput 
                                                placeholder={"Enter instagram url"}
                                                value={values.instagramURL}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors}
                                                onBlur={() => setFieldTouched('instagramURL')}
                                                name='instagramURL'
                                                autoCapitalize='none'
                                                autoCorrect={false}
                                            />
                                        </View>

                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Logo <MaterialCommunityIcons name="asterisk" size={12} color='#FF0000' /></Text>
                                            <View style={styles.uploadBox}>
                                                <AppUploadField width='70%' title="Upload Files" onPress={openImagepicker} />
                                                <AppButton width='28%' title="Pitch" onPress={uploadPitch} />
                                            </View>

                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Image <MaterialCommunityIcons name="asterisk" size={12} color='#FF0000' /></Text>
                                            <View style={styles.uploadBox}>
                                                <AppUploadField width='70%' title="Upload Files" onPress={openImagepicker} />
                                                <AppButton width='28%' title="Pitch" onPress={uploadPitch} />
                                            </View>

                                        </View>
                                        <View style={styles.fieldBox}>
                                            <Text style={styles.fieldHeading}>Pitch <MaterialCommunityIcons name="asterisk" size={12} color='#FF0000' /></Text>
                                            <View style={styles.uploadBox}>
                                                <AppUploadField width='70%' title="Upload Files" onPress={openDocumentpicker} />
                                                <AppButton width='28%' title="Pitch" onPress={uploadPitch} />
                                            </View>

                                        </View>
                                        <View style={styles.fieldBox}>
                                            <AppButton title="Register" onPress={handleRegistrationButton} />
                                        </View>
                                    </View>
                                </>
                            )
                        }}
                    </Formik>



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
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    fieldContainer: {
        marginTop: 20,
    },
    fieldHeading: {
        fontSize: 16,
        fontWeight: '500',
    },
    uploadBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})