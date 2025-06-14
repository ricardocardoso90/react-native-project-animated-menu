import { useState } from "react";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from "react-native";
import { Option } from "../../components/option";
import { StatusBar } from "expo-status-bar";

export function Home() {
  const [option, setOption] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Feather
            size={18}
            name="chevron-left"
          />
        </Pressable>

        <View style={styles.options}>
          <Option
            title="Home"
            icon="home"
            onPress={() => setOption("home")}
            isSelected={option === "home"}
          />
          <Option
            title="Documentos"
            icon="file-text"
            onPress={() => setOption("documentos")}
            isSelected={option === "documentos"}
          />
          <Option
            title="Notificações"
            icon="bell"
            onPress={() => setOption("notificações")}
            isSelected={option === "notificações"}
          />
        </View>

      </View>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{color: '#FFF', fontSize: 24}}>Restante do App!! 😄</Text>
      </View>
    </View>
  )
};