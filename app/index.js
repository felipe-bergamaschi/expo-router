import { useRouter } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../contexts/auth";

export default function App() {
  const { loading, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (loading) return

    if (isAuthenticated) {
      return router.push("/auth");
    }

    return router.push("/login");
  }, [loading, isAuthenticated]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Carregando...</Text>
    </View>
  )
}
