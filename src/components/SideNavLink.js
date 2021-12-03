import React from "react"
// import icons from grommet-icons
import {
    HomeRounded,
    Checkbox,
    BarChart,
    Magic,
    Manual,
    Link,
    Inherit
} from "grommet-icons"

const SideNav = () => <div className="sidenav">
    <LinkWrapper text="Home" classes="active">
        <HomeRounded color="rgb(56, 47, 157)"/>
    </LinkWrapper>
    <LinkWrapper text="Message">
        <Checkbox />
    </LinkWrapper>
    <LinkWrapper text="SHARE" classes="justify-center active border-none"></LinkWrapper>
    <LinkWrapper text="Ranking">
        <BarChart />
    </LinkWrapper>
    <LinkWrapper text="CHallenge">
        <Magic />
    </LinkWrapper>
    <LinkWrapper text="Party">
        <Manual />
    </LinkWrapper>
    <LinkWrapper text="Connect">
        <Link />
    </LinkWrapper>
    <LinkWrapper text="Parade">
        <Inherit />
    </LinkWrapper>
</div>

const LinkWrapper = ({children, text, classes})=> <div className={`linkWrapper ${classes}`}>
    {children}
    <span>{text}</span>
</div>

export default SideNav;