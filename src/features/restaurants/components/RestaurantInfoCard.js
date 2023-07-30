import react from "react";
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'

const CardText = styled.Text`
    padding:5px;
    color:black;
    `

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const{
        name = "Gary and Nao's Restaurant",
        icon ,
        photos = [ "https://tb-static.uber.com/prod/image-proc/processed_images/a922567e47ce9af7b14729f34023b1df/c73ecc27d2a9eaa735b1ee95304ba588.jpeg" ],
        address = "18 Harris Drive",
        openingHours = true ,
        rating = 5,
        isClosedTemporarily = false ,
        favourite = true, 
    } = restaurant;

    return (
        <Card elevation={4} style={styles.infoCard}>
            <Card.Cover style={styles.cardContent} key={name} source={{uri:photos[0]}}/>
            <Card.Content>
                <CardText>{name}</CardText>
            </Card.Content>
        </Card>
    ) 

}

const styles = StyleSheet.create({
    infoCard:{
        backgroundColor:"white"
    },
    cardContent:{
        padding:20,
        backgroundColor: "white"
    },
  });