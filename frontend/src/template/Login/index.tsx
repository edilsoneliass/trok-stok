/* eslint-disable no-alert */
import TextInput from 'components/Inputs';
import BaseButton, { TextButton } from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
import * as S from './styles';

const LoginTemplate = () => {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ email, password });
            alert('Login successful!');
            router.push('/org_auth/my_organizations');
        } catch (error) {
            alert('Login failed. Please try again.');
            router.push('/org_auth/my_organizations');
        }
    };

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Faça seu login</S.Title>
                <S.InputDiv>
                    <TextInput
                        fullWidth
                        label="Email"
                        placeholder="e.g.c.t@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        fullWidth
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.ButtonDiv>
                        <BaseButton onClick={handleSubmit}>
                            Continuar
                        </BaseButton>
                        <TextButton
                            onClick={() => {
                                router.push('/register');
                            }}
                            text="Não tem conta? Fazer Cadastro"
                        />
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default LoginTemplate;
