import React,{Component} from 'react';
import { View , Text , TouchableOpacity , ImageBackground} from 'react-native';

import { List } from './List';
import { Header } from './Header';
import { Input } from './Input';

export default class Main extends Component {

    state={
        list:[],
        text:''
    }

    create() {
        if ( this.state.text == '') {
            alert('You just type nothing in your note...!\nType Somethink !')
        } else {
            this.state.list.push(this.state.text)
            this.setState({ list : this.state.list , text:''})
        }
    }

    delete(deleted) {
        var newDeleted = this.state.list.filter((checkItem) => {
            return checkItem != deleted
        });
        this.setState ({ list : newDeleted})
    }


    render() {
        return(
            <ImageBackground 
                style={{flex:1}} 
                source={require('../assets/Image/NoteWallPaper.png')}>
                <Header
                    headerText='LinkuNote'
                />
                <View style={{flex:1}}>
                    <List
                        hasil={this.state.list}
                        delete={this.delete.bind(this)}
                    />
                </View>
                <Input
                    placeholder='Write here...!'
                    onChageText={ (text) => this.setState({text}) }
                    value={this.state.text}
                    newCreate='+'
                    onTambah={this.create.bind(this)}
                />
            </ImageBackground>
        )
    }

}