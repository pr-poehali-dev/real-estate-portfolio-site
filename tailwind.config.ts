import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#9b87f5',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#1A1F2C',
					foreground: '#E5DEFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F8FAFC',
					foreground: '#6B7280'
				},
				accent: {
					DEFAULT: '#D946EF',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1F2937'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'neon': {
					'purple': '#9b87f5',
					'pink': '#D946EF',
					'blue': '#0EA5E9',
					'dark': '#1A1F2C',
					'light': '#E5DEFF'
				},
				'gradient': {
					'from': '#9b87f5',
					'via': '#D946EF', 
					'to': '#0EA5E9'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow': {
					'0%': { boxShadow: '0 0 5px #9b87f5, 0 0 10px #9b87f5, 0 0 15px #9b87f5' },
					'50%': { boxShadow: '0 0 10px #D946EF, 0 0 20px #D946EF, 0 0 30px #D946EF' },
					'100%': { boxShadow: '0 0 5px #9b87f5, 0 0 10px #9b87f5, 0 0 15px #9b87f5' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #9b87f5, 0 0 10px #9b87f5',
						backgroundColor: '#9b87f5'
					},
					'50%': { 
						boxShadow: '0 0 20px #D946EF, 0 0 40px #D946EF',
						backgroundColor: '#D946EF'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'rotate-3d': 'rotate-3d 10s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;