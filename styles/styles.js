import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex : 1,
    paddingBottom : 10,
    flexDirection : 'column'
  },
  topcontainer:{
        flex : 2,
        alignItems:'center',
        justifyContent : 'center',
        backgroundColor: '#ffffff'
  },
  midcontainer:{
    flex : 3,
    alignItems:"center",
    justifyContent : 'center',
    backgroundColor: '#28282b'
  },
  bottomcontainer:{
    flex : 2,
    alignItems:'center',
    justifyContent : 'flex-end',
    backgroundColor: '#ffffff'
  },
  textniput:{
    margin:5,
    borderWidth: 0.5,
    padding:15,
    flex:3,
    color:'#000000',
    borderRadius:10,
    borderColor : '#545454',
    placeholderTextColor : '#545454'
  },
  textinputFocused: {
    borderColor: '#69c9d0', // Change the border color when focused
    borderWidth: 1,
  },
  button:{
    backgroundColor:'#ee1d52',
    borderWidth: 0.5,
    alignItems:'center',
    flex:'1',
    padding:10,
    color:'#ffffff',
    borderRadius:10,
    borderColor : '#ffffff'
  },
  textlabelheader:{
    color:'#545454',
    padding:10,
    textAlign:'center',
    fontSize:20,
    fontStyle:"normal"
  },
  textlabelsmallitablic:{
    color:'#ffffff',
    width:'100%',
    marginTop:10,
    marginStart:500,
    fontSize:10,
    fontStyle:"italic"
  },
  buttonlablesmall:{color:'#ffffff',
  fontSize:15,
  alignContent:'space-evenly',
  fontStyle:"normal"
},
inputviewcontainer:{
  flex:1,
  flexDirection:'row'
},
ivtext:{
flex:4
},
buttontodo:{
  flex:1
},
flag:{
  width: "auto", 
  height: 250
},
tablecontainer: {
  padding: 20,
  backgroundColor: '#fff',
  
},
row: {
  flexDirection: 'row',
  borderColor:'#545454',
  borderWidth:1
},
label: {
  borderBlockEndColor:'#545454',
  borderEndWidth:1,
  flex: 1,
  fontWeight: 'bold',
  padding:10,
  fontSize: 16,
},
value: {
  flex: 2,
  padding:10,
  fontSize: 16,
},
separator: {
  marginHorizontal: 5,
  fontSize: 16,
}

});

export default styles;