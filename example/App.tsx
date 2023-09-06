import * as Temi from 'expo-temi';
import { useState } from 'react';
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [text, setText] = useState<string>('');

  async function handleUserInput(text: string) {
    Temi.speak(text);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <Text style={{ fontSize: 64, margin: 16 }}>POC of using Expo on Temi</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ width: 500, height: 100 }}
          onChangeText={setText}
          value={text}
        />
      </View>
      <Button mode="contained" onPress={() => 
        handleUserInput(text)
      }>
        Let temi speak
      </Button>
    </View>
  );
}