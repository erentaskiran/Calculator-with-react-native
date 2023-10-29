import React from 'react'
import { StyleSheet,View,Text} from'react-native'
import PropTypes from 'prop-types'
function Title(props) {
    return (
    <View>
        {
            props.isVisible && <Text style={[styles.title,{color:props.color}]}>{props.numberOfLines} - {props.text }</Text>
        }
        
    </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize:28,
        fontWeight:'700',
    }
})
Title.propTypes ={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    numberOfLines:PropTypes.number,
    isVisible:PropTypes.bool,
}
Title.defaultProps = {
    text:"Merhaba",
    isVisible:true,
}
export default Title