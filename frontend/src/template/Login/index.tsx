import TextInput from 'components/Inputs';
import BaseButton, { TextButton } from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import * as S from './styles';

const LoginTemplate = () => {
    const router = useRouter();
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
                    />
                    <TextInput fullWidth label="Senha" type="password" />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/main');
                            }}
                        >
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
