import {TouchableOpacityProps, TouchableOpacity, Text, StyleSheet } from 'react-native';


interface FormButtonProps extends TouchableOpacityProps {
    title: string;
    error?: string | null;
}

export default function FormButton({ title, error, ...props }: FormButtonProps) {
    return (
    <TouchableOpacity 
        style={styles.button}
        onPress={props.onPress}
        disabled={props.disabled}
      >
        <Text style={styles.buttonText}>
          {props.disabled ? '' : title}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#607d8b',
      height: 45,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#eceff1',
      fontSize: 18,
      fontWeight: '600',
    },
  });
