import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EditModal({ children = null, visible, setVisible }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} >
      {console.log('IN modal : ', visible)}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.panel}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'right',
                  marginBottom: 20,
                  fontWeight: '500',

                }}
                onPress={() => setVisible(false)}
              >X</Text>
              {children}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  panel: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    elevation: 5,
    borderTopColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

