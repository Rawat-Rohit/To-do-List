import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PlusImage from '../../assets/plus_icon.png';
import CloseImage from '../../assets/close.png';
import {colors} from '../../colors/Colors';
export default function Footer(props) {
  return (
    <View style={[styles.footerBackground, {height: props?.height}]}>
      {props?.addItemToggle ? (
        <TouchableOpacity
          style={styles.plusIconTouchable}
          onPress={() => {
            props?.setAddItemToggle(false);
            props?.setAddItemText('');
          }}>
          <Image source={CloseImage} style={styles.plusIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.plusIconTouchable}
          onPress={() => {
            props?.setAddItemToggle(true);
            props?.setAddItemText('');
          }}>
          <Image source={PlusImage} style={styles.plusIcon} />
        </TouchableOpacity>
      )}
      {!props?.addItemToggle && (
        <Text style={styles.ItemCount}>{`${props?.length} Item(s)`}</Text>
      )}
      <View style={styles.filterView}>
        <TouchableOpacity
          style={[
            styles.filterItem,
            {borderRightWidth: 1, borderRightColor: colors.background},
          ]}
          onPress={() => {
            props?.setFilterIndex(0);
          }}>
          <Text style={styles.filterItemText}>All</Text>
          {props?.filterIndex === 0 && (
            <View style={styles.paginationIndicator} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterItem,
            {borderRightWidth: 1, borderRightColor: colors.background},
          ]}
          onPress={() => {
            props?.setFilterIndex(1);
          }}>
          <Text style={styles.filterItemText}>Completed</Text>
          {props?.filterIndex === 1 && (
            <View style={styles.paginationIndicator} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => {
            props?.setFilterIndex(2);
          }}>
          <Text style={styles.filterItemText}>Remaining</Text>
          {props?.filterIndex === 2 && (
            <View style={styles.paginationIndicator} />
          )}
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.footerText}>Footer</Text> */}
    </View>
  );
}
