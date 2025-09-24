import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@react-navigation/elements';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
      <ThemedText>Enter vitals.</ThemedText>
      <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={"sdaf"}
        onChangeText={(text) => "dsfad"}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
    </View>
      <Button onPress={() => alert('Button pressed!')} > Press me</Button>

      <View style={styles.form}>
      </View>

      <View style={{ height: 16 }} />
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  form: {
    marginTop: 8,
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

