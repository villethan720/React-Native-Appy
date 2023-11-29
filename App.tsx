
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <View style ={{
                color: '#ff0000',
                fontFamily: 'Arial',
                fontSize: 50,
                fontStyle: 'italic',
                fontWeight: '102',
                lineHeight: 50,
                textAlign: 'auto',
                
            }}>
                <Text>Hello yinz</Text>
            </View>
            <View style={{backgroundColor: 'blue'}}>
                <Text>Welcome back yinz</Text>
            </View>
        </SafeAreaView> 
    );
}; 

export default App;
