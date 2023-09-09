import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";
import React from "react";

export default function App() {
  const [contact, setContact] = React.useState("");
  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = () => {
    if (contact.trim()!=="")
    {
      setContacts([...contacts, { name: contact }]);
      setContact("");}

  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Información del Contacto"
          onChangeText={(text) => setContact(text)}
          value={contact}
        />
        <Button title="Add Contact" onPress={addContactHandler} color="green" />
      </View>
      <View style={styles.contactsContainer}>
        <Text style={styles.listaStyle}>List of Contacts...</Text>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <View style={styles.showContact}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 80,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    marginRight: 10,
    padding: 10,

  },
  contactsContainer: {
    flex: 6,
  },
  showContact:{
    padding:20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: "black",
    backgroundColor: "#BDECB6"
  },
  listaStyle:{
    textAlign: 'center',
    marginVertical: 8,
    fontSize:24,
  }
  
});