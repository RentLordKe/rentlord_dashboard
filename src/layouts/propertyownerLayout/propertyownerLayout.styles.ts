import { createStyles } from "@mantine/core";

import { colors } from "../../constants/colors";

export const useStyles = createStyles((theme) => ({
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 30,
        marginBottom: 30,
        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px 20px 20px 0px',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        marginLeft: 330,
        marginRight: 30,
        marginTop: 30,
        borderRadius: 20,
        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        color: colors.primaryColor,
        fontWeight: 600,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },
}));