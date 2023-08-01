/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#0B0D17",
        secondarycolor: "#D0D6F9",
        graycolor: "#979797",
      },
      fontFamily: {
        'Barlow': ["Barlow Condensed"],
        'Bellefair': ["Bellefair"],
      },
      backgroundImage: {
        homeBgDesktop: "url('../src/assets/images/home/background-home-desktop.jpg')",
        homeBgTablet: "url('../src/assets/images/home/background-home-tablet.jpg')",
        homeBgMobile: "url('../src/assets/images/home/background-home-mobile.jpg')",
        destinationBgDesktop: "url('../src/assets/images/destination/background-destination-desktop.jpg')",
        destinationBgTablet: "url('../src/assets/images/destination/background-destination-tablet.jpg')",
        destinationBgMobile: "url('../src/assets/images/destination/background-destination-mobile.jpg')",
        crewBgDesktop: "url('../src/assets/images/crew/background-crew-desktop.jpg')",
        crewBgTablet: "url('../src/assets/images/crew/background-crew-tablet.jpg')",
        crewBgMobile: "url('../src/assets/images/crew/background-crew-mobile.jpg')",
        technologyBgDesktop: "url('../src/assets/images/technology/background-technology-desktop.jpg')",
        technologyBgTablet: "url('../src/assets/images/technology/background-technology-tablet.jpg')",
        technologyBgMobile: "url('../src/assets/images/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
}