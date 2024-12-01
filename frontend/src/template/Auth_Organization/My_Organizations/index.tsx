import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import TextCard from 'components/Card';
import * as S from './styles';

const MyOrganizationsTemplate = () => {
    const router = useRouter();

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Minhas Organizações</S.Title>
                <S.InputDiv>
                    <LinedText>MinhasOrganizações</LinedText>
                    <TextCard
                        title="Laboratório 102B - Químicas"
                        detail="Administrador"
                        onClick={() => router.push('/main')}
                    />
                    <TextCard
                        title="Poli Júnior - NTec"
                        detail="Administrador"
                        onClick={() => router.push('/main')}
                    />
                    <TextCard
                        title="Almoço Xerifado"
                        detail="Membro"
                        onClick={() => router.push('/main')}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Nova Organização</LinedText>
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/enter');
                            }}
                        >
                            Criar Nova Organização
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default MyOrganizationsTemplate;
