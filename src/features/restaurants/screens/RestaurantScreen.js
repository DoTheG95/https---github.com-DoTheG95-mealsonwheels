import react from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from 'styled-components/native'

export const RestaurantScreen = () => (
    <CustomSafeAreaView>
        <CustomSearchBarView>
            <Searchbar />
        </CustomSearchBarView>    
        <CustomMainView>
          <RestaurantInfoCard />
        </CustomMainView>
      </CustomSafeAreaView>
)


const CustomSafeAreaView = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top: ${StausBar.currentHeight}px`}; 
`
const CustomSearchBarView = styled.View`
    padding:16px;
`
const CustomMainView = styled.View`
    flex:1;
    padding:16px; 
    backgroundColor:lightgrey;
`