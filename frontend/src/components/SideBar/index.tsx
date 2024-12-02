import BaseButton from 'components/Button';
import { useRouter } from 'next/router';
import { Avatar } from '@mui/material';
import LinedText from 'components/Text';
import { useEffect, useState } from 'react';
import Organization from 'interfaces/Organization';
import UserService from 'services/UserService';
import OrganizationService from 'services/OrganizationService';
import User from 'interfaces/User';
import * as S from './styles';

const SideBar = () => {
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
            <S.AvatarWrapper>
                <Avatar
                    alt={user?.full_name}
                    sx={{ width: 120, height: 120 }}
                    src="/images/avatar.png"
                />
                <S.Title>{user?.full_name}</S.Title>
                <S.SubTitle>{organization?.name}</S.SubTitle>
            </S.AvatarWrapper>
            <LinedText color="black">Páginas</LinedText>
            <BaseButton
                color="secondary"
                onClick={() => {
                    router.push('/main');
                }}
            >
                Página Inicial
            </BaseButton>

            <BaseButton
                color="secondary"
                onClick={() => {
                    router.push('/organizations/search');
                }}
            >
                Encontrar Organizações
            </BaseButton>
            <BaseButton
                color="secondary"
                onClick={() => {
                    router.push('/item/search');
                }}
            >
                Pesquisar Itens
            </BaseButton>
            <LinedText color="black">Sobre Mim</LinedText>
            <BaseButton
                color="secondary"
                onClick={() => {
                    router.push('/org_auth/my_organizations');
                }}
            >
                Minhas Organizações
            </BaseButton>
            <BaseButton
                color="secondary"
                onClick={() => {
                    router.push('/login');
                }}
            >
                Fazer Logout
            </BaseButton>
        </S.Container>
    );
};

export default SideBar;
