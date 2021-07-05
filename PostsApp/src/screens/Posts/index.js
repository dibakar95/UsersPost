import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Post = ({item, user}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostView', {item, user})}
      style={{
        width: '100%',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        marginTop: 10,
      }}>
      <View style={{paddingVertical: 5}}>
        <Text style={{fontSize: 25, textAlign: 'left'}}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('UserView', {user})}>
        <Text style={{color: '#FF616D', fontSize: 18}}>
          {user && user.username}
        </Text>
      </TouchableOpacity>
      <View>
        <Text>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Posts = ({userPosts, userList}) => {
  console.log('userList--->', userList);
  const renderItem = ({item}) => {
    const user =
      userList &&
      userList.length > 0 &&
      userList.filter(user => {
        if (user.id === item.userId) return user;
      })[0];
    return <Post item={item} user={user} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={userPosts}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index + item.id}
      />
    </View>
  );
};
export default Posts;
