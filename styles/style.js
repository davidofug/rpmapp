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
        fontFamily:FONTS.HEADING,
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
        paddingTop:10,
    },
    successTextonDark: {
        color: COLORS.WHITE,
        fontSize: 20
    },
    errorText: {
        color: COLORS.RED,
    }
});

export { GLOBAL_STYLES };