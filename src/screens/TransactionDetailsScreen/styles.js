import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  detailContainer: {
    padding: 20,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "royalblue",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "royalblue",
  },
  value: {
    fontSize: 18,
  },
});
