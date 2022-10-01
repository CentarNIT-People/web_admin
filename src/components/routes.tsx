import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Navbar/Navbar";
import { Header } from "./Header/Header";
import { useStyles } from "./Home/HomeStyles";
import { Home } from "./Home/Home";

export const AppRoutes = () => {
    const { classes } = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <AppNavbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="/news" element={<h1>News</h1>} />
                    <Route path="/projects" element={<h1>Projects</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
