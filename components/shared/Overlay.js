import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import React from 'react'
import {OVERLAY_STYLES} from '../../styles/style'

const Overlay = ({ onClose, title, titleIconColor, body }) => {
    return (
        <View style={[OVERLAY_STYLES.container]}>
            {/* <View style={[OVERLAY_STYLES.upperSpace]}>
            </View> */}
            <View style={[OVERLAY_STYLES.contentWrapper]}>
                <View style={[OVERLAY_STYLES.title]}>
                    <Icon name="x" size={16} color={titleIconColor} onPress={onClose}/>
                    <Text style={[OVERLAY_STYLES.titleText]}>{title}</Text>
                </View>
                <View style={[OVERLAY_STYLES.Body]}>{body}</View>
            </View>
        </View>
    );
};

export default Overlay