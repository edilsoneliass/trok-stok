/* eslint-disable no-alert */
import TextInput from 'components/Inputs';
import BaseButton, { TextButton } from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import { useState } from 'react';
import UserService from 'services/UserService';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

const RegisterTemplate = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login({ email, password });
            alert('Login successful!');
            router.push('/org_auth/enter');
        } catch (error) {
            alert('Login failed. Please try again.');
            router.push('/login');
        }
    };

    const handleRegister = async () => {
        try {
            await UserService.register({
                email,
                full_name: fullName,
                password,
                confirm_password: confirmPassword
            });
            await handleLogin();
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(`erro no cadastro: ${err}`);
        }
    };

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Faça seu cadastro</S.Title>
                <S.InputDiv>
                    <LinedText>Sobre Você</LinedText>
                    <TextInput
                        fullWidth
                        label="Nome completo"
                        placeholder="Thiago Velasquez"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                    />
                    <TextInput
                        fullWidth
                        label="Email"
                        placeholder="e.g.c.t@mail.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextInput
                        fullWidth
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <TextInput
                        fullWidth
                        label="Confirme a senha"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <S.ButtonDiv>
                        <BaseButton onClick={handleRegister}>
                            Continuar
                        </BaseButton>
                        <TextButton
                            onClick={() => {
                                router.push('/login');
                            }}
                            text="Já possui conta? Fazer Login"
                        />
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default RegisterTemplate;
