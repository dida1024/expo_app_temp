import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../store/slices/authSlice';
import FormInput from 'components/auth/FormInput';
import FormButton from 'components/auth/FormButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/RootNavigator';
import { images } from '../../constants/images';
import { useTranslation } from 'react-i18next';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// 编写一个组件，用于超链接跳转到注册页面,接收一个onPress函数
const RegisterLink = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={styles.registerLink}>
      <Text>{t('auth.noAccount')}<Text style={{color: '#007AFF'}}>{t('auth.register')}</Text></Text>
    </TouchableOpacity>
  )
}

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.auth);
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('common.error'), t('auth.errorEmptyFields'));
      return;
    }

    try {
      await dispatch(loginUser({ email, password })).unwrap();
    } catch (err) {
      Alert.alert(t('common.error'), error || t('auth.errorLoginFailed'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('auth.emailLogin')}</Text>
      <FormInput
        placeholder={t('auth.email')}
        leftIcon={images.icons.email}
        value={email}
        onChangeText={setEmail}
      />
      <FormInput
        placeholder={t('auth.password')}
        leftIcon={images.icons.password}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <RegisterLink onPress={() => navigation.navigate('Register')} />

      <View style={{height: 30}}/>

      <FormButton
        title={loading ? t('auth.loginLoading') : t('auth.login')}
        onPress={handleLogin}
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
  registerLink: {
    marginTop: 2,
    alignSelf: 'center',
  },
});