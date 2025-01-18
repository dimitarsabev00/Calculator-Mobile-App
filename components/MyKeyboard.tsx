import * as React from "react";
import CustomButton from "./CustomButton";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { Colors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: Colors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: Colors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <CustomButton title="C" isGray onPress={clear} />
        <CustomButton
          title="+/-"
          isGray
          onPress={() => handleOperationPress("+/-")}
        />
        <CustomButton
          title="％"
          isGray
          onPress={() => handleOperationPress("％")}
        />
        <CustomButton
          title="÷"
          isBlue
          onPress={() => handleOperationPress("/")}
        />
      </View>
      <View style={Styles.row}>
        <CustomButton title="7" onPress={() => handleNumberPress("7")} />
        <CustomButton title="8" onPress={() => handleNumberPress("8")} />
        <CustomButton title="9" onPress={() => handleNumberPress("9")} />
        <CustomButton
          title="×"
          isBlue
          onPress={() => handleOperationPress("*")}
        />
      </View>
      <View style={Styles.row}>
        <CustomButton title="4" onPress={() => handleNumberPress("4")} />
        <CustomButton title="5" onPress={() => handleNumberPress("5")} />
        <CustomButton title="6" onPress={() => handleNumberPress("6")} />
        <CustomButton
          title="-"
          isBlue
          onPress={() => handleOperationPress("-")}
        />
      </View>
      <View style={Styles.row}>
        <CustomButton title="1" onPress={() => handleNumberPress("1")} />
        <CustomButton title="2" onPress={() => handleNumberPress("2")} />
        <CustomButton title="3" onPress={() => handleNumberPress("3")} />
        <CustomButton
          title="+"
          isBlue
          onPress={() => handleOperationPress("+")}
        />
      </View>
      <View style={Styles.row}>
        <CustomButton title="." onPress={() => handleNumberPress(".")} />
        <CustomButton title="0" onPress={() => handleNumberPress("0")} />
        <CustomButton
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <CustomButton title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
