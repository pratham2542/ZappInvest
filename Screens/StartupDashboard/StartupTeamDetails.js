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
import axios from 'axios';
import StartupDashboardAPI from '../../API/StartupDashboardAPI';
import AuthContext from '../../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamEditModal = (props) => {
    const editSchema = Yup.object().shape({
        name: Yup.string().trim().required(),
        role: Yup.string().trim(),
        img: Yup.string().trim(),
        mimg: Yup.string().trim(),
        linkedin: Yup.string().trim()
    })
    return (
        <EditModal visible={props.visible} setVisible={props.setVisible}>
            <Formik
                initialValues={{ id: props.id ? props.id : GenerateRandomId(10), name: props.name ? props.name : '', role: props.role ? props.role : '', img: props.img ? props.img : '', mimg: props.mimg ? props.mimg : '', linkedin: props.linkedin ? props.linkedin : '' }}
                onSubmit={(values) => props.handleAddUpdateDeleteMember(props.type, values.id, values.name, values.role, values.linkedin, values.img, values.mimg)}
                validationSchema={editSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
                    return (
                        <>
                            <View>
                                <Text>Name</Text>
                                <AppTextInput
                                    placeholder={"Enter name"}
                                    value={values.name}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('name')}
                                    name='name'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                                <AppTextInput
                                    placeholder={"Enter role"}
                                    value={values.role}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('role')}
                                    name='role'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                                <AppTextInput
                                    placeholder={"Enter linkedin url"}
                                    value={values.linkedin}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('linkedin')}
                                    name='linkedin'
                                    autoCapitalize='none'
                                    autoCorrect={false}
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


const TeamCard = ({ handleAddUpdateDeleteMember, detail }) => {
    const [modelOpen, setModelOpen] = useState(false);
    return (
        <>
            <View style={styles.cardContainer}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: detail.img,
                    }}
                />
                <View
                    style={styles.cardText}
                >
                    <Text>{detail.name}</Text>
                    <Text>{detail.role}</Text>
                </View>
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
            </View>
            <TeamEditModal type='update' {...detail} handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />
        </>
    );
}

const StartupTeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);
    const authContext = useContext(AuthContext);
    const token = authContext.token;

    const handleAddUpdateDeleteMember = (type, id = '', name = '', role = '', linkedin = '', img = '', mimg = '') => {
        if (type === 'add') {
            if (!name && !role) {
                return;
            }
            if (teamDetails.find((detail) => detail.id === id)) {
                return;
            }
            const newTeam = {
                id: id,
                name: name,
                role: role,
                linkedin: linkedin,
                img: img,
                mimg: mimg
            };
            setTeamDetails([...teamDetails, newTeam]);
        }
        else if (type === 'update') {
            teamDetails.map((detail) => {
                if (detail.id === id) {
                    detail.name = name
                    detail.role = role
                    detail.linkedin = linkedin
                    detail.img = img
                    detail.mimg = mimg
                }
            })
            setTeamDetails(teamDetails);
        }
        else if (type === 'delete') {
            setTeamDetails(teamDetails.filter((detail) => detail.id !== id))
        }
    }

    const setProfile = (team) => {
        const newTeam = []
        for (let i = 0; i < team?.length; i++) {
            newTeam.push({
                id: team[i].id,
                name: team[i].name,
                role: team[i].role,
                linkedin: team[i].linkedin,
                img: team[i].pic
            })
        }
        setTeamDetails(newTeam);
    }
    const fetchProfile = async () => {
        // setLoading(true)
        try {
            const { data, status } = await axios.get(StartupDashboardAPI.FETCH_TEAM, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (status === 200) {
                const { team } = data;
                setProfile(team);
                // setLoading(false)
            }

        } catch (error) {
            // setLoading(false)
            // showToast('error', 'Error Fetching Details', 'error.gif')
        }
    }
    useEffect(() => {
        console.log('TOKEN in team:', token)
        fetchProfile();
    }, [token])

    const handleSaveChanges = async () => {
        // setLoading(true)
        const team = [];
        for (let i = 0; i < teamDetails.length; i++) {
            team.push({
                id: teamDetails[i].id,
                name: teamDetails[i].name,
                role: teamDetails[i].role,
                linkedin: teamDetails[i].linkedin,
                pic: teamDetails[i].img
            })
        }
        try {
            const { data, status } = await axios.put(StartupDashboardAPI.UPDATE_TEAM, { team }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (status === 200) {
                const { message } = data;
                fetchProfile();
                // showToast('success', 'saved changes successfully', 'success.gif')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {console.log('TEAM DETAILS : ', teamDetails)}
            <ScrollView style={styles.screen}>
                <Text style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={16} />
                    &nbsp;Back
                </Text>
                <View>
                    <Text style={[styles.heading, { textAlign: 'center', marginVertical: 20 }]}>Team details</Text>
                    <View style={styles.addButtonContainer}>
                        <Text style={styles.subHeading}>Edit Team</Text>
                        <View style={{ textAlign: 'right', paddingVertical: 10 }}>
                            <MaterialCommunityIcons
                                name='account-plus'
                                color='#5f5f5f'
                                size={25}
                                onPress={() => setModelOpen(true)}
                            />
                        </View>
                    </View>
                    <View>
                        {teamDetails.map((detail) => {
                            return (
                                <TeamCard
                                    handleAddUpdateDeleteMember={handleAddUpdateDeleteMember}
                                    detail={detail}
                                    key={detail.id}
                                />
                            );
                        })}

                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ width: '48%' }}>
                            <AppButton title={"Save Profile"} onPress={handleSaveChanges} />
                        </View>
                        <View style={{ width: '48%' }}>
                            <AppButton title={"Reset"} onPress={fetchProfile} />
                        </View>

                    </View>
                </View>
            </ScrollView>
            <TeamEditModal type='add' handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />

        </>
    )
}

export default StartupTeamDetails

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
        flexDirection: 'row'
    },
    cardImage: {
        width: 50,
        height: 50,

    },
    cardText: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    cardIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        bottom: '50%',
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
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,

    }
})