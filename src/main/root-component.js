import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import UICounter from '../component/ui-counter';

const RootComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <UICounter />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});

export default RootComponent;
