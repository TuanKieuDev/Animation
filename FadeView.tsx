import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef} from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

interface Props{
    children: React.ReactNode;
    initShow?: number;
    duration?: number;
}
export interface RefFadeView{
    show:() =>void
    hide:() =>void
}
const FadeView = forwardRef(
    (
    {children,initShow=1, duration=1000}:Props,
    ref: React.Ref<RefFadeView>
    ) => {
    const fadeAni =useRef(new Animated.Value(0));
    const hide = useCallback(()=>{
        Animated.timing(fadeAni.current, {
            toValue: 0,
            duration,
            useNativeDriver:true,
        }).start()
    },[])
    const show = useCallback(()=>{
        Animated.timing(fadeAni.current, {
            toValue: 1,
            duration,
            useNativeDriver:true,
        }).start()
    },[])
    
    useImperativeHandle(ref, ()=>({
        hide,
        show,
    }),
    [fadeAni.current]
    )

    return (
       <Animated.View
        style={{
            opacity:fadeAni.current,
        }}
       >
           {children}
       </Animated.View>
    )
})

export default FadeView

const style=StyleSheet.create({})
