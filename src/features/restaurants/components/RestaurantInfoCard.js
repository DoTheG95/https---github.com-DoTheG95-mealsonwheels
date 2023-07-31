import react from "react";
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import {star} from '../../../../assets/star';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const{
        name = "Ramen Restaurant",
        icon ,
        photos = [ "https://tb-static.uber.com/prod/image-proc/processed_images/a922567e47ce9af7b14729f34023b1df/c73ecc27d2a9eaa735b1ee95304ba588.jpeg" ],
        address = "123 ABC Drive",
        openingHours = true ,
        rating = 5,
        isClosedTemporarily = false ,
        favourite = true, 
    } = restaurant;

    return (
        <StyledRestaurantCard elevation={4}>
            <StyledRestaurantCardCover key={name} source={{uri:photos[0]}}/>
            <Card.Content>
                <RestaurantName>{name}</RestaurantName>
                <RestaurantAddress>{address}</RestaurantAddress>
            </Card.Content>
        </StyledRestaurantCard>
    ) 

}
const RestaurantName = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.title};
    padding: ${(props) => props.theme.space[1]};
    color:${(props)=> props.theme.colors.ui.white};
    `
const RestaurantAddress = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
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
