import * as S from './styles';

type LinedTextProps = {
    children: React.ReactNode;
    color?: 'white' | 'black';
};

const LinedText: React.FC<LinedTextProps> = ({ children, color }) => {
    return (
        <S.TextContainer color={color || 'white'}>
            <S.Line color={color || 'white'} />
            <S.Text>{children}</S.Text>
            <S.Line color={color || 'white'} />
        </S.TextContainer>
    );
};

export default LinedText;
