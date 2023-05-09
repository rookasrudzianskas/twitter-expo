//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const SignIn = () => {
  return (
    <View>
      <TextInput
        placeholder={'Email'}
        className="h-10 flex-1 border"
      />
    </View>
  );
};

export default SignIn;
