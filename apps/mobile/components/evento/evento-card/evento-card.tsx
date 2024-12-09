import { bgZinc950, fontBold, p4, roundedMd, textCenter, textLg, textSm, textWhite, textXl, textXs, textZinc400, w9_10, wFull } from "@/style";
import { Evento } from "core";
import { Link } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

interface EventoCardProps extends Evento { }

export const EventoCard = ({ id, nome, image, descricao }: EventoCardProps) => {
  return (

    <View style={[bgZinc950]}>
      <Image source={{ uri: image }} style={[{ height: 150 }, wFull, roundedMd]} />
      <View style={[p4]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>{nome}</Text>
        <Text style={[textZinc400, textXs, textCenter, w9_10]}>{descricao}</Text>
      </View>
    </View>

  )
}