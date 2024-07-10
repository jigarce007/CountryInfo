import React,{useState,useEffect} from "react";
import {
    Alert,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native';
  import styles from '../styles/todostyle';
import { Routes } from "../navigation/Routs";

const CountryList=({navigation}) => {
    

const API_URL = 'https://api.sampleapis.com/countries/countries';
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, []);

  async function getCountries() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data); // Initialize filtered countries with all countries
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  function handleCountryPress(item) {
    navigation.navigate(Routes.countrydetails,item)
    //console.log(` clicked : ${item.name}`);
  }

  function handleSearch(text) {
    const filteredItems = countries.filter(country =>
      country.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCountries(filteredItems);
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={[styles.inputtv, { marginBottom: 10 }]}
          placeholder='Search Countries'
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredCountries}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCountryPress(item)} style={styles.listitem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
   
  );

}

export default CountryList;