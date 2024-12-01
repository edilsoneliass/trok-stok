import TextInput from 'components/Inputs';
import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import * as S from './styles';

const RegisterOrganizationTemplate = () => {
    const router = useRouter();

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Cadastre sua Organização</S.Title>
                <S.InputDiv>
                    <LinedText>Sobre sua Organização</LinedText>
                    <TextInput
                        fullWidth
                        label="Nome da organização"
                        placeholder="Poli Júnior"
                    />
                    <TextInput
                        fullWidth
                        label="Categoria"
                        placeholder="Empresa Júnior"
                    />
                    <TextInput
                        fullWidth
                        label="Descrição"
                        placeholder="Lorem ipsun dolor sit amet..."
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Informações de Contato</LinedText>
                    <TextInput
                        fullWidth
                        label="Email"
                        placeholder="e.g.c.t@mail.com"
                    />
                    <TextInput
                        fullWidth
                        label="Telefonr ou celular"
                        placeholder="(99) 99999-9999"
                    />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/enter');
                            }}
                        >
                            Solicitar Cadastro
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default RegisterOrganizationTemplate;
