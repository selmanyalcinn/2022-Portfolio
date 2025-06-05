import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  DevSettings,
  RefreshControl,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Note from "./Components/Notes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let arrayCopy = [];
  let arrayCopy2 = [];
  const [text, setText] = useState();
  const [title, setTitle] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [noteArray, setnoteArray] = useState([]);
  const [noteTitles, setNoteTitles] = useState([]);
  const [noteTexts, setNoteTexts] = useState([]);
  const [onload, setonload] = useState(0);
  const [selectedTitle, setselectedTitle] = useState();
  const [selectedText, setselectedText] = useState();
  const [noteKey, setNoteKey] = useState();
  const [keys, setkeys] = useState([]);
  const [selectedTitleKey, setselectedTitleKey] = useState();
  const [selectedTextKey, setselectedTextKey] = useState();

  const a = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const ıtems = await AsyncStorage.multiGet(keys);
    AsyncStorage.clear();
    console.log(keys);
  };

  const onLoad = async () => {
    if (onload == 0) {
      console.log("onload");
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      setkeys(keys);
      const ıtems = await AsyncStorage.multiGet(keys);
      const noteCount = ıtems.length;
      //veri okundu
      for (let i = 0; i < noteCount / 2; i++) {
        console.log("Çift");
        arrayCopy = arrayCopy.concat(ıtems[i][1]);
        console.log(arrayCopy);
        setNoteTexts(arrayCopy);
      }
      for (let i = noteCount / 2; i < noteCount; i++) {
        arrayCopy2 = arrayCopy2.concat(ıtems[i][1]);
        console.log(arrayCopy2);
        setNoteTitles(arrayCopy2);
      }
      //veriler düzenlendi
      console.log(ıtems);
      console.log(noteCount);
      setonload(1);
    }
  };

  const editNote = async () => {
    if (text != "" && title != "") {
      setModalVisible2(false);
      console.log("delete");
      console.log(noteKey);
      console.log(selectedText, selectedTitle);
      console.log(selectedTextKey, selectedTitleKey);
      AsyncStorage.setItem(selectedTextKey, text);
      AsyncStorage.setItem(selectedTitleKey, title);
      //
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      setkeys(keys);
      const ıtems = await AsyncStorage.multiGet(keys);
      const noteCount = ıtems.length;
      //
      for (let i = 0; i < noteCount / 2; i++) {
        console.log("çift");
        arrayCopy = arrayCopy.concat(ıtems[i][1]);
        console.log(arrayCopy);
        setNoteTexts(arrayCopy);
      }
      for (let i = noteCount / 2; i < noteCount; i++) {
        arrayCopy2 = arrayCopy2.concat(ıtems[i][1]);
        console.log(arrayCopy2);
        setNoteTitles(arrayCopy2);
      }
      //veriler düzenlendi
      console.log(ıtems);
      console.log(noteCount);
    } else {
      Alert.alert("Warning!", "Title and text cannot be empty !!");
    }
  };

  const deleteNote = async () => {
    setModalVisible2(false);
    console.log("delete");
    console.log(noteKey);
    console.log(selectedText, selectedTitle);
    console.log(selectedTextKey, selectedTitleKey);
    AsyncStorage.removeItem(selectedTextKey);
    AsyncStorage.removeItem(selectedTitleKey);
    //
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    setkeys(keys);
    const ıtems = await AsyncStorage.multiGet(keys);
    const noteCount = ıtems.length;
    //
    for (let i = 0; i < noteCount / 2; i++) {
      console.log("çift");
      arrayCopy = arrayCopy.concat(ıtems[i][1]);
      console.log(arrayCopy);
      setNoteTexts(arrayCopy);
    }
    for (let i = noteCount / 2; i < noteCount; i++) {
      arrayCopy2 = arrayCopy2.concat(ıtems[i][1]);
      console.log(arrayCopy2);
      setNoteTitles(arrayCopy2);
    }
    //veriler düzenlendi
    console.log(ıtems);
    console.log(noteCount);
    if (noteCount == 0) {
      console.log("hepsi silindi");
      setNoteTitles([1]);
    }
  };

  const addNote = async () => {
    setModalVisible(true);
    setText("");
    setTitle("");
  };
  const save = async () => {
    if (text != "" && title != "") {
      setModalVisible(false);
      const fakekeys = await AsyncStorage.getAllKeys();
      console.log(fakekeys);
      const fakeıtems = await AsyncStorage.multiGet(fakekeys);
      let noteCount2 = fakeıtems.length / 2;
      let noteTitle = "NoteTitle" + noteCount2.toString();
      let noteText = "NoteText" + noteCount2.toString();
      AsyncStorage.setItem(noteTitle, title);
      AsyncStorage.setItem(noteText, text);
      setText("");
      setTitle("");
      //veri yazıldı
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      setkeys(keys);
      const ıtems = await AsyncStorage.multiGet(keys);
      const noteCount = ıtems.length;
      //veri okundu
      for (let i = 0; i < noteCount / 2; i++) {
        console.log("çift");
        arrayCopy = arrayCopy.concat(ıtems[i][1]);
        console.log(arrayCopy);
        setNoteTexts(arrayCopy);
      }
      for (let i = noteCount / 2; i < noteCount; i++) {
        arrayCopy2 = arrayCopy2.concat(ıtems[i][1]);
        console.log(arrayCopy2);
        setNoteTitles(arrayCopy2);
      }
      //veriler düzenlendi
      console.log(ıtems);
      console.log(noteCount);
    } else {
      Alert.alert("Warning!", "Title and text cannot be empty !!");
    }
  };

  const openSet = async (title, text) => {
    setModalVisible2(true);
    const a = await AsyncStorage.getItem(text);
    const b = await AsyncStorage.getItem(title);
    setselectedTextKey(title);
    setselectedTitleKey(text);
    console.log(a, b);
    setText(b);
    setTitle(a);
  };

  onLoad();

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
              Note Title
            </Text>
            <TextInput
              style={[styles.TextInput, { flex: 0.15 }]}
              placeholder="   Note Title..."
              value={title}
              onChangeText={(title) => setTitle(title)}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
              Note Text
            </Text>
            <TextInput
              multiline={true}
              style={styles.TextInput}
              placeholder="   Note Text..."
              value={text}
              onChangeText={(notext) => setText(notext)}
            />
            <TouchableOpacity style={styles.saveButton} onPress={save}>
              <Entypo name="save" size={35} color="black" />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
              Note Title
            </Text>
            <TextInput
              style={[styles.TextInput, { flex: 0.15 }]}
              placeholder="   Note Title..."
              value={title}
              onChangeText={(title) => setTitle(title)}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
              Note Text
            </Text>
            <TextInput
              multiline={true}
              style={styles.TextInput}
              placeholder="   Note Text..."
              value={text}
              onChangeText={(notext) => setText(notext)}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",

                flex: 0.165,
                width: 190,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={[styles.saveButton, { flex: 0.5 }]}
                onPress={editNote}
              >
                <Entypo name="save" size={34} color="black" />
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.saveButton, { flex: 0.5, marginLeft: 20 }]}
                onPress={deleteNote}
              >
                <AntDesign name="delete" size={34} color="black" />
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.Header}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 15 }}>
          My Notes
        </Text>
      </View>
      <SafeAreaView style={styles.NoteArea}>
        <ScrollView style={styles.NoteScroll}>
          {noteTitles.map((item, key) => {
            if (item == 1 && noteTitles.length == 1) {
              return (
                <View
                  key={123}
                  style={{ flex: 1, backgroundColor: "white" }}
                ></View>
              );
            } else {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={(event) => {
                    setNoteKey(`${item}`);
                    openSet(
                      keys[parseInt(`${key}`)],
                      keys[parseInt(`${key}`) + keys.length / 2]
                    );
                  }}
                >
                  <Note title={item} text={noteTexts[key]} />
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity style={styles.AddButton} onPress={addNote}>
        <Text style={{ color: "black", fontSize: 25 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbdb04",
    display: "flex",
    flexDirection: "column",
  },
  Header: {
    backgroundColor: "#fbdb04",
    flex: 0.1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  NoteArea: {
    flex: 0.9,
    backgroundColor: "red",
    display: "flex",
  },
  NoteScroll: {
    flex: 0.9,
    backgroundColor: "#efefef",
    display: "flex",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
  AddButton: {
    position: "absolute",
    bottom: 50,
    right: 15,
    backgroundColor: "#fbdb04",
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: -10,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  TextInput: {
    width: 280,
    flex: 0.6,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  saveButton: {
    flex: 0.155,
    height: 80,
    width: 80,
    borderRadius: 80,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbdb04",
  },
});
