import React from "react";
import {
    Alert,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
  } from 'react-native';
import { Routes } from "../navigation/Routs";
import styles from "../styles/styles";

  const CountryDetails = ({navigation,route}) =>{
    const  country  = route.params || {}; 
    console.log(`received data : ${JSON.stringify(country)}`);
    return(
        <SafeAreaView>
            <View style={styles.headerwithback}>
                {/* <TouchableOpacity onPress={()=>navigation.navigate(Routes.countrylist)}>
                    <Text>  &lt; Back</Text>
                    </TouchableOpacity> */}
            <Text style={styles.textlabelheader}>{country.name}</Text>
            </View>
            <Image source={{uri:country.media.flag}} style={styles.flag}/>
            <View style={styles.tablecontainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{country.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Capital</Text>
        <Text style={styles.value}>{country.capital}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Currency</Text>
        <Text style={styles.value}>{country.currency}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{country.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Population</Text>
        <Text style={styles.value}>{country.population}</Text>
      </View>
    </View>
        </SafeAreaView>
    )
  }

  export default CountryDetails; 