/**
 * Archivo para crear rutas de la app en donde validamos de que usuario este logueado para mostrar la pagina principal o mostrar el login
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import TabNav from "./TabNav";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MainNav = () => {
  const [checkedUser, SetcheckedUser] = useState(null);

  const user = useSelector((state) => state.authSlice.user);

  useEffect(() => {
    const chekuser = async () => {
      try{
        const userEmail = await AsyncStorage.getItem("userEmail");

        userEmail ? SetcheckedUser(userEmail) : SetcheckedUser(user)

      }catch(error){

        console.log(error);

      }
    }
    chekuser();
  }, [user])

  return (
    <NavigationContainer>{checkedUser ? <TabNav /> : <AuthNav />}</NavigationContainer>
  );
};

export default MainNav;
