import base64 from 'react-native-base64'

export const onSignIn = async () => {
  fetch('http://mobile.loc/oauth', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': 'Basic ' + base64.encode('testclient:testpass')
    },
    body: JSON.stringify(
      {
        grant_type: 'password',
        username: 'testclient',
        password: 'testpass'
      }
    )
  }).then((response) => response.json())
    .then((res) => {
      if (typeof(res.message) !== "undefined") {
        alert("Error signing up", "Error: " + res.message);
      } else {
        // this.props.setState({auth_token: res.access_token});
        // this.props.setState({refresh_token: res.refresh_token});
        alert("Success", res.title);
      }
    }).catch((error) => {
    console.error(error);
  });
};

export const onSignOut = () => {
  console.log("handle sign out");
};
