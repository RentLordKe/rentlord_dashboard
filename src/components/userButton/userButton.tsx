import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

import { useStyles } from './userButton.styles';

interface UserButtonProps extends UnstyledButtonProps {
  initials: string;
  name: string;
  role: string;
  icon?: React.ReactNode;
}

export function UserButton({ initials, name, role, icon, ...others }: UserButtonProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <div className={classes.avatar}>
          {initials}
        </div>
        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {role}
          </Text>
        </div>

        {icon || <IconChevronDown size={18} stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
}