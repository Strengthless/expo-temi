import { StyleSheet, Text, View } from 'react-native';

import * as ExpoTemi from 'expo-temi';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoTemi.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
