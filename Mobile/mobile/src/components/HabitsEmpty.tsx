import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native"; 

export function HabitsEmpty(){
    const {navigate} = useNavigation()
  return (
      <Text className= "text-zinc-400 text-base">
        Voce ainda no esta monitoreando ningun hábito ['']
            <Text
            className="text-violet-400 text-base underline active:text-violet-500"
            onPress={() => navigate('new')}
            >
              Comece cadastrando um novo Hábito.
            </Text>
      </Text>

      
  )
}