import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";

export default function App() {

  /*1 */
  const [usuario, setUsuario] = useState({
    nombre: "",
    edad: ""
  });

  const edadValida = usuario.edad !== "" && !isNaN(Number(usuario.edad));


  /*2*/
  const [contador, setContador] = useState(0);
  const esPar = contador % 2 === 0;


  /*3 */
  const [mostrarDetalles, setMostrarDetalles] = useState(false);


  return (
    <View style={styles.container}>

      {/*E1 */}
      <Text style={styles.titulo}>Ejercicio 1</Text>

      <CustomInput
        placeholder="Nombre"
        value={usuario.nombre}
        onChange={(t) => setUsuario({ ...usuario, nombre: t })}
      />

      <CustomInput
        placeholder="Edad"
        value={usuario.edad}
        keyboardType="numeric"
        onChange={(t) => setUsuario({ ...usuario, edad: t })}
      />

      {edadValida && (
        <Text>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años.
        </Text>
      )}

      {!edadValida && <Text style={{ color: "red" }}>Edad inválida</Text>}



      {/*E2 */}
      <Text style={styles.titulo}>Ejercicio 2</Text>

      <Text style={{ fontSize: 22 }}>{contador}</Text>

      <CustomButton title="+1" onPress={() => setContador(contador + 1)} />
      <CustomButton title="-1" onPress={() => setContador(contador - 1)} />

      {contador < 0 && (
        <Text style={{ color: "red" }}>
          No se recomienda valores negativos
        </Text>
      )}

      <Text style={{ color: esPar ? "blue" : "purple" }}>
        {esPar ? "Número par" : "Número impar"}
      </Text>



      {/*E3 */}
      <Text style={styles.titulo}>Ejercicio 3</Text>

      <CustomButton
        title={mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"}
        onPress={() => setMostrarDetalles(!mostrarDetalles)}
      />

      {mostrarDetalles ? (
        <View style={{ alignItems: "center" }}>
          <Text>Detalles del usuario...</Text>
          <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      ) : (
        <Text>Detalles ocultos</Text>
      )}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },
});
