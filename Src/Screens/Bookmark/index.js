import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { styles } from './style';
import { Bookmark, Bookmark1 } from '../../Themes/Images';

const Bookmarks = () => {
    const product=useSelector(State=>State.Productlist)
    const [itemStates, setItemStates] = useState(items.map(() => true));
     console.log(product)

     const toggleItemState = (index) => {
        const updatedStates = [...itemStates];
        updatedStates[index] = !updatedStates[index];
        setItemStates(updatedStates);
      };

    const renderItem = ({ item, index }) => (
        <View style={styles.Cart}>
          <TouchableOpacity  style={styles.Img_Cont}  onPress={() => { props.navigation.navigate('Uni_Detail', { item: item }) }} >
         <View style={styles.Title_City_Container}>
          <Text style={styles.Title}>{item.name}</Text>
            <View style={styles.City_Cont}>
              <Text style={styles.City_Text}>{item.City}</Text>
            </View>
            </View>         
          </TouchableOpacity>
          <View  style={{width:"10%",height:90,justifyContent:"flex-end"}}>
          {itemStates[index] ? (
            <TouchableOpacity onPress={() => {dispatch(Add_To_Wishlist(item.id)),toggleItemState(index) }}     style={{}} >
              <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]}/>
            </TouchableOpacity>
          ) : <TouchableOpacity onPress={() => {dispatch(Add_To_Wishlist(item.id)),toggleItemState(index)}} style={{}} >
            <Image source={Bookmark} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
          </TouchableOpacity>}
          </View>
        </View>
      );

  return (
    <View style={styles.MainCont}  >
    <View style={styles.FlatList_Cont} >
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={product}
      renderItem={renderItem}
     

    />
  </View>
    </View>
  )
}

export default Bookmarks