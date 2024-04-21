import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../Themes/Colors';
import { Bookmark1 } from '../../Themes/Images';
import { Removetocart } from '../../Redux_Toolkit/wishlist/Uni_Wishlist';
import { styles } from './style';

const Bookmarks = ({ navigation }) => {
  const dispatch = useDispatch()
  const Uni = useSelector((state) => state.uni); // Accessing 'user' slice
  const Data = useSelector((state) => state.Get_All_Uni_Data);
  const job = useSelector((state) => state.Job);
  const sch = useSelector((state) => state.Scholarship);

  const [btnstate, setbtnstate] = useState(0)

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity style={styles.Img_Cont} onPress={() => { navigation.navigate('Uni_Detail', { item: item }) }} >
        <Image source={{ uri: item.data.Logo[0] }} style={styles.Product_Img} resizeMode='cover' />
        <View style={styles.Title_City_Container}>
          <Text style={styles.Title}>{item.data.name}</Text>
          <View style={styles.City_Cont}>
            <Text style={styles.City_Text}>{item.data.City}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: "10%", height: 90, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => { dispatch(Removetocart(item.id)) }} style={{}} >
          <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Header_Txt} >My Bookmarks</Text>
      </View>
      <View style={styles.Btn_Cont}>
        <TouchableOpacity onPress={() => { setbtnstate(0) }} style={[btnstate === 0 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 0 ? styles.Active_Txt : styles.txt]} >University</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(1) }} style={[btnstate === 1 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 1 ? styles.Active_Txt : styles.txt]}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(2) }} style={[btnstate === 2 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 2 ? styles.Active_Txt : styles.txt]} >Scholarship</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FlatList_Cont} >
        {btnstate === 0 ?
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Uni}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}

          /> : null}
        {btnstate === 1 ?
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          /> : null}
        {btnstate === 2 ?
          <FlatList
            data={sch}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          /> : null}
      </View>

    </View>
  );
};





export default Bookmarks;





