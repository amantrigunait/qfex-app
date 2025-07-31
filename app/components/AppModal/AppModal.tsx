import React from 'react';
import {
  Modal,
  Pressable,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}

const AppModal: React.FC<AppModalProps> = ({ visible, onClose, children, contentStyle }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={[styles.card, contentStyle]}>
        <Icon
          name="close"
          size={30}
          color="#5A5A5A"
          style={{ position: 'absolute', top: 20, right: 20 }}
          onPress={onClose}
        />
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
});

export default AppModal;
