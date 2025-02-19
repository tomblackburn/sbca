const { RecoilBridge } = require('recoil');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			dropShadow: {
				glow: [
				  "0 0px 20px rgba(101, 163, 13, 0.2)",
				  "0 0px 65px rgba(101, 163, 13, 0.1)"
				]
			},
			colors: {
				"discord-blurple": "rgb(88,101,242)",
				"code-color": "rgb(53,53,53)",
				"dark-gray-bg": "rgb(1,2,16)",
				"dark-layer-0": "rgb(53,53,53)",
				"dark-layer-1": "rgb(40,40,40)",
				"dark-layer-1point5": "rgb(32,32,32)",
				"dark-layer-2": "rgb(26,26,26)",
				"dark-layer-3": "rgb(20,20,20)",
				"dark-label-2": "rgba(239, 241, 246, 0.75)",
				"dark-divider-border-2": "rgb(61, 61, 61)",
				"dark-fill-2": "hsla(0,0%,100%,.14)",
				"dark-fill-3": "hsla(0,0%,100%,.1)",
				"dark-gray-6": "rgb(138, 138, 138)",
				"dark-gray-7": "rgb(179, 179, 179)",
				"gray-8": "rgb(38, 38, 38)",
				"dark-gray-8": "rgb(219, 219, 219)",
				"brand-orange": "rgb(255 161 22)",
				"brand-orange-s": "rgb(193, 122, 15)",
				"dark-yellow": "rgb(255 192 30)",
				"dark-pink": "rgb(255 55 95)",
				"olive": "rgb(0, 184, 163)",
				"dark-green-s": "rgb(44 187 93)",
				"dark-blue-s": "rgb(10 132 255)",
			},
			keyframes: {
				tinkle: {
					'0%, 100%': { transform: 'rotate(45deg)' },
					
				  },
				vibrate: {
				  '0%, 100%': { transform: 'translateX(0)' },
				  '25%': { transform: 'translateX(-2px)' },
				  '75%': { transform: 'translateX(2px)' },
				},
				bubble: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
				},
				float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-1px)' },
				},
			  },
			  animation: {
				vibrate: 'vibrate 0.3s ease-in-out',
				bubble: 'bubble 0.5s ease-in-out',
				float: 'float 0.1s ease-in-out infinite',
				tinkle: 'rotation 2s infinite linear alternate',
			  },
		},
	},
	plugins: [],
};
