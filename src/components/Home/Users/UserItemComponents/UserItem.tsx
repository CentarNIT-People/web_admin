import { Paper, Text, Title } from "@mantine/core";
import { UserItemButtons } from "./UserItemButtons";
import { useStyles } from "./UserItemStyles";

type UserItemType = {
    full_name:string,
    status:string,
    role:string,
    username:string
}

interface userItemInterface {
    item: UserItemType;
}

export const UserItem = (props: userItemInterface) => {
    const { classes } = useStyles();

    return (
        <Paper withBorder className={classes.item}>
            <div>
                <Title>{props.item.full_name}</Title>
                <Text color="dimmed">Status: {props.item.status}</Text>
                <Text color="dimmed">Role: {props.item.role}</Text>
            </div>
            <UserItemButtons item={props.item} />
        </Paper>
    );
};
