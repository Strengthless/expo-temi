import * as Temi from 'expo-temi';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

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
      <Text>Theme: {Temi.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => Temi.setTheme(nextTheme)} />
    </View>
  );
}