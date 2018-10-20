import React from 'react';
import { View, Text } from 'react-native';
import ManageCommunityCard from '../globals/ManageCommunityCard';

export default class ManageCommunityRequestsScreen extends React.PureComponent {
  //placeholder
  requests = [{
    description: 'My wife and I need some water and food. Please help us!',
    timestamp: 3,
    mode: 'REQUEST',
    numberOfPeople: 2
  }];


  render() {
    return (
      <View style={{ paddingTop: 10 }}>
        {
          this.requests.map((request, i) => (
            <ManageCommunityCard
              key={i}
              description={request.description}
              timestamp={request.timestamp}
              mode={request.mode}
              numberOfPeople={request.numberOfPeople}
            />)
          )
        }
      </View>
    )
  }
}
