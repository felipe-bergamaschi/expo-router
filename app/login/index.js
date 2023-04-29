import { useContext, useState } from "react";

import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { useLogin, useLoginExemple } from "../../query/login";

export default function App() {
  const { login } = useContext(AuthContext);

  const router = useRouter();

  const [error, setError] = useState(null)

  async function handleLogin() {
    setError(null)

    try {
      // const { data } = await useLogin({ username: '', password: '' })

      const { data } = await useLoginExemple()

      login(data[0])

      router.push('/auth')
    } catch (error) {
      console.log({ error })
      setError(error)
    }

  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          borderRadius: 5
        }}
      >
        <Text>Fazer login</Text>
      </TouchableOpacity>

      {error && <Text>Aconteceu um erro</Text>}
    </View>
  );
}