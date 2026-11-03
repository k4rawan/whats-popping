import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function CreateParty() {
  const [readOnly, setReadOnly] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Private Party</Text>
      <Text style={styles.sub}>Only invited friends can see and join. You can charge a cover.</Text>

      <Text style={styles.label}>Party Name</Text>
      <TextInput style={styles.input} placeholder="e.g. rooftop vibes only" placeholderTextColor="#666" />

      <Text style={styles.label}>Cover Charge (optional)</Text>
      <TextInput style={styles.input} placeholder="0.00" keyboardType="numeric" placeholderTextColor="#666" />

      <View style={styles.row}>
        <Text style={styles.label}>Read-only group for announcements</Text>
        <Switch value={readOnly} onValueChange={setReadOnly} trackColor={{ true: '#ff2d92' }} />
      </View>
      <Text style={styles.hint}>Guests can’t send messages, only receive updates from you.</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Create Party</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancel} onPress={() => router.back()}>
        <Text style={{ color: '#888' }}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b', padding: 16 },
  title: { color: '#fff', fontSize: 24, fontWeight: '700', marginBottom: 8 },
  sub: { color: '#8e8e9a', marginBottom: 20 },
  label: { color: '#fff', marginTop: 12, marginBottom: 6 },
  input: { backgroundColor: '#12121a', color: '#fff', padding: 14, borderRadius: 12, borderWidth: 1, borderColor: '#333' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 },
  hint: { color: '#666', fontSize: 13, marginTop: 4 },
  btn: { backgroundColor: '#ff2d92', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  cancel: { alignItems: 'center', marginTop: 16, marginBottom: 40 },
});
