import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { useStyles } from "./LoginStyles";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { classes } = useStyles();

    return (
        <Container size={420} className={classes.login}>
            <Title
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Welcome back!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Username"
                    placeholder="johndoe123"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                />
                <Button
                    fullWidth
                    mt="xl"
                    onClick={() => {
                        axios
                            .get(
                                `https://centarnit.deta.dev/admin/login?username=${username}&password=${password}`
                            )
                            .then((r: any) => {
                                if (r.data === 200) {
                                    sessionStorage.setItem("login", r.data);
                                    window.location.reload();
                                }
                            });
                    }}
                >
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
};
