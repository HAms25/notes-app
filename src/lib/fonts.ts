import { Montserrat, Nunito, Poppins } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
})

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
})

export const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
    weight: ["300", "400", "500", "600", "700", "800"],
})

