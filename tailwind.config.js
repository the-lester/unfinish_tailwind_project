/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
 
  theme: {
    extend: {
      colors:{
        neworange:{100 : "#FAB873"},
        myblack:{ 100 : "#3F3F46"},
        brown :{
          100 :  "#ECE0D1" , 
          300 :  "#DBC1AC" , 
          600 :  "#967259" ,
          900 :  "#634832" }
        },
      boxshadow :{
        "shadow_normal " : "0px 1px 10px rgba(0 , 0 ,0, 0.5 )"
        },
        borderRadius:{
          "4xl":"2rem"
        },
        fontFamily:{
            "dana_normal": "dana-normal",
            "dana_medium": "dana-medium",
            "dana_regular": "dana-regular",
            "morabba_bold": "Morabba-bold",
            "morabba_light": "Morabba-light",
            "morabba_medium": "Morabba-medium"
        },   
        letterSpacing:{
          "tracking-tighter":"-0.065"
        }
    }
  },
  plugins: [],
}

