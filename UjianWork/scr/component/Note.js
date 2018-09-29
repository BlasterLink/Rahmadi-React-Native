import React from 'react';
import { TouchableOpacity , View , Text , Image } from 'react-native';

export const Note = ({ children , onTrash }) => {
    return(
        <View style={styles.noteView}>
            <View style={styles.textView}>
                <Text style={styles.noteText}> 
                    {children}
                </Text>
            </View>

            <TouchableOpacity style={styles.touchableStyle} onPress={onTrash}>
                <Image
                    style={{ height: 30, width: 25 }}
                    source={require('../assets/Image/trash1.png')}
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = {
    noteView: {
        height:76 ,
        backgroundColor: 'rgba(255, 255, 255, 0.7)' ,
        margin: 7 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        flexDirection: 'row' ,
        padding: 10,
        borderWidth: 0.7,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textView:{
        flex:1 ,
        justifyContent: 'center' ,
        paddingRight: 5,   
    },
    noteText:{
        color: 'black'
    },
    touchableStyle: {
        height: 45 ,
        width: 45 ,
        backgroundColor: '#f1948a' ,
        alignItems: 'center' ,
        justifyContent: 'center' ,
        borderRadius: 30 ,
    },
}