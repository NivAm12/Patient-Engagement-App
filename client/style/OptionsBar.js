import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcde67",
    flexDirection: "row",
    marginTop: 45,
    //alignItems: "flex-end",
    //display: "flex"
    // justifyContent: "center",
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
    borderRadius: 15,
    backgroundColor: "#e34444",
  },
  barText: {
    fontSize: 15,
    fontFamily: "sans-serif-condensed",
  },
});

export default styles;