import React from "react";
import Head from "next/head";

const Meta = function ({ title, keywords, description, icon }) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="keywords" content={keywords} />
            <meta name="decription" content={description} />
            <link
                rel="icon"
                href="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdaCoinSmall.ecf61ff1.png&w=32&q=75"
            />
            <meta charSet="UTF-8" />
        </Head>
    );
};
Meta.defaultProps = {
    title: "Cardano Shop",
    keywords: "Cardano Shop",
    description: "Cardano Shop",
};

export default Meta;
