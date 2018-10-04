import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles'

export default class InformationBoard extends React.Component {

  tweets = [{
    name: 'Hurricane Alert',
    subtitle: '@HurricaneAlert',
    image: 'https://lh3.googleusercontent.com/7n4_yGUfmiLgJ4FrR7-v0YjisswzvzNvLIWdCJmCGp_VBE72LomDVXBlJP4J96TvQ7rQg0JDzVfhPn3nFhbelYDqGA',
    body: 'BREAKING: A #Hurricane Warning has been issued from the Mouth of the Pearl River to the Alabama-Florida Border. #Gordon'
  }, {
    name: 'Hurricane Alert',
    subtitle: '@HurricaneAlert',
    image: 'https://lh3.googleusercontent.com/7n4_yGUfmiLgJ4FrR7-v0YjisswzvzNvLIWdCJmCGp_VBE72LomDVXBlJP4J96TvQ7rQg0JDzVfhPn3nFhbelYDqGA',
    body: 'Ramps live-edge lomo seitan, lo-fi tousled williamsburg vinyl master cleanse literally swag banh mi. Hell of fingerstache lo-fi gochujang stumptown blue bottle keytar copper mug echo park. Chambray mlkshk ennui small batch VHS, skateboard woke tote bag brooklyn keytar live-edge neutra schlitz hoodie lo-fi. Migas try-hard waistcoat scenester, air plant flannel chicharrones tumeric live-edge ramps raclette distillery. Neutra taiyaki DIY helvetica, aesthetic echo park pinterest quinoa kogi tofu yuccie bushwick freegan flexitarian sriracha.'
  }, {
    name: 'Hurricane Alert',
    subtitle: '@HurricaneAlert',
    image: 'https://lh3.googleusercontent.com/7n4_yGUfmiLgJ4FrR7-v0YjisswzvzNvLIWdCJmCGp_VBE72LomDVXBlJP4J96TvQ7rQg0JDzVfhPn3nFhbelYDqGA',
    body: 'Ramps live-edge lomo seitan, lo-fi tousled williamsburg vinyl master cleanse literally swag banh mi. Hell of fingerstache lo-fi gochujang stumptown blue bottle keytar copper mug echo park. Chambray mlkshk ennui small batch VHS, skateboard woke tote bag brooklyn keytar live-edge neutra schlitz hoodie lo-fi. Migas try-hard waistcoat scenester, air plant flannel chicharrones tumeric live-edge ramps raclette distillery. Neutra taiyaki DIY helvetica, aesthetic echo park pinterest quinoa kogi tofu yuccie bushwick freegan flexitarian sriracha.'
  }]

  render() {
    return (
      <View>
        {
          this.tweets.map((tweet, i) => {
            return (
              <Card key={i}>
                <View style={styles.header}>
                  <Image style={styles.logo} source={{ uri: tweet.image }} />
                  <View style={styles.header__titles}>
                    <Text>{tweet.name}</Text>
                    <Text>{tweet.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.tweetContainer}>
                  <Text style={styles.name}>{tweet.body}</Text>
                </View>
              </Card>
            );
          })
        }
      </View>
    )
  }
}