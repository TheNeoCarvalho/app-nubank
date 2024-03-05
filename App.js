import {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <View style={styles.contentHeader}>
            <Image
              style={styles.avatarHeader}
              source={{
                uri: "https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/57511932_2694824357256408_6013343935437471744_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gakpHu-dd90AX8Yq0X2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBy4OnqvLAo3uIGsTvJ57PfLxzqDntL7s0rendevnuFBA&oe=65E12E28&_nc_sid=8b3528",
              }}
            />
            <View style={styles.iconsHeader}>
              <Feather name="eye" color="white" size={22} />
              <AntDesign name="questioncircleo" size={22} color="white" />
              <Feather name="user" size={22} color="white" />
            </View>
          </View>
          <Text style={styles.textHeader}>Olá, Manoel</Text>
        </View>
        <View style={styles.account}>
          <View style={styles.accountButton}>
            <Text style={styles.textAccount}>Conta</Text>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </View>
          <Text style={styles.textAmount}>R$ 139.297,89</Text>
        </View>
        <View
          style={{ height: 150, paddingHorizontal: 20, paddingVertical: 20 }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.servicos}>
              <View style={styles.servico}>
                <MaterialIcons name="pix" size={28} />
              </View>
              <Text style={{ marginTop: 10 }}>Área Pix</Text>
            </View>

            <View style={styles.servicos}>
              <View style={styles.servico}>
                <FontAwesome6 name="money-bill-transfer" size={28} />
              </View>
              <Text style={{ marginTop: 10 }}>Transferir</Text>
            </View>

            <View style={styles.servicos}>
              <View style={styles.servico}>
                <FontAwesome6 name="barcode" size={28} />
              </View>
              <Text style={{ marginTop: 10 }}>Pagar</Text>
            </View>

            <View style={styles.servicos}>
              <View style={styles.servico}>
                <MaterialIcons name="attach-money" size={28} />
              </View>
              <Text style={{ marginTop: 10 }}>Depositar</Text>
            </View>

            <View style={styles.servicos}>
              <View style={[{ marginTop: 10 }, styles.servico]}>
                <MaterialCommunityIcons name="hand-coin" size={28} />
              </View>
              <Text style={{ marginTop: 10 }}>Pegar </Text>
              <Text>emprestado</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.myCards}>
          <MaterialCommunityIcons
            name="card-multiple-outline"
            size={28}
            color="black"
          />
          <Text style={{ marginLeft: 10 }}>Meus Cartões</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#ddd",
            marginVertical: 22,
          }}
        />
        <View style={{ width: "85%" }}>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "95%" }}>
              <Feather name="credit-card" size={28} color="black" />
              <Text
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingVertical: 10,
                }}
              >
                Cartão de Crédito
              </Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </View>
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              paddingVertical: 4,
            }}
          >
            Fatura atual
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              paddingVertical: 4,
              fontWeight: "bold",
            }}
          >
            R$ 18.987,90
          </Text>
          <Text
            style={{
              color: "#444",
              fontSize: 14,
            }}
          >
            Limite disponível: 89.878,10
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#ddd",
            marginVertical: 22,
          }}
        />

        <View style={{ width: "85%" }}>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "95%" }}>
              <MaterialCommunityIcons
                name="hand-coin"
                size={28}
                color="black"
              />
              <Text
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingVertical: 10,
                }}
              >
                Meus emprestimos
              </Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </View>
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              paddingVertical: 4,
            }}
          >
            Até 200.000,00 disponível para você.
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#ddd",
            marginVertical: 22,
          }}
        />

        <View style={{ width: "85%" }}>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "95%" }}>
              <FontAwesome5 name="signal" size={28} color="black" />
              <Text
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingVertical: 10,
                }}
              >
                Investimentos
              </Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </View>
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              paddingVertical: 4,
            }}
          >
            Conheça nossos fundos de investimentos.
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#ddd",
            marginVertical: 22,
          }}
        />

        <View style={{ width: "85%" }}>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "95%" }}>
              <AntDesign name="heart" size={28} color="black" />
              <Text
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingVertical: 10,
                }}
              >
                Seguro de vida
              </Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </View>
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              paddingVertical: 4,
            }}
          >
            Um seguro completo que cabe no seu bolso.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myCards: {
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eee",
    flexDirection: "row",
    width: "85%",
    height: 50,
    borderRadius: 6,
  },
  servico: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  servicos: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  account: {
    width: "100%",
  },
  accountButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textAccount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textAmount: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#9c44dc",
    width: "100%",
    height: 200,
  },
  avatarHeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
  textHeader: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
