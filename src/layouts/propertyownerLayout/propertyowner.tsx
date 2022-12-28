import { useState, ReactNode } from 'react';
import { Burger, Header, Navbar, Group, MediaQuery, ScrollArea, Text, AppShell, Center } from '@mantine/core';
import {
    IconGauge,
    IconMessage,
    IconUsers,
    IconSitemap,
    IconPower,
    IconBuilding,
    IconHome,
    IconHourglassOff,
    IconCurrencyDollar,
} from '@tabler/icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';

import { UserButton } from '../../components/userButton/userButton';
import { LinksGroup } from '../../components/navbarLinkGroups/navbarLinkGroups';
import { useStyles } from './propertyownerLayout.styles';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../features/authentication';
import logo from '../../assets/logo.png';

type Props = {
    children: ReactNode;
}

export function PropertyOwnerLayout({ children }: Props) {
    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const { classes } = useStyles();
    const { userMe } = useAuthContext();
    const { width } = useViewportSize();

    const getInitials = (nameString: string) => {
        const fullName = nameString.split(' ');
        const initials = fullName.shift()!.charAt(0) + fullName.pop()!.charAt(0);
        return initials.toUpperCase();
    }

    const data = [
        {
            label: 'Main Page',
            icon: IconSitemap,
            link: '/',
            active: router.pathname === '/' ? true : false
        },
        {
            label: 'Dashboard',
            icon: IconGauge,
            link: '/propertyowner',
            active: router.pathname === '/propertyowner' ? true : false
        },
        {
            label: 'Properties',
            icon: IconBuilding,
            index: 1,
            active: router.pathname === '/propertyowner/properties' ? true : false,
        },
        {
            label: 'Payments',
            icon: IconCurrencyDollar,
            link: '/propertyowner/uploads',
            active: router.pathname === '/propertyowner/uploads' ? true : false,
        },
        {
            label: 'Managers',
            icon: IconUsers,
            link: '/propertyowner/students',
            active: router.pathname === '/propertyowner/students' ? true : false,
        },
        { 
            label: 'Units', 
            icon: IconHome, 
            link: '/propertyowner/payments', 
            active: router.pathname === '/propertyowner/payments' ? true : false,
          },
        {
            label: 'Tenants',
            icon: IconUsers,
            link: '/propertyowner/tutors',
            active: router.pathname === '/propertyowner/tutors' ? true : false,
        },
        {
            label: 'Damages',
            icon: IconHourglassOff,
            link: '/propertyowner/live-session',
            active: router.pathname === '/propertyowner/live-session' ? true : false,
        },
        {
            label: 'Messaging',
            icon: IconMessage,
            active: router.pathname === '/propertyowner/send-sms' ? true : router.pathname === '/propertyowner/sent-sms' ? true : false,
            initiallyOpened: router.pathname === '/propertyowner/send-sms' ? true : router.pathname === '/propertyowner/sent-sms' ? true : false,
            links: [
                { label: 'Send SMS', link: '/propertyowner/send-sms', active: router.pathname === '/propertyowner/send-sms' ? true : false, },
                { label: 'Sent SMS', link: '/propertyowner/sent-sms', active: router.pathname === '/propertyowner/sent-sms' ? true : false, },
            ],
        },
    ];

    const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <AppShell
            header={
                <Header height={80} p="md" className={classes.header} withBorder={false}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={colors.primaryColor}
                            mr="xl"
                        />
                    </MediaQuery>
                    <Text fw={700} fz={18} color={colors.primaryColor} ml="lg">MC CLAIRE APARTMENTS</Text>
                    <div>
                        <UserButton
                            initials={getInitials(`${userMe.firstName} ${userMe.lastName}`)}
                            name={`${userMe.firstName} ${userMe.lastName}`}
                            role={`${userMe.email}`}
                        />
                    </div>
                </Header>
            }
            navbar={
                <Navbar height={`cal(100vh - 50px)`} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} p="sm" className={classes.navbar} >
                    <Navbar.Section>
                        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                            <Center>
                                <Image
                                    src={logo}
                                    height={100}
                                    width={150}
                                    alt="logo"
                                />
                            </Center>
                        </MediaQuery>
                    </Navbar.Section>
                    <Navbar.Section grow className={classes.links} component={ScrollArea}>
                        <div className={classes.linksInner}>{links}</div>
                    </Navbar.Section>
                    <Navbar.Section className={classes.footer}>
                        <Group my="lg" ml="xl">
                            <IconPower />
                            <Text>Logout</Text>
                        </Group>
                    </Navbar.Section>
                </Navbar>
            }
        >
            {children}
        </AppShell>

    );
}