import React, { useCallback, useRef } from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native'

const SequenceAni = () => {
    const fadeAni1 = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current
    const onPress = useCallback(()=>{
        const aniShow = Animated.timing(fadeAni1, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        })
        const aniScale1 = Animated.timing(scale,{
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        })
        const aniScale2 = Animated.timing(scale,{
            toValue: 3,
            duration: 500,
            useNativeDriver: true,
        })
        const aniHide = Animated.timing(scale,{
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        })
        // Animated.sequence([aniShow, aniScale1, aniScale2, aniHide]).start();
        const a = Animated.parallel([aniShow, aniScale2]);
        const b = Animated.parallel([aniScale1, aniHide]);
        Animated.sequence([a,b]).start();
    }, [])
    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.txt,
                    {opacity: fadeAni1, transform: [{scale: scale}]},
                ]}
            >
                Text1
            </Animated.Text>
            <Button title="Press Me" onPress={onPress}/>
        </View>
    )
}

export default SequenceAni

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    txt: {
        fontSize:30,
        margin:16,
    },
})
