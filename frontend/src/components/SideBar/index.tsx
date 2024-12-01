import BaseButton from 'components/Button';
import { useRouter } from 'next/router';
import { Avatar } from '@mui/material';
import LinedText from 'components/Text';
import * as S from './styles';

const SideBar = () => {
    const router = useRouter();
    return (
        <S.Container>
            <S.AvatarWrapper>
                <Avatar
                    alt="Thiago Velasquez"
                    sx={{ width: 120, height: 120 }}
                    src="/images/avatar.png"
                />
                <S.Title>Thiago Velasquez</S.Title>
                <S.SubTitle>Poli Júnior</S.SubTitle>
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
