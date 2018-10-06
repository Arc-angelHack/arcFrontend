import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default class InformationBoard extends React.Component {

  tweets = [{
    name: 'Hurricane Alert',
    subtitle: '@hurricanealert',
    image: 'https://lh3.googleusercontent.com/q3KvsCKoI45EJtUIpvE9oYTLqEktTieDoWOCtTg6KVgelnhK5jGn9Xhw9KqtCg2q3gdfwMHUEl0EWUVTNB44-dky',
    body: 'BREAKING: A #Hurricane Warning has been issued from the Mouth of the Pearl River to the Alabama-Florida Border. #Gordon',
    date: '2 minutes ago',
    starred: true
  }, {
    name: 'WeatherNation',
    subtitle: '@weathernation',
    image: 'https://lh3.googleusercontent.com/7n4_yGUfmiLgJ4FrR7-v0YjisswzvzNvLIWdCJmCGp_VBE72LomDVXBlJP4J96TvQ7rQg0JDzVfhPn3nFhbelYDqGA',
    body: `BREAKING: #Gordon's max winds up to 60mph, as of 8pm ET:`,
    date: '3 minutes ago',
    starred: false
  }, {
    name: 'VFIS',
    subtitle: '@vfis',
    image: 'https://lh3.googleusercontent.com/acba4gpP9qp-LhlfGngfmyId2g7bzs1v-DXmr7zvs-dihjD3Zc30OirggiMhHXpbsU2XG2buKtbJeh0wzFZbWMbyFQE',
    body: `#Firefighters + EMTs: develop a #Hurricane Emergency Response Plan for your facility including actions to take before, during and after a storm with this free checklist: https://hubs.ly/H0dlmtq0  #BePrepared`,
    date: '5 minutes ago',
    starred: true
  }, {
    name: 'WeatherNation',
    subtitle: '@weathernation',
    image: 'https://lh3.googleusercontent.com/7n4_yGUfmiLgJ4FrR7-v0YjisswzvzNvLIWdCJmCGp_VBE72LomDVXBlJP4J96TvQ7rQg0JDzVfhPn3nFhbelYDqGA',
    body: 'Ramps live-edge lomo seitan, lo-fi tousled williamsburg vinyl master cleanse literally swag banh mi. Hell of fingerstache lo-fi gochujang stumptown blue bottle keytar copper mug echo park. Chambray mlkshk ennui small batch VHS, skateboard woke tote bag brooklyn keytar live-edge neutra schlitz hoodie lo-fi. Migas try-hard waistcoat scenester, air plant flannel chicharrones tumeric live-edge ramps raclette distillery. Neutra taiyaki DIY helvetica, aesthetic echo park pinterest quinoa kogi tofu yuccie bushwick freegan flexitarian sriracha.',
    date: '10 minutes ago',
    starred: false
  }]

  render() {
    return (
      <ScrollView>
        {
          this.tweets.map((tweet, i) => {
            return (
              <Card key={i}>
                <View style={styles.header}>
                  <View style={styles.header__identification}>
                    <Image style={styles.logo} source={{ uri: tweet.image }} />
                    <View style={styles.header__titles}>
                      <Text style={styles.tweetName}>{tweet.name}</Text>
                      <Text style={styles.tweetSubtitle}>{tweet.subtitle}</Text>
                    </View>
                  </View>
                  <View style={styles.header__info}>
                    <Text style={styles.date}>{tweet.date}</Text>
                    {tweet.starred ? <Icon name="star" size={20} color="#4527a0" style={styles.star} /> : <Icon name="star-outline" size={20} color="#4527a0" style={styles.star} />}
                  </View>
                </View>
                <View style={styles.tweetContainer}>
                  <Text style={styles.body}>{tweet.body}</Text>
                </View>
              </Card>
            );
          })
        }
      </ScrollView>
    )
  }
}