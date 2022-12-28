import { createStyles } from "@mantine/core";
import { colors } from "../../constants/colors";

export const useStyles = createStyles((theme) => ({
    avatar: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
        color: 'white',
        borderRadius: '50%',
        height: 55,
        width: 55,
        fontSize: 20,
        fontWeight: 600
    },
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

  }));
  