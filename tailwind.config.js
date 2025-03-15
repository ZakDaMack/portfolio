/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			backdrop: 'linear-gradient(90deg, black 0%, transparent 60%), url("/backdrop.jpg")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
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
  			},
			nord: {
        		'0': 'var(--nord0)',
				'1': 'var(--nord1)',
				'2': 'var(--nord2)',
				'3': 'var(--nord3)',
				'4': 'var(--nord4)',
				'5': 'var(--nord5)',
				'6': 'var(--nord6)',
				'7': 'var(--nord7)',
				'8': 'var(--nord8)',
				'9': 'var(--nord9)',
				'10': 'var(--nord10)',
				'11': 'var(--nord11)',
				'12': 'var(--nord12)',
				'13': 'var(--nord13)',
				'14': 'var(--nord14)',
				'15': 'var(--nord15)',
			},
  		},
		listStyleType: {
			dash: `'- '`
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
