import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../colors/Colors';
const IconDimension = Dimensions.get('screen').width * 0.07;
export const styles = StyleSheet.create({
  footerBackground: {
    backgroundColor: colors.primary,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: Dimensions.get('screen').width * 0.035,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
  },
  footerText: {
    color: colors.text,
    fontWeight: 'bold',
  },
  plusIconTouchable: {},
  plusIcon: {
    height: IconDimension,
    width: IconDimension,
  },
  ItemCount: {
    color: colors.background,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  filterView: {
    flexDirection: 'row',
    borderColor: colors.background,
    marginLeft: 'auto',
    marginRight: '5%',
    borderWidth: 2,
    borderRadius: 30,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterItem: {
    paddingHorizontal: '2%',
    height: '100%',
    justifyContent: 'center',
  },
  filterItemText: {
    color: colors.background,
    fontWeight: 'bold',
  },
  paginationIndicator: {
    backgroundColor: colors.background,
    height: 4,
    width: 4,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -8,
  },
});
