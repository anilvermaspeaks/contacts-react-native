import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles';

const Container = ({ children, style }) => {
    return (
        <ScrollView style={[styles.wrapper, style]}>
            <View>
                {children}
            </View>
        </ScrollView>
    );
}

export default Container;
