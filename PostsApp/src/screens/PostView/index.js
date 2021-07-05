import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function PostView({route}) {
  const [user, setUser] = React.useState({});
  const [post, setPosts] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [filteredCommentsList, setFilteredCommentsList] = React.useState([]);
  const params = route.params;

  const filterComments = () => {
    if (comments && comments.length > 0) {
      const filteredlist = comments.filter(comment => {
        if (comment.postId === post.id) {
          return comment;
        }
      });
      setFilteredCommentsList(filteredlist);
    }
  };

  React.useEffect(() => {
    if (params.item) {
      console.log('itemsss-->', params.item, params.user);
      params.user && setUser(params.user);
      setPosts(params.item);
    }
  }, [params.item]);

  React.useEffect(() => {
    filterComments();
  }, [post, user]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        console.log('data--->', data);
        if (data) setComments(data);
      });
  }, []);
  const CommentView = ({item}) => {
    console.log('CommentView', item.item);
    return (
      <View
        style={{
          backgroundColor: '#FDD2BF',
          width: '100%',
          marginTop: 10,
          borderRadius: 3,
        }}>
        <Text style={{color: '#492F10', fontSize: 16}}>
          {item?.item.email || 'email'}
        </Text>
        <View style={{color: '#E6DDC6', fontSize: 14, padding: 5}}>
          <Text>{item?.item.body || 'body'}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return <CommentView item={{item}} />;
  };
  return (
    <>
      <View
        style={{
          width: '100%',
          marginHorizontal: 10,
          backgroundColor: '#fff',
          marginTop: 10,
        }}>
        <View style={{paddingVertical: 5}}>
          <Text style={{fontSize: 25, textAlign: 'left'}}>{post.title}</Text>
        </View>
        <View>
          <Text style={{color: '#FF616D', fontSize: 18}}>
            {user && user.username}
          </Text>
        </View>
        <View>
          <Text>{post.body}</Text>
        </View>
      </View>
      <FlatList
        data={filteredCommentsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View />
    </>
  );
}
