import { useRouter } from 'next/router';
import TextInput, { SelectInput } from 'components/Inputs';
import LinedText from 'components/Text';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import * as S from './styles';

const OrgSearchTemplate = () => {
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
                    title="Pesquisar Organizações"
                />
                <S.SafeArea>
                    <S.InputsWrapper>
                        <TextInput label="Procurar Organização" fullWidth />
                        <SelectInput
                            itens={[
                                { name: 'Grupo de Extensão', value: '1' },
                                { name: 'Laboratório', value: '2' },
                                { name: 'Entidade Poli', value: '3' }
                            ]}
                            label="Categoria"
                            onChange={() => {
                                // eslint-disable-next-line no-console
                                console.log('selected');
                            }}
                        />
                    </S.InputsWrapper>
                    <LinedText>Organizações</LinedText>
                    <S.CardsWrapper>
                        <TextCard
                            title="Poli Júnior"
                            detail="Total de Itens: 130"
                            onClick={() => router.push('/organizations/itens')}
                        />
                        <TextCard
                            title="Thunder Ratz"
                            detail="Total de Itens: 100"
                            onClick={() => router.push('/organizations/itens')}
                        />
                        <TextCard
                            title="Laboratório 2"
                            detail="Total de Itens: 320"
                            onClick={() => router.push('/organizations/itens')}
                        />
                    </S.CardsWrapper>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default OrgSearchTemplate;
