import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars, IconWorld } from "@tabler/icons";

export function ToggleTheme() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <ActionIcon
                size="xl"
                component="a"
                href="https://centarnit.live"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                    color: theme.colors.blue[4],
                })}
            >
                {colorScheme === "dark" ? (
                    <IconWorld size={18} />
                ) : (
                    <IconWorld size={18} />
                )}
            </ActionIcon>
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="xl"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                    color:
                        theme.colorScheme === "dark"
                            ? theme.colors.yellow[5]
                            : theme.colors.blue[4],
                })}
            >
                {colorScheme === "dark" ? (
                    <IconSun size={18} />
                ) : (
                    <IconMoonStars size={18} />
                )}
            </ActionIcon>
        </Group>
    );
}
