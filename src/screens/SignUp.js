import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../Auth";

export default () => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email адрес..." />
      <FormLabel>Пароль</FormLabel>
      <FormInput secureTextEntry placeholder="Пароль..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Войти"
        onPress={() => onSignIn()}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => alert("go to sign in screen")}
      />
    </Card>
  </View>
);
