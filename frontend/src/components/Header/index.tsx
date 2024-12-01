import MenuIcon from '@mui/icons-material/Menu';
import * as S from './styles';

type HeaderProps = {
    onClick?: () => void;
    title?: string;
    subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({ onClick, title, subtitle }) => {
    return (
        <S.Container>
            <S.SidebarWrapper onClick={onClick}>
                <MenuIcon fontSize="large" />
            </S.SidebarWrapper>
            <S.TitleWrapper>
                <S.Title>{title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
            </S.TitleWrapper>
        </S.Container>
    );
};

export default Header;
