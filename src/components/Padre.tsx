import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hijo from './Hijo'; 
import useCounter from '../hooks/useCounter'; 

const Padre: React.FC = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <View style={styles.container}>
            <Hijo 
                contador={count} 
                incrementar={increment} 
                decrementar={decrement} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Padre;
