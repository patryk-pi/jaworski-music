"use client";

import {
    weddingTitle,
    weddingText1,
    // weddingText2,
    // weddingText3,
    companyTitle,
    companyText,
    partyTitle,
    partyText,
} from "@/constants/constants";

import { useState } from "react";
import Event from "./components/Event";
import Link from "next/link";
import WeddingIcon from "./components/WeddingIcon";
import PartyIcon from "./components/PartyIcon";
import BallonIcon from "./components/BallonIcon";
import Title from "./components/Title";
import Arrow from "../Arrow/Arrow";

const Hero = () => {
    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);
    const [isEvent1Visible, setIsEvent1Visible] = useState<boolean>(false);
    const [isEvent2Visible, setIsEvent2Visible] = useState<boolean>(false);
    const [isEvent3Visible, setIsEvent3Visible] = useState<boolean>(false);
    const [isBelow, setIsBelow] = useState<boolean>(false);

    return (
        <section className="hero" id="hero">
            <div className="hero__box">
                <Title
                    visible={isElementVisible}
                    setVisible={setIsElementVisible}
                    id="heroHeader"
                    below={isBelow}
                    setBelow={setIsBelow}
                />
                <div className="hero__container">
                    <Event
                        icon={<WeddingIcon />}
                        title={weddingTitle}
                        text1={weddingText1}
                        visible={isEvent1Visible}
                        setVisible={setIsEvent1Visible}
                        number={1}
                        // text2={weddingText2}
                        // text3={weddingText3}
                    />
                    <Event
                        icon={<PartyIcon />}
                        title={companyTitle}
                        text1={companyText}
                        visible={isEvent2Visible}
                        setVisible={setIsEvent2Visible}
                        number={2}
                    />
                    <Event
                        icon={<BallonIcon />}
                        title={partyTitle}
                        text1={partyText}
                        visible={isEvent3Visible}
                        setVisible={setIsEvent3Visible}
                        number={3}
                    />
                </div>
                <Link href="/oferta" className="hero__button">
                    Zobacz ofertę
                </Link>
            </div>
            <Arrow
                id="hero"
                state={isElementVisible}
                setState={setIsElementVisible}
                isBelow={isBelow}
            />
        </section>
    );
};
export default Hero;
