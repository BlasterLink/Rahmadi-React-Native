import React from 'react';
import { View , Text , TouchableOpacity} from 'react-native';

export const Create = ({ onPress , createNew}) => {
    return(
        <View style={styles.createView}>
            <TouchableOpacity style={styles.touchableView}>
                <Text style={styles.touchableText}>
                {createNew}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    createView: {
        alignItems: 'flex-end',
        padding: 7,
    },
    touchableView: {
        height: 50 ,
        width: 50 ,
        borderRadius: 25 ,
        backgroundColor: '#f1948a' ,
        alignItems: 'center' ,
        justifyContent: 'center' ,
        flexDirection: 'row',
        elevation:10,
    },
    touchableText: {
        fontSize: 40 ,
        color: 'white' ,
        
    }
}