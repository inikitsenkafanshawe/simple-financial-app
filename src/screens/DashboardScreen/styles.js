import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  fab: {
    backgroundColor: "royalblue",
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionContainer: {
    backgroundColor: "moccasin",
    padding: 16,
    borderRadius: 12,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "600",
    color: "royalblue",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "royalblue",
  },
  transactionMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  metaText: {
    fontSize: 14,
    color: "lightsteelblue",
  },
  date: {
    fontSize: 14,
    color: "lightsteelblue",
  },
});
