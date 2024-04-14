import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { styles } from './style';
import { Bookmark, Bookmark1 } from '../../Themes/Images';
 const SearchItemData=[
  {
      Id:1,
      Image1:require('../../Assets/Images/university.png'),
      Image2:require('../../Assets/Images/drop1.png'),
      Image3:require('../../Assets/Images/chatting.png'),
      Title:'Khwaja Fareed University of Engineering and Information Technology',
      City:'Rahim Yar Khan',
      Status:'Goverment',
      Location:'Abu Dhabi Rd, Rahim Yar Khan, Punjab',
      Price:'CHF 3.60 /day',
      MeetingPoint:'Meeting Point: Rolex Learning Center, 1015 Ecublens, Suisse',
      Description:'This headset offers ultimate comfort for prolonged gaming sessions through its low weight and noise reducing closed ear cups using soft comfortable signature memory foam with a highly adjustable headband for a perfect fit. Crystal clear sound and excellent noise isolation bring you a total immersion into your gaming session.',
  },
  {
      Id:2,
      Image1:require('../../Assets/Images/university.png'),
      Image2:require('../../Assets/Images/university.png'),
      Image3:require('../../Assets/Images/university.png'),
      Title:'Khwaja Fareed University of Engineering and Information Technology',
      City:'Rahim Yar Khan',
      Status:'Goverment',
      Location:'Abu Dhabi Rd, Rahim Yar Khan, Punjab',
      Price:'CHF 3.60 /day',
      MeetingPoint:'Meeting Point: Rolex Learning Center, 1015 Ecublens, Suisse',
      Description:'This headset offers ultimate comfort for prolonged gaming sessions through its low weight and noise reducing closed ear cups using soft comfortable signature memory foam with a highly adjustable headband for a perfect fit. Crystal clear sound and excellent noise isolation bring you a total immersion into your gaming session.',
  },
  {
      Id:3,
      Image1:require('../../Assets/Images/university.png'),
      Image2:require('../../Assets/Images/university.png'),
      Image3:require('../../Assets/Images/university.png'),
      Title:'Khwaja Fareed University of Engineering and Information Technology',
      City:'Rahim Yar Khan',
      Status:'Goverment',
      Location:'Abu Dhabi Rd, Rahim Yar Khan, Punjab',
      Price:'CHF 3.60 /day',
      MeetingPoint:'Meeting Point: Rolex Learning Center, 1015 Ecublens, Suisse',
      Description:'This headset offers ultimate comfort for prolonged gaming sessions through its low weight and noise reducing closed ear cups using soft comfortable signature memory foam with a highly adjustable headband for a perfect fit. Crystal clear sound and excellent noise isolation bring you a total immersion into your gaming session.',
  },
  {
      Id:4,
      Image1:require('../../Assets/Images/university.png'),
      Image2:require('../../Assets/Images/university.png'),
      Image3:require('../../Assets/Images/university.png'),
      Title:'Khwaja Fareed University of Engineering and Information Technology',
      City:'Rahim Yar Khan',
      Status:'Goverment',
      Location:'Abu Dhabi Rd, Rahim Yar Khan, Punjab',
      Price:'CHF 3.60 /day',
      MeetingPoint:'Meeting Point: Rolex Learning Center, 1015 Ecublens, Suisse',
      Description:'This headset offers ultimate comfort for prolonged gaming sessions through its low weight and noise reducing closed ear cups using soft comfortable signature memory foam with a highly adjustable headband for a perfect fit. Crystal clear sound and excellent noise isolation bring you a total immersion into your gaming session.',
  },
]


   
const Bookmarks = () => {
  // const [itemStates, setItemStates] = useState(Array(SearchItemData.length).fill(true)); // Initialize itemStates with an array of true values


  // const toggleItemState = (index) => {
  //   const updatedStates = [...itemStates];
  //   updatedStates[index] = !updatedStates[index];
  //   setItemStates(updatedStates);
  // };

  // const renderItem = ({ item, index }) => (
  //   <View style={styles.Cart}>
  //     <TouchableOpacity style={styles.Img_Cont} onPress={() => { props.navigation.navigate('Uni_Detail', { item: item }) }}>
  //       <View style={styles.Title_City_Container}>
  //         <Text style={styles.Title}>{item.name}</Text>
  //         <View style={styles.City_Cont}>
  //           <Text style={styles.City_Text}>{item.City}</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //     <View style={{ width: "10%", height: 90, justifyContent: "flex-end" }}>
  //       {itemStates[index] ? (
  //         <TouchableOpacity onPress={() => { dispatch(Add_To_Wishlist(item.id)); toggleItemState(index) }}>
  //           <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
  //         </TouchableOpacity>
  //       ) : (
  //         <TouchableOpacity onPress={() => { dispatch(Add_To_Wishlist(item.id)); toggleItemState(index) }}>
  //           <Image source={Bookmark} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
  //         </TouchableOpacity>
  //       )}
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.MainCont}>
    <Text>Bookmark</Text>
     
    </View>
  );
};

export default Bookmarks;

//  <View style={styles.FlatList_Cont}>
// <FlatList
// showsHorizontalScrollIndicator={false}
// showsVerticalScrollIndicator={false}
// data={SearchItemData}
// renderItem={renderItem}
// />
// </View>