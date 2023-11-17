import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditModal from '../../components/utils/EditModal';
import AppTextInput from '../../components/utils/AppTextInput';
import GenerateRandomId from '../../config/GenerateRandomId';
import * as Yup from 'yup';
import { Formik } from 'formik'
import AppButton from '../../components/utils/AppButton';


const DirectorEditModal = (props) => {
    const editSchema = Yup.object().shape({
        name: Yup.string().trim().required(),
        din: Yup.string().trim(),
        address: Yup.string().trim(),
        mobileNo: Yup.string().trim(),
        email: Yup.string().trim().email()
    })
    return (
        <EditModal visible={props.visible} setVisible={props.setVisible}>
            <Formik
                initialValues={{ id: props.id ? props.id : GenerateRandomId(10), name: props.name ? props.name : '', din: props.din ? props.din : '', address: props.address ? props.address : '', mobileNo: props.mobileNo ? props.mobileNo : '', email: props.email ? props.email : '' }}
                onSubmit={(values) => props.handleAddUpdateDeleteMember(props.type, values.id, values.name,values.din, values.address, values.mobileNo, values.email)}
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

                                <Text>DIN</Text>
                                <AppTextInput
                                    placeholder={"Enter din"}
                                    value={values.din}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('din')}
                                    name='din'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                                
                                <Text>Mobile no</Text>
                                <AppTextInput
                                    placeholder={"Enter mobile No"}
                                    value={values.mobileNo}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('mobileNo')}
                                    name='mobileNo'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />

                                <Text>Email</Text>
                                <AppTextInput
                                    placeholder={"Enter email"}
                                    value={values.email}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('email')}
                                    name='email'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />

                                <Text>Address</Text>
                                <AppTextInput
                                    placeholder={"Enter address"}
                                    value={values.address}
                                    handleChange={handleChange}
                                    touched={touched}
                                    onBlur={() => setFieldTouched('address')}
                                    name='address'
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


const DirectorCard = ({ handleAddUpdateDeleteMember, detail }) => {
    const [modelOpen, setModelOpen] = useState(false);
    return (
        <>
        <View style={styles.cardContainer}>
            <View
                style={styles.cardText}
            >
                <Text><Text style={{fontWeight:700}}>Name :</Text> {detail.name}</Text>
                <Text><Text style={{fontWeight:700}}>DIN :</Text> {detail.din}</Text>
                <Text><Text style={{fontWeight:700}}>Mobile no :</Text> {detail.mobileNo}</Text>
                <Text><Text style={{fontWeight:700}}>Email :</Text> {detail.email}</Text>
                <Text><Text style={{fontWeight:700}}>Address :</Text> {detail.address}</Text>
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
        <DirectorEditModal type='update' {...detail} handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />
        </>
    );
}

const StartupEntityDetails = () => {
    const [directorDetails, setDirectorDetails] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);
    const handleAddUpdateDeleteMember = (type, id = '', name = '', din = '', address = '', mobileNo = '', email = '') => {
        if (type === 'add') {
            if (!name && !din && !address && !mobileNo && !email) {
                return;
            }
            if (directorDetails.find((detail) => detail.id === id)) {
                return;
            }
            const newDirector = {
                id: id,
                name: name,
                din: din,
                address: address,
                mobileNo: mobileNo,
                email: email
            };
            setDirectorDetails([...directorDetails, newDirector]);
        }
        else if (type === 'update') {
            directorDetails.map((detail) => {
                if (detail.id === id) {
                    detail.name = name;
                    detail.din = din;
                    detail.address = address;
                    detail.mobileNo = mobileNo;
                    detail.email = email;
                }
            })
            setDirectorDetails(directorDetails);
        }
        else if (type === 'delete') {
            setDirectorDetails(directorDetails.filter((detail) => detail.id !== id))
        }
    }
    
    return (
        <>
            <ScrollView>
                <View style={styles.screen}>
                    <Text style={styles.heading}>Entity details</Text>
                    <View style={{ textAlign: 'right', paddingVertical: 10 }}>
                        <MaterialCommunityIcons
                            name='account-plus'
                            color='#5f5f5f'
                            size={25}
                            onPress={() => setModelOpen(true)}
                        />
                    </View>
                    <View>
                        {directorDetails.map((detail) => {
                            return (
                                <DirectorCard
                                    handleAddUpdateDeleteMember={handleAddUpdateDeleteMember}
                                    detail={detail}
                                    key={detail.id}
                                />
                            );
                        })}

                    </View>
                </View>
            </ScrollView>
            <DirectorEditModal type='add' handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />

        </>
    )
}

export default StartupEntityDetails

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
        // marginLeft: 20,
    },
    cardIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top:10,
        // bottom: '50%',
        gap: 10
    }
})