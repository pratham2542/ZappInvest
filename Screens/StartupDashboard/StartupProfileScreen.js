import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Formik } from 'formik'
import * as Yup from 'yup';
import AppTextInput from "../../components/utils/AppTextInput";
import AppButton from "../../components/utils/AppButton";
import colors from "../../config/colors";
import BorderBox from "../../components/utils/BorderBox";
import EditModal from "../../components/utils/EditModal";


function StartupProfileScreen({ navigation }) {
  const startupProfileSchema = Yup.object().shape({
    userName: Yup.string().trim().required(),
    email: Yup.string().trim().required().email(),
    startupName: Yup.string().trim().required(),
    logo: Yup.string().trim(),
    description: Yup.string().trim(),
    mobile: Yup.string().trim(),
    tagline: Yup.string().trim(),
    website: Yup.string().trim(),
    foundedDate: Yup.string().trim(),
    location: Yup.string().trim(),
    teamSize: Yup.string().trim(),
    stage: Yup.string().trim(),
    videoLink: Yup.array().of(Yup.string().trim()),
    isDPIIT: Yup.boolean(),
  });

  const handleSaveProfile = async (values) => {
    // Handle saving the profile data here
  }
  const [isEditPanelVisible, setEditPanelVisible] = useState(true);

  const openEditPanel = () => {
    setEditPanelVisible(true);
  };

  const saveChanges = (name, designation) => {
    // Handle saving changes here, e.g., update your data/state
    setEditPanelVisible(false);
  };

  const closeEditPanel = () => {
    setEditPanelVisible(false);
  };
  return (
    <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.heading}>Startup Profile</Text>
          <Formik
            initialValues={{
              userName: '',
              email: '',
              startupName: '',
              logo: '',
              description: '',
              mobile: '',
              tagline: '',
              foundedDate: '',
              location: '',
              teamSize: '',
              stage: '',
              videoLink: [],
              isDPIIT: false,
        
        
              website: '',
              linkedin:'',
              instagram:'',
              twitter:'',
            }}
            onSubmit={(values) => handleSaveProfile(values)}
            validationSchema={startupProfileSchema}
          >
            {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
              <View style={styles.formContainer}>
                <BorderBox>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Username</Text>
                        <AppTextInput
                            placeholder={"Username"}
                            value={values.userName}
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors}
                            onBlur={() => setFieldTouched('userName')}
                            name='userName'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Email</Text>
                        <AppTextInput
                            placeholder={"Enter email"}
                            value={values.email}
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors}
                            onBlur={() => setFieldTouched('email')}
                            name='email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            autoCorrect={false}
                            textContentType='emailAddress' // only work with ios ....used to automatically add the password stored in auto fill
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Startup name</Text>
                        <AppTextInput
                            placeholder={"Enter startup name"}
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
                </BorderBox>
                {/*  */}
                <BorderBox>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Website</Text>
                        <AppTextInput
                            placeholder={"Enter website url"}
                            value={values.website}
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors}
                            onBlur={() => setFieldTouched('website')}
                            name='website'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>LinkedIn</Text>
                        <AppTextInput
                            placeholder={"Enter linkedin url"}
                            value={values.linkedin}
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors}
                            onBlur={() => setFieldTouched('linkedin')}
                            name='linkedin'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Instagram</Text>
                        <AppTextInput
                            placeholder={"Enter instagram url"}
                            value={values.instagram}
                            handleChange={handleChange}
                            touched={touched}
                            errors={errors}
                            onBlur={() => setFieldTouched('instagram')}
                            name='instagram'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                </BorderBox>
                <AppButton title={"Save Profile"} onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor:colors.white
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeading:{
    fontSize: 14,
    fontWeight: 500,

  },
  formContainer: {
    marginVertical: 10,
  },
  subContainer: {
    marginTop: 10,
  },
});

export default StartupProfileScreen;
