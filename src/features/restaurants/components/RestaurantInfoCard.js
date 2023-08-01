import react from "react";
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";
import styled from 'styled-components/native'
import  {star} from '../../../../assets/star'
import { openIcon } from "../../../../assets/openicon";

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const{
        name = "Ramen Restaurant",
        icon = {openIcon},
        photos = [ "https://tb-static.uber.com/prod/image-proc/processed_images/a922567e47ce9af7b14729f34023b1df/c73ecc27d2a9eaa735b1ee95304ba588.jpeg" ],
        address = "123 ABC Drive",
        openingHours = '10am - 7pm',
        isOpenNow = true ,
        rating = 3.2,
        isClosedTemporarily = false ,
        favourite = true, 
    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <StyledRestaurantCard elevation={4}>
            <StyledRestaurantCardCover key={name} source={{uri:photos[0]}}/>
            <Card.Content>
                <RestaurantName>{name}</RestaurantName>
                <RatingAndOpenView>
                    <RatingStars>
                        {ratingArray.map(()=> (
                            <SvgXml xml={star} width={20} height={20}/> 
                        ))}
                    </RatingStars>
                    <OpenView>
                        {isOpenNow && <SvgXml xml={openIcon} width={20} height={20}/> }
                    </OpenView>
                </RatingAndOpenView>
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
const RatingAndOpenView = styled.View `
    flex-direction: row;
    align-items:center;
    `

const RatingStars = styled.View`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]};`

const OpenView = styled.View `
    flex:1;
    flex-direction: row;
    justify-content: flex-end;
    `