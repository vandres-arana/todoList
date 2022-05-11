import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    return (
      <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <ScrollView style={styles.items}>
            {/* This is where the tasks will go! */}
            <Task title={'First Task'}/>
            <Task title={'Second Task'}/>
            <Task title={'Third Task'}/>
            <Task title={'Fourth Task'}/>
            <Task title={'Fifth Task'}/>
            <Task title={'Sixth Task'}/>
          </ScrollView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '700',
    },
    items: {
      marginTop: 30,
    },
});
