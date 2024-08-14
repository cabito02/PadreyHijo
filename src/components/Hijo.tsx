import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

interface HijoProps {
    contador: number;
    incrementar: () => void;
    decrementar: () => void;
}

const Hijo: React.FC<HijoProps> = ({ contador, incrementar, decrementar }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {contador}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Incrementar" onPress={incrementar} />
                <Button title="Decrementar" onPress={decrementar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    text: {
        fontSize: 20,
        color: 'red',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default Hijo;
