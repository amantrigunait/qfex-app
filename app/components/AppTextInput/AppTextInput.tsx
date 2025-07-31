import React from 'react';
import { View, TextInput, Text, TextInputProps, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { useFormikContext, FormikErrors } from 'formik';

interface AppTextInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  RightComponent?: React.ReactNode;
  LeftComponent?: React.ReactNode;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  name,
  placeholder,
  RightComponent = null,
  LeftComponent = null,
  style,
  inputStyle,
  ...rest
}) => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext<any>();

  const error = touched[name] && errors[name];
  const errorMessage = typeof error === 'string' ? error : undefined;

  return (
      <View>
        
        <View style={[styles.inputWrapper, style]}>
          {LeftComponent && <View style={{ marginRight: 8 }}>{LeftComponent}</View>}
        <TextInput
            style={[
                styles.input,
                inputStyle,
            ]}
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            value={values[name]}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            {...rest}
            />
            {RightComponent && <View style={{ marginLeft: 8 }}>{RightComponent}</View>}
        </View>
        {errorMessage && (
            <Text style={styles.errorText}>{errorMessage}</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#B8B8B8',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 3,
      },
      input: {
        flex: 1,
        color: '#000000',
        paddingVertical: 10,
        fontSize: 16,
      },
      errorText: {
        color: '#FF6B6B',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginBottom: 10,
      },
})

export default AppTextInput;