import React,{useState} from 'react'
import { SafeAreaView,View, Text,StyleSheet,TouchableHighlight,TextInput,Image } from 'react-native'


export default function calcimc() {

  
  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)


  const calcImc=()=>{
    if(peso==0 || !peso){
      alert('Informe o peso')
      return
    }
    if(altura==0 || !altura){
      alert('Informe a Altura')
      return
    }
    const r = peso/(Math.pow(altura,2))
    setResultado(r.toFixed(1))
  }

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}> 
      <Text>Calculadora de IMC</Text>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe seu peso:</Text>
        <TextInput style={estilos.txt} autoFocus={true} keyboardType="numeric" onChangeText={text=>setPeso(text)}/>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe sua altura:</Text>
        <TextInput style={estilos.txt} autoFocus={false} keyboardType="numeric" onChangeText={text=>setAltura(text)}/>
      </View>
     <View style={estilos.bloco}>
       <TouchableHighlight style={estilos.btnCalc} onPress={()=>calcImc()} ><Text style={estilos.txtBtn}>Calcular IMC</Text></TouchableHighlight>
     </View>
      <View style={estilos.bloco}>
        <Text>Seu IMC é:{resultado}</Text>
      </View>
      <View style={estilos.bloco}>
      <Image source={require('./img/tabela_imc.png')} style={estilos.tabela}/>
      </View>
    
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  corpo:{
    padding:10,

  },
  bloco:{
    marginBottom:20
  },
  txt:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },
  btnCalc:{
    backgroundColor:'blue',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff',
  },
  tabela:{
    width:'100%',
    resizeMode:'contain',
    marginTop:-5,

  },

});