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
                    <Text><Text style={{fontWeight:700}}>Ques :</Text> {detail.ques}</Text>
                    <Text><Text style={{fontWeight:700}}>Ans :</Text> {detail.ans}</Text>
                </View>

            </View>
            <FaqEditModal type='update' {...detail} handleAddUpdateDeleteMember={handleAddUpdateDeleteMember} visible={modelOpen} setVisible={setModelOpen} />
        </>
    );
}

const StartupFaqDetails = () => {
    const [faqDetails, setfaqDetails] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);
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
            {console.log('Faq DETAILS : ', faqDetails)}
            <ScrollView>
                <View style={styles.screen}>
                    <Text style={styles.heading}>FAQ details</Text>
                    <View style={{ textAlign: 'right', paddingVertical: 10 }}>
                        <MaterialCommunityIcons
                            name='account-plus'
                            color='#5f5f5f'
                            size={25}
                            onPress={() => setModelOpen(true)}
                        />
                    </View>
                    <View>
                        {faqDetails.map((detail) => {
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
    },
    cardText: {
        justifyContent: 'center',
        marginTop: 20,
    },
    cardIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top:10,
        gap: 10
    }
})