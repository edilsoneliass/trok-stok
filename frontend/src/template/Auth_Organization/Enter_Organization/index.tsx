/* eslint-disable no-console */
import { SelectInput } from 'components/Inputs';
import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import OrganizationService from 'services/OrganizationService';
import Organization from 'interfaces/Organization';
import { useEffect, useState } from 'react';
import UserService from 'services/UserService';
import * as S from './styles';

const EnterOrganizationTemplate = () => {
    const router = useRouter();
    const [organizations, setOrganizations] = useState<Organization[]>([
        { name: 'Carregando...', id: 0 }
    ]);
    const [selectedOrg, setSelectedOrg] = useState(0);
    const [selectedRole, setSelectedRole] = useState('');

    const handleEnter = async () => {
        try {
            await UserService.enterOrganization({
                organization: selectedOrg,
                requested_role: selectedRole
            });
            router.push('/org_auth/my_organizations');
        } catch (error) {
            // eslint-disable-next-line no-alert
            window.alert('erro na entrada na organização');
        }
    };

    const getAllOrgs = async () => {
        try {
            const orgs = await OrganizationService.getAllOrganizations();
            setOrganizations(orgs);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('erro ao obter as organizações');
        }
    };

    useEffect(() => {
        console.log('fazendo requisição');
        getAllOrgs();
    }, []);

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Entrar em Organização</S.Title>
                <S.InputDiv>
                    <LinedText>Entrar em Organização</LinedText>
                    <SelectInput
                        itens={
                            organizations &&
                            organizations.map((org) => ({
                                name: org.name,
                                value: org.id
                            }))
                        }
                        label="Escolha sua Organização"
                        onChange={(e) => {
                            setSelectedOrg(e.target.value as number);
                        }}
                    />
                    <SelectInput
                        itens={[
                            { name: 'Membro', value: 'membro' },
                            { name: 'Capitão', value: 'capitão' }
                        ]}
                        label="Cargo de Entrada"
                        onChange={(e) => {
                            setSelectedRole(e.target.value as string);
                        }}
                    />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                handleEnter();
                            }}
                        >
                            Solicitar Entrada
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Criar a minha Organização</LinedText>
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/register');
                            }}
                        >
                            Criar Organização
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default EnterOrganizationTemplate;
