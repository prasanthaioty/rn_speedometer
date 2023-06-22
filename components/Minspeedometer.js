import React, { Component } from "react";
import { View, Image, Animated, Easing, Text } from "react-native";
import PropTypes from "prop-types";

// Utils
import calculateDegreeFromLabels from "../utils/calculate-degree-from-labels";
import calculateLabelFromValue from "../utils/calculate-label-from-value";
import limitValue from "../utils/limit-value";
import validateSize from "../utils/validate-size";

// Style
import style, { width as deviceWidth } from "../style";

// eslint-disable-next-line react/prefer-stateless-function
class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.speedometerValue = new Animated.Value(props.defaultValue);
  }

  render() {
    const {
      value,
      size,
      minValue,
      maxValue,
      easeDuration,
      allowedDecimals,
      labels,
      needleImage,
      wrapperStyle,
      outerCircleStyle,
      halfCircleStyle,
      imageWrapperStyle,
      imageStyle,
      innerCircleStyle,
      labelWrapperStyle,
      labelStyle,
      labelNoteStyle,
      useNativeDriver
    } = this.props;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
      limitValue(value, minValue, maxValue, allowedDecimals),
      labels,
      minValue,
      maxValue
    );
    Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: Easing.linear,
      useNativeDriver
    }).start();

    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ["-90deg", "90deg"]
    });
    console.log(size);
    const currentSize = validateSize(size, deviceWidth - 20);
    return (
      <View
        style={[
          style.wrapper,
          {
            width: currentSize,
            height: currentSize / 2
          },
          wrapperStyle
        ]}
      >
        <View
          style={[
            style.outerCircle,
            {
              width: currentSize,
              height: currentSize / 2,
              borderTopLeftRadius: currentSize / 2,
              borderTopRightRadius: currentSize / 2
            },
            outerCircleStyle
          ]}
        >
          <Animated.View
            style={[
              style.imageWrapper,
              {
                top: -currentSize / 7,
                transform: [{ rotate }]
              },
              imageWrapperStyle
            ]}
          >
            <Image
              style={[
                style.image,
                {
                  width: currentSize,
                  height: currentSize
                },
                imageStyle
              ]}
              source={needleImage}
            />
          </Animated.View>
          
          <View
            style={[
              style.innerCircle,
              {
                width: currentSize * 0.9,
                height: (currentSize / 2) * 0.9,
                borderTopLeftRadius: currentSize / 2,
                borderTopRightRadius: currentSize / 2
              },
              innerCircleStyle
            ]}
          />
           <View style={[style.labelWrapper, labelWrapperStyle]}>
          <Text style={[style.labelmin, labelStyle]}>
            {limitValue(value, minValue, maxValue, allowedDecimals)}
          </Text>
        </View>
        </View>
       
     
      </View>
    );
  }
}

Speedometer.defaultProps = {
  defaultValue: 0,
  minValue: 0,
  maxValue: 280,
  allowedDecimals: 0,
  labels: [
    {
      name: "hello",
      labelColor: "#CA3928",
      activeBarColor: "#CA3928"
    },
    {
      name: "world",
      labelColor: "#F89922",
      activeBarColor: "#F89922"
    },
    {
      name: "670",
      labelColor: "#f4ab44",
      activeBarColor: "#f4ab44"
    },
    {
      name: "740",
      labelColor: "#F2F31B",
      activeBarColor: "#F2F31B"
    },
    {
      name: "800",
      labelColor: "#A6CE39",
      activeBarColor: "#A6CE39"
    },
    {
      name: "850",
      labelColor: "#4EB748",
      activeBarColor: "#4EB748"
    }
  ],
  needleImage: require("../assets/speedometer-needle.png"),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
  useNativeDriver: true
};

Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  allowedDecimals: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
  useNativeDriver: PropTypes.bool
};

export default Speedometer;
