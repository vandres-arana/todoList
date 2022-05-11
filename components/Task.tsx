import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type TaskProps = {
    title: String;

}


const Task: React.FC<TaskProps> = ({
    title,
}) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{title}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'rgb(220, 15, 30)',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'rgb(15, 220, 30)',
        borderWidth: 2,
        borderRadius: 5,
    },
})