"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

    useEffect(() => {
        const handleShowBtn = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener("scroll", handleShowBtn);

        return () => window.removeEventListener("scroll", handleShowBtn);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showTopBtn ? (
                <button onClick={goToTop}>
                    <FontAwesomeIcon icon={faArrowUpLong} />
                </button>
            ) : null}
        </div>
    );
};
export default ScrollToTop;
