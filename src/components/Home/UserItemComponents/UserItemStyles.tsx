import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    item: {
        width: "100%",
        display: "flex",
        margin: "2% 0%",
        padding: theme.spacing.xl,
        justifyContent: "space-between",
        height: "25%",
    },
    buttons: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));
