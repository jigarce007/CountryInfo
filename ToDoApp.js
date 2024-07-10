import React, { useState, useEffect } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles/todostyle';
import MainNavigation from './navigation/MainNavigation';

const ToDoApp = () => {
  

  return (
    <NavigationContainer>
    <MainNavigation>

    </MainNavigation>
    </NavigationContainer>
  );
};

export default ToDoApp;
