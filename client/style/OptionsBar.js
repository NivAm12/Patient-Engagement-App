import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcde67",
    marginTop: 45,
    flexDirection: 'row',
  },
  barItem: {
    width: 95,
    height: 70,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    padding: 8,
    marginBottom: -35,
    borderRadius: 15,
    backgroundColor: "#e34444",
  },
  barText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: "sans-serif-condensed",
  },
});

export default styles;