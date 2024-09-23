import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GridLayout = () => {
  return (
    <View style={styles.container}>
      {/* Top Large Red Section */}
      <View style={styles.row}>
        <View style={styles.redBox}>
          <Text style={styles.text}>RÖD</Text>
        </View>
      </View>

      {/* Green and Yellow Section */}
      <View style={styles.row}>
        <View style={styles.greenBox}>
          <Text style={styles.text}>GRÖN</Text>
        </View>
        <View style={styles.yellowBox}></View>
      </View>

      {/* Small Red and Black Section */}
      <View style={styles.row}>
        <View style={styles.smallRedBox}></View>
        <View style={styles.blackBox}></View>
      </View>

      {/* Large Blue Section */}
      <View style={styles.blueBox}></View>

      {/* Orange Bottom Section */}
      <View style={styles.orangeBox}>
        <Text style={styles.text}>ORANGE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 2,
  },
  row: {
    flexDirection: 'row',
  },
  redBox: {
    flex: 1,
    height: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBox: {
    flex: 1,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowBox: {
    flex: 1,
    height: 100,
    backgroundColor: 'gold',
  },
  smallRedBox: {
    flex: 2,
    height: 50,
    backgroundColor: 'red',
  },
  blackBox: {
    flex: 1,
    height: 50,
    backgroundColor: 'black',
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  orangeBox: {
    height: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GridLayout;
