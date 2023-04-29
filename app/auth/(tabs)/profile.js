import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { AuthContext } from '../../../contexts/auth';

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>

      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Website: {user.website}</Text>

      <StatusBar style="auto" />

      <Link
        href='/auth'
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginTop: 10
        }}
      >
        <Text>Ir para a home</Text>
      </Link>
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
