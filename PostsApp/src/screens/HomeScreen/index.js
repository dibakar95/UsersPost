import React from 'react';
import {connect, useSelector} from 'react-redux';
import {postsSelector, usersSelector} from '../../store/selectors';
import {View, Text, SafeAreaView} from 'react-native';
import Posts from '../Posts';
import ActionTriggers from '../../store/actions';
const HomeScreen = ({fetchPosts, posts, users, fetchUsers}) => {
  const [userPosts, setUserPosts] = React.useState([]);
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);
  React.useEffect(() => {
    if (posts && posts.length > 0) {
      setUserPosts(posts);
    }
  }, [posts]);

  React.useEffect(() => {
    if (users && users.length > 0) {
      console.log('userssss', users);
      setUserList(users);
    }
  }, [users]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          height: 40,
          width: '100%',
          backgroundColor: '#1EAE98',
        }}>
        <Text
          style={{
            color: '#FDFAF6',
            fontFamily: 'Roboto-Regular',
            fontSize: 30,
          }}>
          Posts
        </Text>
      </View>
      <Posts userPosts={userPosts} userList={userList} />
    </SafeAreaView>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchPosts: ActionTriggers.fetchPostsRequest(dispatch),
  fetchUsers: ActionTriggers.fetchUsersRequest(dispatch),
});

const mapStateToProps = state => ({
  posts: postsSelector(state),
  users: usersSelector(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
