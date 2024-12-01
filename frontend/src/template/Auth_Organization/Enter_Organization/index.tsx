import { SelectInput } from 'components/Inputs';
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
                            { name: 'Laboratório 1', value: '1' },
                            { name: 'Thunder Ratz', value: '2' },
                            { name: 'Poli Júnior', value: '3' }
                        ]}
                        label="Escolha sua Organização"
                        onChange={() => {
                            // eslint-disable-next-line no-console
                            console.log('selected');
                        }}
                    />
                    <SelectInput
                        itens={[
                            { name: 'Membro', value: '1' },
                            { name: 'Líder', value: '2' }
                        ]}
                        label="Cargo de Entrada"
                        onChange={() => {
                            // eslint-disable-next-line no-console
                            console.log('selected');
                        }}
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
