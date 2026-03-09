import type { AboutContent } from "../types/index"
import aboutLogo from "../assets/about-logo@3x 2.svg"
import googlePlayIcon from "../assets/googlePlayIcon.svg"
import appStoreIcon from "../assets/appleStoreIcon.svg"

export const aboutContent: AboutContent = {
    title: "About Us:",
    logo: aboutLogo,
    paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.
`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.`
    ],

    storeButtons: [
        {
            label: ["Get it on", " Google Play"],
            image: googlePlayIcon,
            alt: "Google Play"
        },
        {
            label: ["Download on the","App Store"],
            image: appStoreIcon,
            alt: "App Store"
        }
    ]
}