import { Button, Card, Center, Container, createStyles, Grid, Group, RingProgress, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { PropertyOwnerLayout } from '../../layouts/propertyownerLayout/propertyowner';
import { colors } from '../../constants/colors';



const useStyles = createStyles((theme) => ({
    cardShadow: {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },

    primarySquare: {
        height: 20,
        width: 20,
        background: colors.primaryColor
    },

    secondarySquare: {
        height: 20,
        width: 20,
        background: colors.secondaryColor
    },

    themeButton: {
        backgroundColor: `${colors.primaryColor}`,
        border: `2px solid ${colors.primaryColor}`,
        borderRadius: "10px",
        padding: "10px 20px",
        textAlign: "center",
        color: theme.colors.gray[0],
        fontWeight: 600,
        marginBottom: 15,
        width: 180,
        '&:hover': {
            opacity: 0.7,
            backgroundColor: `${colors.primaryColor}`,
            textDecoration: 'none'

        }
    },
}))



const Dashboard: NextPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Head>
                <title>Rentlord | Property Owner Dashboard</title>
                <meta name="description" content="Property Owner Rentlord" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PropertyOwnerLayout>
                <Container mt={50}>
                    <Grid gutter={30}>
                        <Grid.Col md={4}>
                            <Card radius={40}>
                                <Card.Section>
                                    <Center>
                                        <Image
                                            src="/total-payments.svg"
                                            width={250}
                                            height={250}
                                            alt="Total amount"
                                        />
                                    </Center>
                                </Card.Section>
                                <Stack align="center">
                                    <Text fz={18} fw={500}>Total Amount Received</Text>
                                    <Text fz={20} fw={700} color={colors.secondaryColor}>KES 43,500</Text>
                                    <Button
                                        className={classes.themeButton}
                                    >
                                        See More
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card radius={40}>
                                <Card.Section>
                                    <Center>
                                        <Image
                                            src="/total-houses.svg"
                                            width={250}
                                            height={250}
                                            alt="Total Houses"
                                        />
                                    </Center>
                                </Card.Section>
                                <Stack align="center">
                                    <Text fz={18} fw={500}>Total Number of Houses</Text>
                                    <Text fz={20} fw={700} color={colors.secondaryColor}>40 Houses</Text>
                                    <Button
                                        className={classes.themeButton}
                                    >
                                        See More
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card radius={40}>
                                <Card.Section>
                                    <Center>
                                        <Image
                                            src="/total-tenants.svg"
                                            width={250}
                                            height={250}
                                            alt="Total Tenants"
                                        />
                                    </Center>
                                </Card.Section>
                                <Stack align="center">
                                    <Text fz={18} fw={500}>Total Number of Tenants</Text>
                                    <Text fz={20} fw={700} color={colors.secondaryColor}>30 Tenants</Text>
                                    <Button
                                        className={classes.themeButton}
                                    >
                                        See More
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                    <Grid gutter={30}>
                        <Grid.Col md={8}>
                            <Card radius={40} mt="xl">
                                <Grid>
                                    <Grid.Col md={6}>
                                        <Stack ml="xl" p="md">
                                            <Text fz={20} fw={700}>Houses Occupied</Text>
                                            <Group>
                                                <div className={classes.secondarySquare}></div>
                                                <Text>Occupied</Text>
                                            </Group>
                                            <Group>
                                                <div className={classes.primarySquare}></div>
                                                <Text>Not Occupied</Text>
                                            </Group>
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col md={6}>
                                        <Stack align="center" justify="center" style={{ height: '100%'}}>
                                            <RingProgress 
                                                sections={[
                                                    {value: 30, color: colors.primaryColor, tooltip: '30% Not Occupied'},
                                                    {value: 70, color: colors.secondaryColor, tooltip: '70% Occupied'}
                                                ]}
                                                thickness={16}
                                                label={<Text align='center'>70%</Text>}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card radius={40} p="xl" mt="xl">
                                <Stack align="center">
                                    <Text fz={18} fw={700} color={colors.primaryColor}>SMS Airtime Balance</Text>
                                    <Text fz={25} fw={700} color={colors.secondaryColor}>KES 2,456</Text>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Container>
            </PropertyOwnerLayout>
        </>
    );
}

export default Dashboard;