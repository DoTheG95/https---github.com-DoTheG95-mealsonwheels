import react from "react";
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'

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
        <StyledRestaurantCard elevation={4}>
            <StyledRestaurantCardCover key={name} source={{uri:photos[0]}}/>
            <Card.Content>
                <RestaurantCardText>{name}</RestaurantCardText>
            </Card.Content>
        </StyledRestaurantCard>
    ) 

}
const RestaurantCardText = styled.Text`
    padding: ${(props) => props.theme.space[1]};
    color:${(props)=> props.theme.colors.ui.white};
    `
const StyledRestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.white};
    `
const StyledRestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.white};
    `
