import { useData } from "../../hooks/useData";
import { useStyles } from "./HomeStyles";
import { UserItem } from "./UserItemComponents/UserItem";

export const Home = () => {
    const { data } = useData({ url: "users" });
    const { classes } = useStyles();
    return (
        <div className={classes.home}>
            {data.map((item: any) => {
                console.log(item.is_active);
                return item.is_active !== true ? (
                    <UserItem key={item.username} item={item} />
                ) : null;
            })}
        </div>
    );
};
