import * as Temi from 'expo-temi';
import { useEffect, useState } from 'react';
import { View, Image } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [theme, setTheme] = useState<string>(Temi.getTheme());
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const subscription = Temi.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  async function handleUserInput(text: string) {
    Temi.speak(text);
  }

  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text style={{ fontSize: 64, margin: 32 }}>POC of using Expo on Temi</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ width: 500 }}
          onChangeText={setText}
          value={text}
          numberOfLines={3}
        />
      </View>
      <Button mode="contained" onPress={() => 
        handleUserInput(text)
      }>
        Let temi speak
      </Button>
      {/* <Image
        style={{
          width: 400,
          height: 400,
          margin: 32,
        }}
        source={require('./assets/poc-img.jpg')}
      /> */}
    </View>
  );
}