import React from 'react';
import { View , Text , TextInput , TouchableOpacity , } from 'react-native';

export const Input = ({ onChageText , value , placeholder , onTambah , newCreate}) => {
    return(
        <View style={ styles . inputView }>
            <View style={styles.viewTouchable}>
                <TextInput
                    onChangeText={ onChageText }
                    value={ value }
                    placeholder={ placeholder }
                    multiline={true}
                    style={ styles . textInputView }
                />
                
                <TouchableOpacity style={styles.touchableView} onPress={onTambah}>
                    <Text style={styles.touchableText}>
                        {newCreate}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    inputView: {
        bot:0,
        backgroundColor: '#566573',
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        padding: 7,
        elevation:10,
    },
    textInputView: {
        backgroundColor: 'white',
        lineHeight: 25,
        fontSize: 18,
        borderRadius: 20,
        padding:10,
        maxHeight: 65,
        flex:1
    },
    viewTouchable: {
        maxHeight: 100,
        borderRadius: 20,
        backgroundColor: 'white',
        flex:1,
        flexDirection: 'row',
        padding:10,
        alignItems: 'center',
    },
    touchableView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#f1948a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 10,
    },
    touchableText: {
        fontSize: 40,
        color: 'white',
    }
    
}