import { Button, ButtonProps } from '@mui/material';
import { defaultTheme } from 'styles';
import * as S from './styles';

export type Props = ButtonProps & {
    color?: keyof typeof defaultTheme.colors;
};

export type TextButtonProps = ButtonProps & {
    text: string;
    onClick?: () => void;
};

const BaseButton: React.FC<Props> = ({ color = 'primary', ...props }) => {
    const borderColor = defaultTheme.colors[color];
    return (
        <Button
            {...props}
            fullWidth
            size="large"
            sx={{
                backgroundColor: borderColor.main,
                color: 'white',
                '&:hover': {
                    backgroundColor: borderColor.dark
                }
            }}
        />
    );
};

export const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
    return <S.Title onClick={onClick}>{text}</S.Title>;
};

export default BaseButton;
