import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from '../../store/slices/authSlice';
import FormInput from 'components/auth/FormInput';
import FormButton from 'components/auth/FormButton';
import { images } from 'constants/images';
import { useTranslation } from 'react-i18next';

const SendAuthCodeButton = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={styles.sendAuthCodeButton}>
      <Text style={styles.sendAuthCodeButtonText}>{t('auth.sendAuthCode')}</Text>
    </TouchableOpacity>
  )
}

export default function RegisterScreen() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert(t('common.error'), t('auth.errorEmptyFields'));
      return;
    }

    try {
      await dispatch(registerUser({ email, authCode: '',password})).unwrap();
    } catch (err) {
      Alert.alert(t('common.error'), error || t('auth.errorRegisterFailed'));
    }
  };

  const handleSendAuthCode = () => {
    console.log('发送验证码');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('auth.emailRegister')}</Text>
      <FormInput
        placeholder={t('auth.email')}
        value={email}
        onChangeText={setEmail}
        leftIcon={images.icons.email}
        keyboardType="email-address"
      />
      <FormInput
        placeholder={t('auth.authCode')}
        value={authCode}
        onChangeText={setAuthCode}
        leftIcon={images.icons.authCode}
        rightComponent={<SendAuthCodeButton onPress={handleSendAuthCode}/>}
      />
      <FormInput
        placeholder={t('auth.password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={images.icons.password}
      />
      <View style={{height: 30}}/>
      <FormButton
        title={loading ? t('auth.registerLoading') : t('auth.register')}
        onPress={handleRegister}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sendAuthCodeButton: {
    // backgroundColor: '#007AFF',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendAuthCodeButtonText: {
    color: '#1565c0',
    fontSize: 16,
    fontWeight: '600',
  },
});