import { useData } from "../../../hooks/useData";
import { useStyles } from "../HomeStyles";
import { UserItem } from "../Users/UserItemComponents/UserItem";

export const Users = () => {
    const { data } = useData({ url: "users" });
    const { classes } = useStyles();
    return (
        <div className={classes.home}>
            {data.map((item: any) => {
                return item.is_active !== true && item.status === "status_on_hold" ? (
                    <UserItem key={item.username} item={item} />
                ) : null;
            })}
        </div>
    );
};
