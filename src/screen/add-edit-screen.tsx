import React, {FunctionComponent, useState, useEffect} from "react"
import {View, Text, Button, TextInput, Image} from "react-native"
import Contact, {FullName} from "../model/contact";

const AddOrEditScreen : FunctionComponent = () =>{

    const full : FullName = {first : "benny", last : "nkonga"}
    const myContact = new Contact(full, "0815490426", "m", "bennyibmn@yopmail.com", "lien linkedin")


    const onSaveButtonClickHandler = () =>{
        console.log("Save button clicked!")
    }

    const onTextInputChangeHandler = (inputName : string, inputValue : string) =>{
        console.log(inputValue)
    }

    return (
        <View>
            <Text>My Main screen</Text>

            <View style={{margin : 20}}>
                <Image source={require("../../assets/logo-big.png")} style={{height : 200}} />
            </View>

            <TextInput onChangeText={text => onTextInputChangeHandler("first", text)} style={{padding : 10, margin : 10,  backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>Prenom</TextInput>
            <TextInput style={{padding : 10, margin : 10, backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>Nom</TextInput>
            <TextInput style={{padding : 10,  margin : 10,backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>Genre</TextInput>
            <TextInput style={{padding : 10,  margin : 10,backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>Phone</TextInput>
            <TextInput style={{padding : 10,  margin : 10,backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>Mail</TextInput>
            <TextInput style={{padding : 10,  margin : 10, backgroundColor : "whitesmoke", borderWidth : 1, borderColor : "dodgerblue"}}>linkedin</TextInput>

            <View style={{padding : 10, margin : 10}}>
                <Button title={"Save the contact" + Contact.getAll().toString()} onPress={onSaveButtonClickHandler} />
            </View>
        </View>
    )

}


export default AddOrEditScreen
