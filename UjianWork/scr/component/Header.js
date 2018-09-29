import React from 'react';
import { View , Text , Image , TouchableOpacity } from 'react-native';

export const Header = (props) => {
    return(
        <View style={styles.headerView}>
            
            {/* <Image
                style={styles.imageStyle}
                source={require('../assets/Image/2.jpg')}
            /> */}
            <View style={styles.dragHelp}
            />
            <View style={styles.view1}
            />
            <View style={styles.view2}
            />
            <View style={styles.view3}
            >
                <Text style={styles.headerText}>
                
                    {props.headerText}
                
                </Text>
            </View>
        </View>
    )
}

const styles = {
    headerView: {
        backgroundColor: '#2a93d5' ,
        width: '100%' ,
        height: 65 ,    
        paddingHorizontal: 20,
        alignItems: 'center', 
        borderBottomLeftRadius: 20 ,
        elevation: 10 ,
        flexDirection: 'row' ,
    },
    headerText: {
        fontSize: 28 ,
        fontWeight: 'bold' ,
        color: '#2a93d5' ,
        fontFamily: 'serif' ,
    },
    dragHelp: {
        width:'75%',
        height:30,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#aed9da',
    },
    view1: {
        height:50,
        width: '60%',
        backgroundColor: '#3ddad7',
        left:0,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    view2: {
        height: 40,
        width: '60%',
        backgroundColor: '#aed9da',
        left: 0,
        position: 'absolute',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    view3: {
        height: 30,
        width: '60%',
        backgroundColor: '#edfafd',
        left: 0,
        position: 'absolute',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
}