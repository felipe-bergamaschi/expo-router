import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../contexts/auth';

export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  function handleLogout() {
    logout()
    router.push('/login')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Bem vindo: {user.name}</Text>

      <Link
        href='/auth/profile'
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginTop: 10
        }}
      >
        <Text>Ir para o perfil</Text>
      </Link>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginTop: 10
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
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
