import * as Temi from 'expo-temi';
import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default function App() {
  const [theme, setTheme] = React.useState<string>(Temi.getTheme());

  React.useEffect(() => {
    const subscription = Temi.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Theme: {Temi.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => Temi.setTheme(nextTheme)} /> */}
      <Button title={`Let temi speak`} onPress={() => Temi.speak()} />
      <Image
        style={{
          width: 400,
          height: 400,
          margin: 32,
        }}
        source={require('./assets/poc-img.jpg')}
      />
      {/* <Text style={{ fontSize: 96 }}>Hello Warren</Text> */}
      <Text style={{ fontSize: 64 }}>POC of using Expo on Temi</Text>
    </View>
  );
}