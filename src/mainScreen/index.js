import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TickImage from '../assets/tick.png';
import CheckBox from '../assets/check.png';
import EmptyCheckBox from '../assets/unchecked.png';
import DeleteImage from '../assets/trash.png';
import {colors} from '../colors/Colors';
import { template } from '@babel/core';

const MainScreen = () => {
  const inputRef = useRef();
  const HeaderHeight = Dimensions.get('screen').height * 0.06;
  const footerHeight = Dimensions.get('screen').height * 0.06;
  const [addItemToggle, setItemToggle] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [addItemText, setAddItemText] = useState('');
  const [listData, setListData] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [searchedListData, setSearchedListData] = useState([]);
  const listRenderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity
          style={styles.checkboxTouchable}
          onPress={() => editItemStatus(item?.id)}>
          {!item?.pending ? (
            <Image source={CheckBox} style={styles.checkedBox} />
          ) : (
            <Image source={EmptyCheckBox} style={styles.checkbox} />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.itemDesc,
            {
              textDecorationLine: item?.pending ? 'none' : 'line-through',
              color: item?.pending ? colors.white : colors.grey,
            },
          ]}>
          {item?.taskDesc}
        </Text>
        <TouchableOpacity
          style={styles.ItemDeleteTouchable}
          onPress={() => deleteTaskItem(item?.id)}>
          <Image source={DeleteImage} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  const editItemStatus = itemId => {
    let tempList = listData;
    let selectedIndex = tempList.findIndex(item => item.id === itemId);
    tempList[selectedIndex].pending = !tempList[selectedIndex].pending;
    setListData([...tempList]);
  };
  const emptyTaskComponent = () => <Text>There are no Tasks to show!</Text>;

  const addTaskItem = () => {
    if (addItemText.length != 0) {
      const newTask = {
        id: Date.now(),
        taskDesc: addItemText,
        pending: true,
      };
      setListData([newTask, ...listData]);
      setAddItemText('');
    }
  };
  const deleteTaskItem = itemId => {
    let newTaskList = listData.filter(item => item.id !== itemId);
    setListData([...newTaskList]);
  };

  const searchForTasks = searchText =>{
    let tempList = []
    let filteredList =  filterIndex == 0
    ? listData
    : filterIndex == 1
    ? listData.filter(item => !item.pending)
    : filterIndex == 2
    ? listData.filter(item => item.pending)
    : listData
    for(let i =0 ;i<filteredList.length ;i++){
      // console.log("searching:",, searchText,listData[i].taskDesc)
     if(filteredList[i].taskDesc.includes(searchText)) 
   tempList.push(filteredList[i])
    }
    setSearchedListData([...tempList])
  }
console.log("inputRef:",)
  return (
    <View style={styles.mainContainer}>
      <Header height={HeaderHeight} />
      <View style={styles.innerContainer}>
        <View style={styles.searchBox}>
          {!addItemToggle ? (
            <TextInput
            ref={inputRef}
              value={searchText}
              onChangeText={newText => {
                setSearchText(newText);
                searchForTasks(newText)
              }}
              placeholder={'Search...'}
              style={{width: '90%'}}
            />
          ) : (
            <TextInput
              value={addItemText}
              onChangeText={newText => {
                setAddItemText(newText);
              }}
              placeholder={'Add Item'}
              style={{width: '100%'}}
            />
          )}
          {addItemToggle && (
            <TouchableOpacity
              style={styles.tickIconTouchable}
              onPress={addTaskItem}>
              <Image source={TickImage} style={styles.tickIcon} />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={
            inputRef?.current?.isFocused() ? searchedListData :
            
            filterIndex == 0
              ? listData
              : filterIndex == 1
              ? listData.filter(item => !item.pending)
              : filterIndex == 2
              ? listData.filter(item => item.pending)
              : listData
          }
          renderItem={listRenderItem}
          contentContainerStyle={{height: '87%'}}
          ListEmptyComponent={emptyTaskComponent}
        />
        <Text>MainScreen</Text>
      </View>

      <Footer
        height={footerHeight}
        setAddItemToggle={setItemToggle}
        addItemToggle={addItemToggle}
        setAddItemText={setAddItemText}
        length={listData.length}
        setFilterIndex={setFilterIndex}
        filterIndex={filterIndex}
      />
    </View>
  );
};

export default MainScreen;
