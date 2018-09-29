import React,{Component} from 'react';
import {ScrollView} from 'react-native';

import { Note } from './Note';

export class List extends Component {
    render() {
        let Notes = this.props.hasil.map(( val , key ) => {
            return <Note key={key} onTrash={this.props.delete.bind(this, val)}> {val} </Note>
        })
        return (
            <ScrollView>
                {Notes}
            </ScrollView>
        )
    }
}