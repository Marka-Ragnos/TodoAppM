import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => onRemove(todo.id)}
      onPress={() => onOpen(todo.id)}
    >
      <View>
        <Text style={styles.todo}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
});
