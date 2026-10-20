// @ts-nocheck
import { useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

export default function ParticleBack(prop:any) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    const options = useMemo(
        () => ({
            preset: "snow",
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: false,
                        area: 400
                    }
                },
                color: {
                    value: ["#47caff", "#818CF8", "#2DD4BF", "#FB7085"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.6
                },
                size: {
                    value: {min: 1, max: 4}
                },
                links: {
                    enable: true,
                    distance: 200,
                    color: "#808080",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: "out"
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    onClick: {
                        enable: false,
                        mode: "push"
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1
                        }
                    },
                    push: {
                        quantity: 1
                    }
                }
            }
        }), []);


    return (
        <Particles options={options}>
            {prop.children}
        </Particles>
    )
}