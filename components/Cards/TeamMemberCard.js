import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card,Title, Paragraph } from 'react-native-paper'

const TeamMemberCard = () => {
    return (
        <Card style={styles.card}>
            <Card.Content style = {styles.content}>
                <Image source={require("../../assets/NamanPhoto.jpg")} style={styles.image} />
                    <Title style={styles.title}>Naman Goyal</Title>
                    <Paragraph style={styles.description}>
                        Founder & CEO
                    </Paragraph>
            </Card.Content>
        </Card>
    )
}

export default TeamMemberCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginTop: 10
    },
    content:{
        flexDirection: 'column',
        alignItems: 'center',

    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    title: {
        // fontFamily: "Inter_900Black",
        fontSize: 18,
        fontWeight: '500',
    },
    description: {
        // fontFamily: "Inter_600SemiBold",
        color: "grey",
        fontSize: 12,
    },
})