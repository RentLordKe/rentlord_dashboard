import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
    Button,
    Stack,
    createStyles,
    Container,
    Paper,
    Divider,
    Grid,
    Notification,
    PasswordInput,
    Box,
    Center
} from '@mantine/core';
import Image from 'next/image';
import { IconCheck, IconHome, IconX } from '@tabler/icons';
import { usePasswordReset } from '../../features/authentication';
import { useViewportSize } from '@mantine/hooks';

import logo from '../../assets/logo.png';
import { colors } from '../../constants/colors';

const useStyles = createStyles((theme) => ({
    forgotBackgroundImage: {
        borderRadius: '40px 0px 0px 40px',
        position: 'relative',
        height: '100%',
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
        margin: '30px 0',
        boxShadow: '0 6px 10px 0 rgba(0,0,0,0.2)',
        '&:hover': {
            opacity: 0.7,
            backgroundColor: `${colors.primaryColor}`,
            textDecoration: 'none'

        }
    },
}));

const ResetPassword: NextPage = () => {
    const { classes } = useStyles();
    const { width } = useViewportSize();
    const { response, form, handleSubmit, clearResponse  } = usePasswordReset();

    return (
        <>
            <Head>
                <title>Rentlord | Reset Password</title>
                <meta name="description" content="Reset password Rentlord" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box style={{ background: colors.lightGrayBackground, height: '100vh' }}>
                <Container mb={50}>
                    <Center>
                        <Button
                            component='a'
                            href='#'
                            leftIcon={<IconHome />}
                            mt={width > 768 ? 60 : 20}
                            radius={10}
                            style={{ border: `2px solid ${colors.primaryColor}`, color: colors.primaryColor, background: 'transparent' }}
                        >
                            back to home
                        </Button>
                    </Center>
                    <Paper withBorder radius={40} mt={40} mb={20}>
                        <Grid>
                            <Grid.Col md={6}>
                                <Stack align="center" justify="center" className={classes.forgotBackgroundImage}>
                                    <Image
                                        src="/reset-password.svg"
                                        height={315}
                                        width={315}
                                        alt="reset password"
                                    />
                                </Stack>
                            </Grid.Col>
                            <Grid.Col md={6} p={40}>
                                {response === 'success' ? (
                                    <Notification icon={<IconCheck size={18} />} color="teal" title="Password Reset Successful" onClose={clearResponse} my="lg">
                                        You can now log in with your new password
                                    </Notification>
                                ) : response ? (
                                    <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} my="lg">
                                        {response}
                                    </Notification>
                                ) : ''
                                }
                                <Center>
                                    <Image
                                        src={logo}
                                        width={180}
                                        height={100}
                                        alt="logo"
                                    />
                                </Center>
                                <Divider label="Reset your password" labelPosition="center" mt="lg" />
                                <form onSubmit={form.onSubmit(() => handleSubmit())}>
                                    <Stack mt={30}>
                                        <PasswordInput
                                            required
                                            label="New Password"
                                            placeholder="Your password"
                                            radius={15}
                                            mt={10}
                                            {...form.getInputProps('password')}
                                        />

                                        <PasswordInput
                                            required
                                            label="Confirm New Password"
                                            placeholder="Confirm password"
                                            radius={15}
                                            mt={10}
                                            {...form.getInputProps('confirmPassword')}
                                        />
                                        <Button type="submit" className={classes.submitButton} size="md">Reset Password</Button>
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

export default ResetPassword;