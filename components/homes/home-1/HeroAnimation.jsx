import Script from "next/script";
import { useState, useEffect, useCallback } from "react";

const HeroAnimation = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            {mounted && (
                <>
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
                        strategy="afterInteractive"
                    />
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.2/pixi.min.js"
                        strategy="afterInteractive"
                    />
                    <Script
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/PixiPlugin.min.js"
                        strategy="afterInteractive"
                    />
                    <Script
                        src="/assets/js/hero-animation-bananas.js"
                        strategy="afterInteractive"
                    />
                </>
            )}
        </>
    );
};

export default HeroAnimation;
