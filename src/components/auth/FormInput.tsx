import React, { ReactNode } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Image, ImageSourcePropType } from 'react-native';
import { Text } from 'react-native';

interface FormInputProps extends TextInputProps {
    rightComponent?: ReactNode;
    leftIcon?: ImageSourcePropType;
    error?: string | null;
}

export default function FormInput({
    rightComponent,
    leftIcon,
    error,
    style, 
    ...props
}: FormInputProps) {
    return (
    <View style={styles.container}>
      <View style={[
        styles.inputContainer,
        error ? styles.inputError : null,
        rightComponent ? styles.inputWithButton : null,
        style
      ]}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            <Image 
              source={leftIcon}
              style={styles.iconImage}
            />
          </View>
        )}
        <TextInput
          style={[
            styles.input, 
            rightComponent ? styles.inputWithButtonText : null,
            leftIcon ? styles.inputWithLeftIcon : null
          ]}
          {...props}
        />
        {rightComponent && (
          <View style={styles.rightComponent}>
            {rightComponent}
          </View>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,  // 输入框组件的底部间距
  },
  inputContainer: {
    flexDirection: 'row',  // 使输入框和右侧组件在同一行
    alignItems: 'center',  // 垂直居中对齐
    borderRadius: 45,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,  // 输入框占据剩余空间
    height: 48,
    paddingHorizontal: 10,
  },
  inputWithButton: {
    paddingRight: 0,  // 当有右侧组件时，移除右侧内边距
  },
  inputWithButtonText: {
    paddingRight: 10,  // 输入文本和右侧组件之间的间距
  },
  rightComponent: {
    marginRight: 8,  // 右侧组件的右边距
  },
  inputError: {
    borderColor: '#ff4444',  // 错误状态下的边框颜色
  },
  errorText: {
    color: '#ff4444',  // 错误文本的颜色
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  leftIcon: {
    marginLeft: 15,
  },
  inputWithLeftIcon: {
    paddingLeft: 10,
  },
});

