import React from 'react';
import { ScrollView, Text } from 'react-native';
import Card from '../../../globals/Card';
import styles from './styles';

export default class List extends React.PureComponent {
    render() {
        const { requestMode, cards, waterActive, shelterActive, otherActive, foodActive, medicalActive, } = this.props;;
        const parsedCards = requestMode ? cards.filter(card => 
            (card.askFood && foodActive)
            || (card.askWater && waterActive) 
            || (card.askShelter && shelterActive)
            || (card.askMedical && medicalActive)) 
        : cards;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {parsedCards.map((card, index) => {
                    return (
                        <Card key={index} description={card.description} timestamp={card.timestamp} />
                    );
                })}
            </ScrollView>
        );
    }
}