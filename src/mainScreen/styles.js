import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../colors/Colors';
const IconDimension = Dimensions.get('screen').width * 0.04;
const ItemIconDimension = Dimensions.get('screen').width * 0.06;
// const temDelIconDimension = Dimensions.get('screen').width * 0.04;
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    height: '100%',
  },
  innerContainer: {
    backgroundColor: 'black',
    height: '100%',
    marginHorizontal: '2%',
  },
  headerBackground: {
    backgroundColor: colors.primary,
  },
  searchBox: {
    marginVertical: '5%',
    borderColor: colors.searchBorderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickIconTouchable: {
    position: 'absolute',
    right: '2.6%',
  },
  tickIcon: {
    height: IconDimension,
    width: IconDimension,
    tintColor: colors.primary,
  },
  checkboxTouchable: {
    marginRight: '2%',
  },
  checkbox: {
    height: ItemIconDimension,
    width: ItemIconDimension,
    tintColor: colors.white,
  },
  checkedBox: {
    height: ItemIconDimension,
    width: ItemIconDimension,
    tintColor: colors.primary,
  },
  deleteIcon: {
    height: IconDimension,
    width: IconDimension,
    tintColor: colors.primary,
  },
  renderItem: {
    flexDirection: 'row',
    marginBottom: '3%',
    // width:"100%",
    // height:"10%",
    // backgroundColor:"blue"
  },
  itemDesc: {
    fontWeight: 'bold',
    color: colors.white,
  },
  ItemDeleteTouchable: {
    marginLeft: 'auto',
  },
});
