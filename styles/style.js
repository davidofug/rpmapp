import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../helpers/constants'

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activityIndicator: {
        backgroundColor: COLORS.PURPLE,
    },
    dashboard: {
        flex: 1,
        justifyContent: 'space-between',
    },
    dashboardItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
    },
    dashboardItemText: {
        fontSize: 20,
        fontFamily: FONTS.HEADING,
    },
    dashboardItemPurple: {
        backgroundColor: COLORS.PURPLE
    },
    dashboardItemOrange: {
        backgroundColor: COLORS.ORANGE
    },
    dashboardItemGreen: {
        backgroundColor: COLORS.GREEN
    },
    dashboardItemPink: {
        backgroundColor: COLORS.PINK
    },
    dashboardItemWhite: {
        backgroundColor: COLORS.WHITE
    },
    formWrapper: {
        padding: 20,
    },
    fieldWrapper: {
        borderBottomColor: COLORS.PURPLE,
        borderBottomWidth: 1,
    },
    field: {
        color: COLORS.PURPLE,
        paddingBottom: 2,
    },
    button: {
        width: '100%',
        backgroundColor: 'red',
        padding: 10
    },
    buttonText: {
        color: COLORS.WHITE,
        textAlign: 'center'
    },
    requestPrayerButton: {
        paddingTop: 10,
    },
    successTextonDark: {
        color: COLORS.WHITE,
        fontSize: 20
    },
    errorText: {
        color: COLORS.RED,
    },
    successText: {
        color: COLORS.GREEN,
    },
    flatListContainer: {
        paddingBottom: 40
    },
    flatListItem: {
        'flex':1,
        'flexDirection': 'row',
        'padding': 10,
    },
    flatListItemSeperator: {
        borderTopWidth: 1,
        marginLeft: 10,
        borderTopColor: COLORS.PURPLE,
    },
    flatListItemTitle: {
        'fontWeight': 'bold',
    },
    flatListItemText: {
        'paddingHorizontal': 10,
        'flex': 2,
        'justifyContent': 'center',
    },
    flatListItemIcons: {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
    },
    flatListFooter: {
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'padding': 10,
        'backgroundColor': COLORS.PURPLE,
        'position': 'absolute',
        'bottom': 0,
        'width': '100%'
    }
});

export { GLOBAL_STYLES };