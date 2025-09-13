import { offers } from "@/constants";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <View>
            <Pressable className="bg-amber-600">
              <Text>{item.title}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
