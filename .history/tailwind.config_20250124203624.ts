import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			blob: "blob 7s infinite",
  			morph: "morph 15s linear infinite",
  			'slow-spin': 'spin 20s linear infinite',
  			float: 'float 6s ease-in-out infinite',
  			'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
  			'gradient': 'gradient 8s linear infinite',
  		},
  		keyframes: {
  			blob: {
  				"0%": {
  					transform: "translate(0px, 0px) scale(1)",
  				},
  				"33%": {
  					transform: "translate(30px, -50px) scale(1.1)",
  				},
  				"66%": {
  					transform: "translate(-20px, 20px) scale(0.9)",
  				},
  				"100%": {
  					transform: "translate(0px, 0px) scale(1)",
  				},
  			},
  			morph: {
  				"0%": {
  					transform: "translate(0px, 0px) scale(1)",
  					borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  				},
  				"25%": {
  					transform: "translate(20px, -30px) scale(1.1)",
  					borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
  				},
  				"50%": {
  					transform: "translate(-20px, 20px) scale(0.9)",
  					borderRadius: "40% 60% 30% 70%/40% 40% 60% 50%",
  				},
  				"75%": {
  					transform: "translate(30px, 30px) scale(1.05)",
  					borderRadius: "60% 40% 70% 30%/60% 30% 70% 40%",
  				},
  				"100%": {
  					transform: "translate(0px, 0px) scale(1)",
  					borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  				},
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)',
  				},
  				'50%': {
  					transform: 'translateY(-20px)',
  				},
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
