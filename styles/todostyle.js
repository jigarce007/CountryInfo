import { StyleSheet } from "react-native";

const todostyles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:'column'
  },
  headercontainer:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:20
  },
  headerlbl:{
      width:'auto',
      fontSize:20,
      color:'#123456'
  },
  inputcontainer:{
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    alignContent:'space-between',
    padding:10,
  },
  inputtv:{
    flex:4,
    padding:10,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:5,
    fontSize:15
  },
  button:{
    flex:1,
    marginLeft:10,
    padding:8,
    borderRadius:5,
    backgroundColor:'green'
  },
  buttontext:{
      color:'white',
      fontSize:15
  },
  list: {
    flex: 1, // Ensure the FlatList takes up the remaining space
    width: '100%', // Ensure the FlatList takes the full width
  },
  listitem: {
    padding: 10,
    borderRadius:10,
    borderColor:'grey',
    marginRight:10,
    marginLeft:10,
    margin:5,
    flexDirection:'row',
    backgroundColor:'darkgrey',
    padding:10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  countryname:{
      flex: 1
  },
  flagStyle:{
    width:45,
    height:25
  }
  
});

export default todostyles;