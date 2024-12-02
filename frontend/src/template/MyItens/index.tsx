import TextInput, { SelectInput } from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useEffect, useState } from 'react';
import CreateItem from 'components/ItemRegister';
import Item from 'interfaces/Item';
import OrganizationService from 'services/OrganizationService';
import * as S from './styles';

const MyItensTemplate = () => {
    const [sideBar, setSideBar] = useState(false);
    const [register, setRegister] = useState(false);

    const [items, setItems] = useState<Item[]>();

    const getItems = async () => {
        try {
            const reqItems = await OrganizationService.getOrganizationItems();
            setItems(reqItems.items);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('erro ao receber os itens da organização');
        }
    };

    useEffect(() => {
        getItems();
    }, []);

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
                        {items?.map((item) => (
                            <TextCard
                                title={item.name}
                                detail={`Quantidade: ${item.quantity?.toString()} unidades`}
                            />
                        ))}
                    </S.CardsWrapper>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default MyItensTemplate;
