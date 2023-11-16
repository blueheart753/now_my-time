import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Image source={require('../assets/clock.png')} />
      </View>
      <View style={styles.textBox}>
        <View style={styles.text}>
          <Text style={styles.title}>
            지금 내
            <Text
              style={{ fontWeight: 'bold', color: '#88FF3F', fontSize: 35 }}
            >
              {' '}
              시간표
            </Text>
          </Text>
        </View>
        <View style={styles.mainText}>
          <View style={styles.postBox}>
            <Text style={styles.postMents}>지금은 _______</Text>
            <Text style={styles.postMents}>시작하라. 그리고 실천하라.</Text>
          </View>
          <View style={styles.postBox}>
            <Text style={styles.postMents}>Now, it is ______</Text>
            <Text style={styles.postMents}>
              You start is it and put into practice
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.nextPrev}>
        <TouchableOpacity
          style={styles.prevBox}
          onPress={() => handlePrevPress()}
        >
          <Text style={styles.prev}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextBox}
          onPress={() => handleNextPress()}
        >
          <Text style={styles.next}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pages}>
        <Text style={styles['page-0']}>○</Text>
        <Text style={styles.page}>●</Text>
        <Text style={styles.page}>●</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080D1B',
    alignItems: 'center',
    overflow: 'hidden',
  },
  clock: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 50,
    alignItems: 'center',
  },
  textBox: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  title: {
    textAlign: 'center',
    height: 100,
    fontSize: 30,
    color: '#fff',
  },
  mainText: {
    flex: 0.8,
    alignItems: 'center',
    position: 'relative',
    top: -40,
  },
  postBox: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 15,
  },
  postMents: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  nextPrev: {
    width: '120%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
  },
  prevBox: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: 0.26,
    position: 'relative',
    padding: 10,
  },
  nextBox: {
    padding: 10,
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: 0.26,
    position: 'relative',
  },
  prev: {
    textAlign: 'right',
    fontSize: 50,
    color: '#fff',
    opacity: 1,
  },
  next: {
    textAlign: 'left',
    fontSize: 50,
    color: '#fff',
    opacity: 1,
  },
  pages: {
    width: 200,
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  page: {
    fontSize: 25,
    color: '#fff',
  },
  ['page-0']: {
    fontSize: 30,
    color: '#fff',
  },
});
