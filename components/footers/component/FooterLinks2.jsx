import { links2 } from "../../../data/footerlink";

export default function FooterLinks2() {
    return (
        <>
            {links2.map((link) => (
                <li key={link.id}>
                    <a href={link.href}>
                        <span className="link-effect">
                            <span className="effect-1">{link.text}</span>
                            <span className="effect-1">{link.text}</span>
                        </span>
                    </a>
                </li>
            ))}
        </>
    );
}
