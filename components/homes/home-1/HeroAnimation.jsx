import Script from "next/script";
import { useState, useEffect } from "react";

const HeroAnimation = () => {
    const [step1Loaded, setStep1Loaded] = useState(false);
    const [step2Loaded, setStep2Loaded] = useState(false);
    const [step3Loaded, setStep3Loaded] = useState(false);
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
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
                strategy="afterInteractive"
                onLoad={() => setStep1Loaded(true)}
            />
            {step1Loaded && (
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.2/pixi.min.js"
                    strategy="afterInteractive"
                    onLoad={() => setStep2Loaded(true)}
                />
            )}
            {step2Loaded && (
                <Script
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/PixiPlugin.min.js"
                    strategy="afterInteractive"
                    onLoad={() => setStep3Loaded(true)}
                />
            )}
            {step3Loaded && (
                <Script
                    src="/assets/js/hero-animation-bananas.js"
                    strategy="afterInteractive"
                />
            )}
        </>
    );
};

export default HeroAnimation;
