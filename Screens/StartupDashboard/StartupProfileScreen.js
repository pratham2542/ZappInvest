import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Formik } from 'formik'
import * as Yup from 'yup';
import AppTextInput from "../../components/utils/AppTextInput";
import AppButton from "../../components/utils/AppButton";
import colors from "../../config/colors";
import BorderBox from "../../components/utils/BorderBox";
import EditModal from "../../components/utils/EditModal";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import StartupDashboardAPI from "../../API/StartupDashboardAPI";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InterestedSectorsDropdown from "../../components/utils/InvestorSectorDropdown";


function StartupProfileScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const [allValues, setAllValues] = useState({
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
    website: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    sectors: [],
  })
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
    sectors: Yup.array().of(Yup.string().trim()),
  });

  const setProfile = (userName, email, mobile, startupName, description, tagline, status, foundedDate, location, teamSize, stage, sectors, logo, linkedin, website, twitter, instagram) => {
    setAllValues({
      userName,
      email,
      mobile,
      startupName,
      description,
      tagline, foundedDate, location, teamSize, stage, sectors, logo, linkedin, website, twitter, instagram
    })
  }
  const fetchProfile = async () => {
    try {
      // setLoading(true)
      const { data, status } = await axios.get(StartupDashboardAPI.FETCH_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) {
        const { userName, email, mobile, startupName, description, tagline, status, foundedDate, location, teamSize, stage, sectors, logo, socialMedia } = data;
        setProfile(userName, email, mobile, startupName, description, tagline, status, foundedDate, location, teamSize, stage, sectors, logo, socialMedia.linkedin, socialMedia.website, socialMedia.twitter, socialMedia.instagram);
        // setLoading(false)
      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProfile();
  }, [token])


  const handleSelectSectors = (selectedSectors) => {
    setAllValues({ ...allValues, selectedSectors }); 
  };

  const verifyFormData = (startupName, description, stage) => {
    if (startupName === "" || description === "" || stage === '') {
        return {
            valid: false,
            message: "Required fields cannot be empty",
        };
    }
    

    return {
        valid: true,
    };
};

  const handleSaveChanges = async (values) => {
    console.log('save change called')
    // setLoading(true)
    const verify = verifyFormData(values.startupName, values.description,values.stage);
    if (!(verify.valid)) {
      console.log(verify.message)
        // showToast('error', verify.message, 'error.gif');
    }
    else {
      console.log('move here')
        const socialMedia = {
            linkedin:values.linkedin,
            twitter:values.twitter,
            website:values.website,
            instagram:values.instagram
        }
        try {
            const { data, status } = await axios.put(StartupDashboardAPI.UPDATE_PROFILE, 
              { 
                userName:values.userName, 
                email:values.email, 
                mobile:values.mobile, 
                startupName:values.startupName, 
                description:values.description, 
                foundedDate:values.foundedDate, 
                location:values.location, 
                teamSize:values.teamSize, 
                stage:values.stage, 
                // sectors: selectedSectors, 
                logo:values.logo, 
                socialMedia }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log('DATA : ', data);
            if (status === 200) {
                const { message } = data;
                // showToast('success', message, 'success.gif')
                fetchProfile();
            }

        } catch (error) {
            // showToast('error', error.message, 'error.gif')
        }
    }

}

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={16} />
        &nbsp;Back
      </Text>
      <View style={{ paddingHorizontal: 2 }}>
        <Text style={[styles.heading, { textAlign: 'center', marginVertical: 20 }]}>Startup Profile</Text>
        <Formik
          enableReinitialize
          initialValues={{ ...allValues }}
          onSubmit={(values)=>handleSaveChanges(values)}
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
                <View style={styles.subContainer}>
                  <Text style={styles.subHeading}>Twitter</Text>
                  <AppTextInput
                    placeholder={"Enter instagram url"}
                    value={values.twitter}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    onBlur={() => setFieldTouched('twitter')}
                    name='twitter'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
              </BorderBox>
              <BorderBox>
                <InterestedSectorsDropdown
                  selectedSectors={values.sectors} // Corrected name
                  onSelectSector={handleSelectSectors}
                />
              </BorderBox>
              <View style={styles.buttonContainer}>
                <View style={{ width: '48%' }}>
                  <AppButton title={"Save Profile"} onPress={()=>handleSaveChanges(values)} />
                </View>
                <View style={{ width: '48%' }}>
                  <AppButton title={"Reset"} onPress={fetchProfile} />
                </View>

              </View>
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
    backgroundColor: colors.white
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 14,
    fontWeight: 500,

  },
  formContainer: {
    marginVertical: 10,
  },
  subContainer: {
    marginTop: 10,
  },
  backButton: {
    color: colors.primary,
    fontSize: 15,
    // position: 'absolute',
    top: 10,
    // left: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
});

export default StartupProfileScreen;
