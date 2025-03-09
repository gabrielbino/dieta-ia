import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView
} from "react-native";
import { useDataStore } from "../../store/data";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { colors } from "@/constants/colors";
import { Data } from "@/types/data";
import { Link } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

interface ResponseData {
  data: Data
}

export default function Nutrition() {
  
  const userData = useDataStore(state => state.dataUser)

  const { data, isFetching, error } = useQuery({

    queryKey: ["nutrition"],

    queryFn: async () => {
      try {

        if(!userData) {
          throw new Error("Failed load nutrition")
        }

        const response = await api.post<ResponseData>("/create", {
          name: userData.name,
          age: userData.age,
          gender: userData.gender,
          height: userData.height,
          weight: userData.weight,
          objective: userData.objective,
          level: userData.level
        })

        return response.data.data
        
      } catch(err) {
        console.log(err);
      }
    }
  })
  
  if(isFetching) {
    return(
      <View style={styles.loading}>
        
        <Text style={styles.loadingText}>Estamos gerando sua dieta!</Text>

        <Text style={styles.loadingText}>Consultando IA...</Text>

      </View>
    )
  }

  if(error) {
    return(
      <View style={styles.loading}>
        
        <Text style={styles.loadingText}>Falha ao gerar dieta!</Text>

        <Link href="/">
          
          <Text style={styles.loadingText}>Tente novamente</Text>

        </Link>

      </View>
    )
  }
  
  return(
    <View style={styles.container}>
      
      <View style={styles.containerHeader}>
        
        <View style={styles.contentHeader}>

          <Text style={styles.title}>Minha dieta</Text>

          <Pressable style={styles.buttonShare}>

            <Text style={styles.buttonShareText}>Compartilhar</Text>

          </Pressable>

        </View>

      </View>

      <View style={styles.view}>
        
        {data && Object.keys(data).length > 0 && (
          <>
            <Text style={styles.name}>
              {data.nome}
            </Text>
            
            <Text style={styles.objective}>
              Foco: {data.objetivo}
            </Text>

            <ScrollView>

              <View style={styles.foods}>
              
                <Text style={styles.label}>
                  Refeições:
                </Text>
                
                {data.refeicoes.map((refeicao) => (

                  <View key={refeicao.nome} style={styles.food}>
                    
                    <View style={styles.foodHeader}>

                      <Text>{refeicao.nome}</Text>

                      <Ionicons name="restaurant" size={16} color="#000"/>

                    </View>

                    <View style={styles.foodContent}>
                      
                      <Feather name="clock" size={16} color="000"/>

                      <Text>Horário: {refeicao.horario}</Text>

                    </View>

                    <Text style={styles.foodText}>
                      Alimentos:
                    </Text>

                    {refeicao.alimentos.map(alimento => (

                      <Text key={alimento}>
                        {alimento}
                      </Text>

                    ))}

                  </View>

                ))}

              </View>

              <View style={styles.suplements}>
                
                <Text style={styles.foodName}>
                  Dica de suplementos:
                </Text>

                {data.suplementos.map(item => (

                  <Text key={item}>
                    {item}
                  </Text>

                ))}
                
              </View>

              <Pressable style={styles.button}>

                <Text style={styles.buttonText}>
                  Gerar nova dieta
                </Text>

              </Pressable>

            </ScrollView>
          </>
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  loading: {
    flex: 1,
    backgroundColor: colors.background,
  },

  loadingText: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: colors.background,
    flex: 1,
  },

  containerHeader: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingTop: 60,
    paddingBottom: 20,
    marginBottom: 16,
  },

  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontSize: 28,
    color: colors.background,
    fontWeight: "bold",
  },

  buttonShare: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },

  buttonShareText: {
    color: colors.white,
    fontWeight: "500",
  },

  view: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },

  name: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },

  objective: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 24,
  },

  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  },

  foods: {
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },

  food: {
    backgroundColor: "rgba(208, 208, 208, 0.4)",
    padding: 8,
    borderRadius: 8,
  },

  foodHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  foodContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  foodText: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 14,
  },

  suplements: {
    backgroundColor: colors.white,
    marginTop: 14,
    marginBottom: 14,
    padding: 14,
    borderRadius: 8,
  },

  button: {
    backgroundColor: colors.blue,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
  }
})