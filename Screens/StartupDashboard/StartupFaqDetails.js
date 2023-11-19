import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditModal from '../../components/utils/EditModal';
import AppTextInput from '../../components/utils/AppTextInput';
import GenerateRandomId from '../../config/GenerateRandomId';
import * as Yup from 'yup';
import { Formik } from 'formik'
import AppButton from '../../components/utils/AppButton';
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios';
import StartupDashboardAPI from '../../API/StartupDashboardAPI';


const FaqEditModal = (props) => {
    const editSchema = Yup.object().shape({
        ques: Yup.string().trim().required(),
        ans: Yup.string().trim(),
    })
    return (
        <EditModal visible={props.visible} setVisible={props.setVisible}>
            <Formik
                initialValues={{ id: props.id ? props.id : GenerateRandomId(10), ques: props.ques ? props.ques : '', ans: props.ans ? props.ans : '' }}
                onSubmit={(values) => props.handleAddUpdateDeleteMember(props.type, values.id, values.ques, values.ans)}
                validationSchema={editSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
                    return (
                        <>
                            <View>
                                <Text>Ques</Text>
                                <AppTextInput
                                    placeholder={"Enter ques"}
                                    value={values.ques}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('ques')}
                                    name='ques'
                                />

                                <Text>Ans</Text>
                                <AppTextInput
                                    placeholder={"Enter role"}
                                    value={values.ans}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('ans')}
                                    name='ans'
                                />
                                <AppButton
                                    title={props.type === 'add' ? 'Add detail' : 'Update detail'}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )
                }}
            </Formik>
        </EditModal>
    );
}


const FaqCard = ({ handleAddUpdateDeleteMember, detail }) => {
    const [modelOpen, setModelOpen] = useState(false);
    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.cardIcons}>
                    <MaterialCommunityIcons
                        name='account-edit'
                        color='#5f5f5f'
                        size={25}
                        onPress={() => setModelOpen(true)}
                    />
                    <MaterialCommunityIcons
                        name='trash-can'
                        color='#FF7F7F'
                        size={25}
                        onPress={() => handleAddUpdateDeleteMember('delete', detail.id)}
                    />
                </View>
                <View style={styles.cardText}>
                    <Text><Text style={{ fontWeight: 700 }}>Ques :</Text> {detail.ques}</Text>
                    <Text><Text style={{ fontWeight: 700 }}>Ans :</Text> {detail.ans}</Text>
                </View>

            </View>
            <FaqEditModal type='update' {...detail} handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />
        </>
    );
}

const StartupFaqDetails = ({ navigation }) => {
    const authContext = useContext(AuthContext);
    const token = authContext.token;

    const [faqDetails, setfaqDetails] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);

    const setProfile = (faq) => {
        setfaqDetails(faq)
    }
    const fetchProfile = async () => {
        // setLoading(true)
        try {
            const { data, status } = await axios.get(StartupDashboardAPI.FETCH_FAQ_DETAIL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (status === 200) {
                const { faq } = data;
                console.log('DATA in FAQ: ', data),
                    console.log("FAQ:", faq)
                setProfile(faq);
                // setLoading(false)
            }

        } catch (error) {
            // setLoading(false)
            // showToast('error', 'Error Fetching Details', 'error.gif')
        }
    }
    useEffect(() => {
        fetchProfile();
        { console.log("FAQ details 2 : ", faqDetails) }
    }, [token])



    const handleSaveChanges = async () => {
        // setLoading(true)
        const faq = faqDetails;
        try {
            const { data, status } = await axios.put(StartupDashboardAPI.UPDATE_FAQ_DETAIL, { faq }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (status === 200) {
                const { message } = data;
                fetchProfile();
                // setLoading(false)
                // showToast('success', 'Data saved Successfully', 'success.gif')
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle 400 Bad Request error here
                const { data } = error.response;
                const { message } = data;
                // alert('Try again');
            } else {
                // Handle other types of errors
                console.error('Error updating FAQ details:', error);
                // Handle other error cases if needed
            }
        }
    }

    const handleAddUpdateDeleteMember = (type, id = '', ques = "", ans = '') => {
        if (type === 'add') {
            if (!ques && !ans) {
                return;
            }
            if (faqDetails.find((detail) => detail.id === id)) {
                return;
            }
            const newFaq = {
                id: id,
                ques: ques,
                ans: ans
            };
            setfaqDetails([...faqDetails, newFaq]);
        }
        else if (type === 'update') {
            faqDetails.map((detail) => {
                if (detail.id === id) {
                    detail.ques = ques
                    detail.ans = ans
                }
            })
            setfaqDetails(faqDetails);
        }
        else if (type === 'delete') {
            setfaqDetails(faqDetails.filter((detail) => detail.id !== id))
        }
    }
    return (
        <>
            {console.log("FAQ details : ", faqDetails)}
            <ScrollView style={styles.screen}>
                <Text style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={16} />
                    &nbsp;Back
                </Text>
                <View>
                    <Text style={[styles.heading, { textAlign: 'center', marginVertical: 20 }]}>FAQ Detail</Text>
                    <View style={styles.addButtonContainer}>
                        <Text style={styles.subHeading}>Edit FAQ</Text>
                        <View style={{ textAlign: 'right', paddingVertical: 10 }}>
                            <MaterialCommunityIcons
                                name='account-plus'
                                color='#5f5f5f'
                                size={25}
                                onPress={() => setModelOpen(true)}
                            />
                        </View>
                    </View>
                    <View style={{width:'100%'}}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            {
                                faqDetails?.length===0 &&
                                <Image
                                    source={require('../../assets/NoDataFound.png')}
                                    style={{width:300, height:300, margin:'auto'}}
                                />
                            }
                        </View>
                        {faqDetails?.map((detail) => {
                            return (
                                <FaqCard
                                    handleAddUpdateDeleteMember={handleAddUpdateDeleteMember}
                                    detail={detail}
                                    key={detail.id}
                                />
                            );
                        })}

                    </View>
                </View>
                {faqDetails?.length!==0 && <View style={styles.buttonContainer}>
                    <View style={{ width: '48%' }}>
                        <AppButton title={"Save Profile"} onPress={handleSaveChanges} />
                    </View>
                    <View style={{ width: '48%' }}>
                        <AppButton title={"Reset"} onPress={fetchProfile} />
                    </View>

                </View>}
            </ScrollView>
            <FaqEditModal type='add' handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />

        </>
    )
}

export default StartupFaqDetails

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
        fontSize: 16,
        fontWeight: 700,

    },
    formContainer: {
        marginVertical: 10,
    },
    subContainer: {
        marginTop: 10,
    },

    cardContainer: {
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        marginBottom:10,
    },
    cardText: {
        justifyContent: 'center',
        marginTop: 20,
    },
    cardIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top: 10,
        gap: 10
    },
    backButton: {
        color: colors.primary,
        fontSize: 15,
        // position: 'absolute',
        top: 10,
        // left: 10,
    },
    addButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,

    }
})