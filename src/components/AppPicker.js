import React, { useState } from "react";
import { View, TextInput, StatusBar, Button, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import { Display } from '../utils';
import Separator from "./Separator";
import { Colors } from '../constants';
import PickerItem from "./PickerItem";



function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={Colors.DEFAULT_WHITE}
                        translucent
                    />
                    {icon && (
                        <MaterialIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <Separator height={StatusBar.currentHeight} />
                <Separator height={Display.setHeight(8)} />
                <Button title="Close" onPress={() => setModalVisible(false)} />

                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                />


            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "93%",
        padding: 10,
        marginVertical: 1,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1
    }
});



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: defaultStyles.colors.light,
//         borderRadius: 20,
//         flexDirection: "row",
//         width: "100%",
//         padding: 5,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     text: {
//         flex: 1,
//     }
// });

export default AppPicker;