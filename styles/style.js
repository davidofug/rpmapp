import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../helpers/constants'
const GLOBAL_STYLES = StyleSheet.create({
    container: {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    },
    customHeader: {
        'paddingTop': 10,
        'borderBottomWidth': 1,
        'borderBottomColor': COLORS.LIGHT_GREY
    },
    stickTopContainer: {
        'backgroundColor': COLORS.WHITE,
        'zIndex': 999,
        'position': 'absolute',
        'top': 0,
        'width': '100%',
        'paddingHorizontal': 10
    },
    flexRow: {
        'flexDirection': 'row',
        'alignItems': 'center',
    },
    spaceHorizontal: {
        'paddingHorizontal': 10
    },
    activityIndicator: {
        'backgroundColor': COLORS.PURPLE,
    },
    dashboard: {
        'flex': 1,
        'justifyContent': 'space-between',
    },
    dashboardItem: {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'borderLeftWidth': 1,
        'borderBottomWidth': 1,
        'borderColor': COLORS.GREY,
        'padding': 10,
        'height': '100%',
    },
    dashboardItemText: {
        'fontSize': 20,
        'fontFamily': FONTS.HEADING,
    },
    dashboardItemPurple: {
        'backgroundColor': COLORS.PURPLE
    },
    dashboardItemOrange: {
        'backgroundColor': COLORS.ORANGE
    },
    dashboardItemGreen: {
        'backgroundColor': COLORS.GREEN
    },
    dashboardItemPink: {
        'backgroundColor': COLORS.PINK
    },
    dashboardItemWhite: {
        'backgroundColor': COLORS.WHITE
    },
    formWrapper: {
        'padding': 20,
    },
    fieldWrapper: {
        'borderBottomColor': COLORS.PURPLE,
        'borderBottomWidth': 1,
    },
    searchFieldContainer: {
        'backgroundColor': COLORS.LIGHT_GREY,
        'borderRadius': 20,
        'padding': 2,
        'paddingLeft': 15,
        'marginLeft': 15,
    },
    searchField: {
        'margin': 0,
        'padding': 0,
        'width': '90%'
    },
    field: {
        'color': COLORS.PURPLE,
        'paddingBottom': 2,
    },
    button: {
        'width': '100%',
        'backgroundColor': 'red',
        'padding': 10
    },
    buttonText: {
        'color': COLORS.WHITE,
        'textAlign': 'center'
    },
    greyButton: {
        'backgroundColor': COLORS.LIGHT_GREY,
        'paddingVertical': 2,
        'paddingHorizontal': 10,
        'borderRadius': 40,
        'marginRight': 5,
    },
    iconText: {
        'paddingLeft': 5,
    },
    requestPrayerButton: {
        'paddingTop': 10,
    },
    successTextonDark: {
        'color': COLORS.WHITE,
        'fontSize': 20
    },
    errorText: {
        'color': COLORS.RED,
    },
    successText: {
        color: COLORS.GREEN,
    },
    flatListContainer: {
        'paddingBottom': 130
    },
    flatListItem: {
        'flex':1,
        'flexDirection': 'row',
        'padding': 10,
    },
    flatListItemSeperator: {
        'borderTopWidth': 1,
        'marginLeft': 10,
        'borderTopColor': COLORS.PURPLE,
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

const OVERLAY_STYLES = StyleSheet.create({
    container: {
        backgroundColor: COLORS.LIGHT_BLACK,
        justifyContent: 'flex-end',
        flex:1,
        position: 'absolute',
        'height': '100%',
        width: '100%',
        'zIndex': 9999,
        borderWidth: 1,
    },
    upperSpace: {
        height:'30%',
    },
    contentWrapper: {
        // height: '70%',
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        paddingTop: 0,
    },
    title: {
        flexDirection: 'row',
        borderBottomColor: COLORS.LIGHT_GREY,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 30
    },
    titleText: {
        color: COLORS.GREY,
        paddingLeft: 10,
        fontSize: 14,
    },
    body: {
        padding: 10,
    },
});
export { GLOBAL_STYLES, OVERLAY_STYLES };