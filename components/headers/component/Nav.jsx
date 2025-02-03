"use client";

import { menuItems } from "../../../data/menu";
import Link from "next/link";

export default function Nav() {
    return (
        <>
            {menuItems.map((elm, i) => (
                <li
                    key={i}
                    className={elm.subMenuItems ? "menu-item-has-children" : ""}
                >
                    {elm.subMenuItems ? (
                        <>
                            <a href={elm.link}>
                                <span className="link-effect">
                                    <span className="effect-1">
                                        {elm.title}
                                    </span>
                                    <span className="effect-1">
                                        {elm.title}
                                    </span>
                                </span>
                            </a>

                            <ul className="sub-menu">
                                {elm.subMenuItems.map((elm2, i2) => (
                                    <li
                                        key={i2}
                                        className={
                                            elm2.subMenuItems
                                                ? "menu-item-has-children"
                                                : ""
                                        }
                                    >
                                        {elm2.subMenuItems ? (
                                            <>
                                                <a href={elm2.link}>
                                                    {elm2.title}
                                                </a>
                                                <ul className="sub-menu">
                                                    {elm2.subMenuItems.map(
                                                        (elm3, i3) => (
                                                            <li key={i3}>
                                                                <Link
                                                                    scroll={
                                                                        true
                                                                    }
                                                                    href={
                                                                        elm3.link
                                                                    }
                                                                >
                                                                    {elm3.label}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                scroll={true}
                                                href={elm2.link}
                                            >
                                                {elm2.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link scroll={true} href={elm.link}>
                            <span className="link-effect">
                                <span className="effect-1">{elm.title}</span>
                                <span className="effect-1">{elm.title}</span>
                            </span>
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
}
