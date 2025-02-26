import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { useDataStore } from "../../store/data";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { colors } from "@/constants/colors";

export default function Nutrition() {
  
  const userData = useDataStore(state => state.dataUser)

  const { data, isFetching, error } = useQuery({

    queryKey: ["nutrition"],

    queryFn: async () => {
      try {

        if(!userData) {
          throw new Error("Failed load nutrition")
        }

        const response = await api.post("/create", {
          name: userData.name,
          age: userData.age,
          gender: userData.gender,
          height: userData.height,
          weight: userData.weight,
          objective: userData.objective,
          level: userData.level
        })

        console.log(response.data)

        return response.data
        
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
  
  return(
    <View>
      <Text>TESTE PAGE</Text>
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
    alignItems: "center"
  }
})