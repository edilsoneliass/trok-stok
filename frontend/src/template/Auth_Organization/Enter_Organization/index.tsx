import TextInput, { SelectInput } from 'components/Inputs';
import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import * as S from './styles';

const EnterOrganizationTemplate = () => {
    const router = useRouter();

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Entrar em Organização</S.Title>
                <S.InputDiv>
                    <LinedText>Entrar em Organização</LinedText>
                    <SelectInput
                        itens={[
                            { name: 'oi', value: '1' },
                            { name: 'Salve Edolas', value: '2' },
                            { name: 'Vigura', value: '3' }
                        ]}
                        label="Escolha sua Organização"
                        onChange={() => {
                            // eslint-disable-next-line no-console
                            console.log('selected');
                        }}
                    />
                    <TextInput
                        fullWidth
                        label="Cargo de entrada"
                        placeholder="Membro"
                    />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/my_organizations');
                            }}
                        >
                            Solicitar Entrada
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Criar a minha Organização</LinedText>
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/register');
                            }}
                        >
                            Criar Organização
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default EnterOrganizationTemplate;
