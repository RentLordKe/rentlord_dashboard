import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Anchor, Box, Button, Center, Container, createStyles, Divider, Grid, Notification, Paper, PasswordInput, Stack, TextInput, } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconHome, IconX } from '@tabler/icons';
import { useViewportSize } from '@mantine/hooks';

import { colors } from '../../constants/colors';
import { useLoginUser } from '../../features/authentication';
import loginImage from '../../assets/propertykeys.png';
import logo from '../../assets/logo.png';

const useStyles = createStyles((theme) => ({
    loginBackgroundImage: {
        borderRadius: '40px 0px 0px 40px',
        position: 'relative',
        height: '100%',
        width: '100%',
        [theme.fn.smallerThan("md")]: {
            borderRadius: '40px 40px 0px 0px',
        },
    },

    submitButton: {
        backgroundColor: `${colors.primaryColor}`,
        border: `2px solid ${colors.primaryColor}`,
        borderRadius: "10px",
        padding: "10px 20px",
        textAlign: "center",
        color: theme.colors.gray[0],
        fontWeight: 600,
        margin: '20px 0',
        boxShadow: '0 6px 10px 0 rgba(0,0,0,0.2)',
        '&:hover': {
            opacity: 0.7,
            backgroundColor: `${colors.primaryColor}`,
            textDecoration: 'none'

        }
    },
}));

const Login: NextPage = () => {
    const { classes } = useStyles();
    const router = useRouter()
    const { width } = useViewportSize();
    const { form, handleSubmit, clearResponse, response, userMeData, loading } = useLoginUser();

    return (
        <>
            <Head>
                <title>Rentlord | Login</title>
                <meta name="description" content="Rentlord login page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box style={{ background: colors.lightGrayBackground, height: '100vh' }}>
                <Container>
                    <Center>
                        <Button
                            component='a'
                            href='#'
                            leftIcon={<IconHome />}
                            mt={width > 768 ? 60 : 20}
                            radius={10}
                            style={{ border:`2px solid ${colors.primaryColor}`, color: colors.primaryColor, background: 'transparent' }}
                        >
                            back to home
                        </Button>
                    </Center>
                    <Paper withBorder radius={40} mt={40} mb={20}>
                        <Grid>
                            <Grid.Col md={6}>
                                <Stack align="center" justify="center" style={{ height: '100%' }}>
                                    <Image
                                        src={loginImage}
                                        alt="loginImage"
                                        className={classes.loginBackgroundImage}
                                    />
                                </Stack>
                            </Grid.Col>
                            <Grid.Col md={6} p={40}>
                                {response === "success" ? "" : response ? (
                                    <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse}>
                                        {response}
                                    </Notification>
                                ) : ""}
                                <Center>
                                    <Image
                                        src={logo}
                                        width={180}
                                        height={100}
                                        alt="logo"
                                    />
                                </Center>
                                <Divider label="Welcome back" labelPosition="center" mt="lg" />
                                <form onSubmit={form.onSubmit(() => handleSubmit())}>
                                    <Stack mt={30}>
                                        <TextInput
                                            required
                                            label="Email"
                                            placeholder="hello@gmail.com"
                                            radius={15}
                                            mt={10}
                                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                            error={form.errors.email && 'Invalid email'}
                                        />

                                        <PasswordInput
                                            required
                                            label="Password"
                                            placeholder="Your password"
                                            radius={15}
                                            mt={10}
                                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                            error={form.errors.password && 'Password should include at least 6 characters'}
                                        />
                                        <Anchor
                                            href='/auth/forgot-password'
                                            color="dimmed"
                                            size="xs"
                                        >
                                            Forgot Password?
                                        </Anchor>
                                        <Button type="submit" className={classes.submitButton} size="md" loading={loading}>Login</Button>
                                    </Stack>
                                </form>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}

export default Login;