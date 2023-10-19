import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [displayText, setDisplayText] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleButtonPress = () => {
    const name = 'Batool Abusall'; 
    const universityID = '139767';
    const newDisplayText = showInfo ? '' : `${name}\n${universityID}`;
    
    setDisplayText(newDisplayText);
    setShowInfo(!showInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{displayText}</Text>
      <Button title={showInfo ? "Hide Info" : "Show Info"} onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
