import { StyleSheet, Dimensions } from "react-native";

export const { width } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    paddingVertical: -0,
    alignSelf: "center"
  },
  // Circular Container
  circleWrapper: {
    overflow: "hidden"
  },
  outerCircle: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "#ffffff",
    backgroundColor: "#00000000"
  },
  halfCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  imageWrapper: {
    position: "absolute",
    left: 0,
    zIndex: 10
  },
  image: {
    resizeMode: "stretch",
    height: width + 20,
    width: width + 20
  },
  innerCircle: {
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000000",
    width: width * 0.6,
    height: (width / 2) * 0.6,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
  },
  labelWrapper: {
    marginVertical: -4,
    alignItems: "center"
  },
  labelWrapperStyle:{
  },
  label: {
    color:"red",
    fontSize: 15,
    fontWeight: "bold"
  },
  labelmin:{
    color:"red",
    fontSize: 14,
    fontWeight: "bold"
  },
  labelNote: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
