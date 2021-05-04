import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FadeView, {RefFadeView} from './FadeView';
import SequenceAni from './SequenceAni';

function App() {
  const refFadeView = useRef<RefFadeView>(null)
  const initShow =useRef(1)
  console.log("renderder");
  
  return (
    <View style={styles.container}>
      <FadeView ref={refFadeView} initShow={initShow.current}>
      <Text>Open up App.tsx to start working on your app!</Text>
      </FadeView>
      <Button
        title="Toggle" onPress={()=>{
          if (initShow.current) {
            refFadeView.current?.hide();
            initShow.current = 0;
          }else{
            refFadeView.current?.show();
            initShow.current = 1;
          }
        }}
      />
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SequenceAni;