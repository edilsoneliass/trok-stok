import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import TextCard from 'components/Card';
import UserService from 'services/UserService';
import User from 'interfaces/User';
import { useEffect, useState } from 'react';
import Organization from 'interfaces/Organization';
import OrganizationService from 'services/OrganizationService';
import * as S from './styles';

const MyOrganizationsTemplate = () => {
    const router = useRouter();

    const [user, setUser] = useState<User>();
    const [organization, setOrganization] = useState<Organization>();

    const getUser = async () => {
        try {
            const reqUser = await UserService.getUser();
            setUser(reqUser);

            if (reqUser.organization) {
                const reqOrg = await OrganizationService.getOrganization({
                    id: reqUser.organization
                });
                setOrganization(reqOrg);
            } else {
                // eslint-disable-next-line no-alert
                window.alert(
                    'Parece que você ainda não pertence a nenhuma organização.'
                );
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('erro ao obter informações do usuário.');
        }
    };

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Minhas Organizações</S.Title>
                <S.InputDiv>
                    <LinedText>MinhasOrganizações</LinedText>
                    {(organization && user?.role && (
                        <TextCard
                            title={organization?.name}
                            detail={user?.role}
                            onClick={() => router.push('/main')}
                        />
                    )) || (
                        <>
                            <S.Text>
                                Parece que você ainda não está em nenhuma
                                organização. Aguarde a aprovação do
                                administrador, ou:
                            </S.Text>
                            <BaseButton
                                onClick={() => {
                                    router.push('/org_auth/enter');
                                }}
                            >
                                Entrar em Organização
                            </BaseButton>
                        </>
                    )}
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Nova Organização</LinedText>
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/register');
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
