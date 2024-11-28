import {
    TextField,
    TextFieldProps,
    SelectProps,
    Select,
    FormControl,
    InputLabel,
    MenuItem
} from '@mui/material';
import { defaultTheme } from 'styles';

// Text Input

export type TextInputProps = TextFieldProps & {
    color?: keyof typeof defaultTheme.colors;
};

const TextInput: React.FC<TextInputProps> = ({
    color = 'primary',
    ...props
}) => {
    const borderColor = defaultTheme.colors[color];
    return (
        <TextField
            {...props}
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    '& fieldset': {
                        borderColor: borderColor.main // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: borderColor.light // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: borderColor.main // Border color when focused
                    }
                },
                '& .MuiInputLabel-root': {
                    // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: borderColor.main // Label color when focused
                }
            }}
        />
    );
};

// Select Input

export type SelectInputProps = SelectProps & {
    color?: keyof typeof defaultTheme.colors;
    itens: MenuItem[];
};

type MenuItem = {
    value: string;
    name: string;
};

export const SelectInput: React.FC<SelectInputProps> = ({
    color = 'primary',
    itens,
    label,
    ...props
}) => {
    const borderColor = defaultTheme.colors[color];
    return (
        <FormControl
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    '& fieldset': {
                        borderColor: borderColor.main // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: borderColor.light // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: borderColor.main // Border color when focused
                    }
                },
                '& .MuiInputLabel-root': {
                    // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: borderColor.main // Label color when focused
                }
            }}
        >
            <InputLabel>{label}</InputLabel>
            <Select
                {...props}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        '& fieldset': {
                            borderColor: borderColor.main // Default border color
                        },
                        '&:hover fieldset': {
                            borderColor: borderColor.light // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: borderColor.main // Border color when focused
                        }
                    }
                }}
            >
                {itens &&
                    itens.map((item) => (
                        <MenuItem value={item.value}>{item.name}</MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
};

export default TextInput;
