import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingStateProps {
  texto: string;
  paddingVertical?: number;
}

export function LoadingState({ texto, paddingVertical }: LoadingStateProps) {
  return (
    <View style={[styles.container, paddingVertical !== undefined && { paddingVertical }]}>
      <ActivityIndicator size="large" color="#501673" />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    marginTop: 12,
    fontSize: 15,
    color: "#6c757d",
  },
});