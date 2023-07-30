import react from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

export const RestaurantScreen = () => (
    <SafeAreaView style={styles.appScreen}>
        <View style={styles.searchBarContainer}>
          <Searchbar />
        </View>
        <View style={styles.mainScreenContainer}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
)

const styles = StyleSheet.create({
    appScreen:{
      flex:1, 
      marginTop: StatusBar.currentHeight 
    },
    searchBarContainer:{
      padding:16,
    },
    mainScreenContainer:{
      flex:1,
      padding:16, 
      backgroundColor: 'lightgrey'
    }
  });