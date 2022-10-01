import { IconCheck, IconBan } from "@tabler/icons";
import { ActionIcon, Tooltip } from "@mantine/core";
import axios from "axios";
import { useStyles } from "./UserItemStyles";

const data = [
    { icon: IconCheck, term: "activate", color: "green", label: "Approve" },
    { icon: IconBan, term: "deactivate", color: "red", label: "Reject" },
];

const handleClick = (term: string, username: string) => {
    axios
        .get(`https://orxdmz.deta.dev/admin/${term}?username=${username}`)
        .then(() => window.location.reload());
};
export const UserItemButtons = (props: { item: any }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.buttons}>
            {data.map((item) => {
                return (
                    <Tooltip label={item.label} position="left">
                        <ActionIcon
                            color={item.color}
                            size="xl"
                            radius="xl"
                            variant="filled"
                            component="button"
                            onClick={() =>
                                handleClick(item.term, props.item.username)
                            }
                        >
                            <item.icon size={30} />
                        </ActionIcon>
                    </Tooltip>
                );
            })}
        </div>
    );
};
