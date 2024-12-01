import { useRouter } from 'next/router';
import TextInput, { SelectInput } from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import * as S from './styles';

const OrgItensTemplate = () => {
    const router = useRouter();
    const [sideBar, setSideBar] = useState(false);

    return (
        <S.BgContainer>
            {sideBar && <SideBar />}
            <S.Container>
                <Header
                    onClick={() => {
                        setSideBar(!sideBar);
                    }}
                    title="Itens da Organização"
                    subtitle="Poli Júnior"
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
                        <BaseButton
                            onClick={() => {
                                router.push('/trade/create');
                            }}
                        >
                            Iniciar Troca
                        </BaseButton>
                    </S.ButtonContainer>
                    <S.CardsWrapper>
                        <TextCard
                            title="Parafuso M1"
                            detail="Organização: Laboratório Química"
                        />
                        <TextCard
                            title="Porca"
                            detail="Organização: Laboratório Física"
                        />
                        <TextCard
                            title="Cafeteira"
                            detail="Organização: Laboratório Biologia"
                        />
                    </S.CardsWrapper>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default OrgItensTemplate;
