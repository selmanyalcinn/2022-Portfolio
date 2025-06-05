import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./Components/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const selman = ["a", "b", "c"];
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [onload, setonload] = useState(0);
  const [key, setKeys] = useState([]);

  const onLoad = async () => {
    if (onload == 0) {
      let arrayCopy = [];
      console.log("onload");
      const keys = await AsyncStorage.getAllKeys();
      setKeys(keys);
      const ıtems = await AsyncStorage.multiGet(keys);
      //veri okundu
      for (let i = 0; i < ıtems.length; i++) {
        arrayCopy = arrayCopy.concat(ıtems[i][1]);
        setTaskItems(arrayCopy);
      }
      //veriler düzenlendi
      setonload(1);
    }
  };

  const addTask = async () => {
    if (task != "") {
      let arrayCopy = [];
      const fakekeys = await AsyncStorage.getAllKeys();
      console.log(fakekeys);
      const fakeıtems = await AsyncStorage.multiGet(fakekeys);
      let noteCount2 = fakeıtems.length;
      let taskTitle = "TaskTitle" + noteCount2.toString();
      AsyncStorage.setItem(taskTitle, task);
      //veri yazıldı
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      const ıtems = await AsyncStorage.multiGet(keys);
      for (let i = 0; i < ıtems.length; i++) {
        arrayCopy = arrayCopy.concat(ıtems[i][1]);
        setTaskItems(arrayCopy);
      }
      setKeys(keys);
      setTask("");
    } else {
      Alert.alert("Warning!!", "Task Cannot be Empty");
    }
  };

  const completeTask = async (taskKey) => {
    console.log(taskKey);
    let arrayCopy = [];
    AsyncStorage.removeItem(taskKey);
    //
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    setKeys(keys);
    const ıtems = await AsyncStorage.multiGet(keys);
    //
    for (let i = 0; i < ıtems.length; i++) {
      arrayCopy = arrayCopy.concat(ıtems[i][1]);
      setTaskItems(arrayCopy);
    }
    if (ıtems.length == 0) {
      console.log("hepsi silindi");
      setTaskItems([1]);
    }
  };

  onLoad();

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>My Tasks</Text>
      </View>
      <SafeAreaView style={styles.TaskArea}>
        <ScrollView style={styles.TaskScroll}>
          {taskItems.map((item, index) => {
            if (item == 1 && taskItems.length == 1) {
              return (
                <View
                  key={123}
                  style={{ flex: 1, backgroundColor: "white" }}
                ></View>
              );
            } else {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={(event) => {
                    completeTask(key[parseInt(`${index}`)]);
                  }}
                >
                  <Task task={item} />
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.TaskSection}>
        <TextInput
          style={styles.input}
          placeholder="Write a task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.Button} onPress={addTask}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  Header: {
    backgroundColor: "#fbdb04",
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 20,
  },
  TaskArea: {
    display: "flex",
    flexDirection: "column",
    flex: 0.75,
    backgroundColor: "#efefef",
  },
  HeaderText: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  TaskSection: {
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "row",
    flex: 0.15,
    alignItems: "center",
  },
  TaskScroll: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#efefef",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    flex: 7,
    borderRadius: 20,
    backgroundColor: "white",
    fontSize: 18,
  },
  Button: {
    height: 60,
    width: 60,
    margin: 12,
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#fbdb04",
    alignItems: "center",
    justifyContent: "center",
  },
});
