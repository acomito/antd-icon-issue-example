import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import message from 'antd/lib/message';
import { loginWithPassword, createUser, changePassword, logout, onTokenChange } from 'meteor-apollo-accounts'
import ApolloClient from '/imports/ui/apollo/ApolloClient'

const afterLogin = (userId, apollo, _this) => {
  message.success('welcome!'); 
  apollo.resetStore();
  _this.setState({ loading: false });
  return browserHistory.push('/app');
}

const afterInviteLogin = (userId, apollo, _this, addFriendsOnInviteSignup, inviterId) => {

  let variables = { inviterId }
  addFriendsOnInviteSignup({ variables }).then(res => {
    message.success('welcome!'); 
    apollo.resetStore();
   _this.setState({ loading: false });
    return browserHistory.push(`/app`);
  }).catch( e => alertErrors(e, _this) );
}

export const alertErrors = (res, _this) => {
  const errors = res.graphQLErrors.map( err => err.message );
  errors.forEach(messageText => {
    message.error(messageText, 4);
    let errors = _this.state.errors;
    errors.push(messageText);
    _this.setState({ errors });
  });
  _this.setState({ loading: false });
}

export const handlePasswordChange = (oldPassword, newPassword) => {
  changePassword({oldPassword, newPassword}, ApolloClient)
    .then(res => console.log(res))
    .catch(e => console.log(e))
};

export const handleSignup = (email, password, profile, apollo, _this) => {
  createUser({email, password, profile}, apollo)
    .then(userId => 
      afterLogin(userId, apollo, _this)
    )
    .catch( res => alertErrors(res, _this) );
};

export const handleInviteSignup = (email, password, profile, apollo, _this, addFriendsOnInviteSignup, inviterId) => {
  createUser({email, password, profile}, apollo)
    .then(userId =>{
      console.log(userId)
      return afterInviteLogin(userId, apollo, _this, addFriendsOnInviteSignup, inviterId)
    })
    .catch( res => alertErrors(res, _this) );
};


export const handleLogin = (email, password, _this) => {
  loginWithPassword({email, password }, ApolloClient)
    .then( (userId) => afterLogin(userId, ApolloClient, _this) )
    .catch( res => alertErrors(res, _this) );
  //onTokenChange(({ userId, token }) => Meteor.loginWithToken(token, () => afterLogin(userId, props)));
};


export const handleLogout = (apollo, _this) => {
      logout(apollo)
        .then(()=> { 
          apollo.resetStore();
          message.success('you are logged out!', 3);
          return browserHistory.push('/'); 
        })
        .catch( res => alertErrors(res, _this) );
};