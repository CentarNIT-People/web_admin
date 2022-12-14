import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    home: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "5% 10%",
    },
    app: {
        display: "flex",
        [`@media (max-width: 1000px)`]: {
            flexDirection: "column",
        },
    },
}));
