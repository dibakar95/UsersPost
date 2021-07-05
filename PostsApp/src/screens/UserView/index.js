import React from 'react';
import {View, Text} from 'react-native';

function UserView({route}) {
  const [user, setUser] = React.useState({});
  const params = route.params;
  React.useEffect(() => {
    if (params.user) {
      setUser(params.user);
    }
  }, [params.user]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{user?.email || 'Sincere@april.biz'}</Text>
      <Text>{user?.name || 'Leanne Graham'}</Text>
      <Text>{user?.website || 'hildegard.org'}</Text>
      <Text>Company</Text>
      <Text>{user?.company?.name || ''}</Text>
      <Text>{user?.company?.bs || ''}</Text>
      <Text>{user?.company?.catchPhrase || ''}</Text>
      <Text />
    </View>
  );
}
export default UserView;
