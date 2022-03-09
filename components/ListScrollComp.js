import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'


export default function ListScrollComp() {

    const [people, setPeople] = useState([
        {name: 'shaun', id: '1'},
        {name: 'mario', id: '2'},
        {name: 'luigi', id: '3'},
        {name: 'testowy', id: '4'},
        {name: 'bobi', id: '5'},
        {name: 'paul', id: '6'},
        {name: 'josh', id: '7'},
      ]);

      const pressHandler = (id) =>{
          console.log(id);
          setPeople((prevPeople)=>{
            return prevPeople.filter(person=>person.id != id);
          })
      }
      return <FlatList 
      numColumns={2}
      keyExtractor={(item)=>item.id}
      data={people} 
      renderItem={({item})=>(
        <TouchableOpacity  onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
      //   return people.map(item=>(
//           <View key={item.key}>
//               <Text style={styles.item}>{item.name}</Text>
//           </View>
//       ))

    }
const styles = StyleSheet.create({
    item:{
        marginTop: 24,
        padding:30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10,
    }
})