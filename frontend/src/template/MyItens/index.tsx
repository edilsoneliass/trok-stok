import TextInput, { SelectInput } from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import CreateItem from 'components/ItemRegister';
import * as S from './styles';

const MyItensTemplate = () => {
    const [sideBar, setSideBar] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <S.BgContainer>
            <CreateItem
                active={register}
                onCreate={() => {
                    setRegister(false);
                    // eslint-disable-next-line no-alert
                    window.alert('Item cadastrado com sucesso');
                }}
            />
            {sideBar && <SideBar />}
            <S.Container>
                <Header
                    onClick={() => {
                        setSideBar(!sideBar);
                        // eslint-disable-next-line no-alert
                    }}
                    title="Meus Itens"
                    subtitle="Organização: Laboratório 122B"
                />
                <S.SafeArea>
                    <S.InputsWrapper>
                        <TextInput
                            label="O que você quer encontrar?"
                            placeholder="ex: parafusadeira"
                            fullWidth
                        />
                        <SelectInput
                            itens={[
                                { name: 'Ferramentas', value: '1' },
                                { name: 'Compostos Químicos', value: '2' },
                                { name: 'Componentes Elétricos', value: '3' }
                            ]}
                            label="Categoria"
                            onChange={() => {
                                // eslint-disable-next-line no-console
                                console.log('selected');
                            }}
                        />
                    </S.InputsWrapper>
                    <LinedText>Itens</LinedText>
                    <S.ButtonContainer>
                        <BaseButton onClick={() => setRegister(true)}>
                            Cadastrar Item
                        </BaseButton>
                    </S.ButtonContainer>
                    <S.CardsWrapper>
                        <TextCard
                            title="Parafuso M1"
                            detail="Quantidade: 15 unidades"
                        />
                        <TextCard
                            title="Porca"
                            detail="Quantidade: 15 unidades"
                        />
                        <TextCard
                            title="Cafeteira"
                            detail="Quantidade: 15 unidades"
                        />
                    </S.CardsWrapper>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default MyItensTemplate;
