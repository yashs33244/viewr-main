import { Metadata } from "next";

export const calendlyUrl = "https://calendly.com/meet-prabal/let-s-discuss";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "ViewR - AI Surveillance & Analytics Platform",
        template: `%s | ViewR`
    },
    description: "ViewR provides advanced AI surveillance solutions with 98% accuracy in recognition and comprehensive analytics. Transform your security with intelligent monitoring.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "ViewR - AI Surveillance & Analytics Platform",
        description: "ViewR provides advanced AI surveillance solutions with 98% accuracy in recognition and comprehensive analytics. Transform your security with intelligent monitoring.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@viewr_in",
        title: "ViewR - AI Surveillance & Analytics Platform",
        description: "ViewR provides advanced AI surveillance solutions with 98% accuracy in recognition and comprehensive analytics. Transform your security with intelligent monitoring.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://viewr.in"),
};
