import React from 'react';
import { View, Text } from 'react-native';
import ManageCommunityCard from '../globals/ManageCommunityCard';

export default class ManageCommunityOffersScreen extends React.PureComponent {
  //placeholder
  offers = [
    {
      description: 'I can offer food and water for 2 people. Also have some clothing and baby supplies.',
      timestamp: 3,
      mode: 'OFFER',
      numberOfPeople: 2
    },
    {
      description: 'I can offer food and water for 2 people. Also have some clothing and baby supplies.',
      timestamp: 3,
      mode: 'OFFER',
      numberOfPeople: 3
    }
  ];

  render() {
    return (
      <View style={{ paddingTop: 10 }}>
        {
          this.offers.map((offer, i) => (
            <ManageCommunityCard
              key={i}
              description={offer.description}
              timestamp={offer.timestamp}
              mode={offer.mode}
              numberOfPeople={offer.numberOfPeople}
            />)
          )
        }
      </View>
    )
  }
}