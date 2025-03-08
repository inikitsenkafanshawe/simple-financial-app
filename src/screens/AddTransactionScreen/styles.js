import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderColor: "royalblue",
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "royalblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
