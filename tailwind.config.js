/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'calc(var(--radius) - 8px)',
  			md: 'calc(var(--radius) - 4px)',
  			sm: 'calc(var(--radius) - 2px)'
		  },
		  fontFamily: {
			  rozanovaBold: ['rozanovaBold', 'Inter'],
			  rozanovaThin: ['rozanovaThin', 'Inter'],
			  sourceSans: ['sourceSansRegular', 'Inter'],
			  sourceSansItalic: ['sourceSansItalic', 'Inter'],
			  sourceSansBold: ['sourceSansBold', 'Inter'],
			  robotoBold: ['robotoBold', 'Inter'],
			  robotoMedium: ['robotoMedium', 'Inter'],
			},
		  backgroundColor: {
			  redish: '#C4000C',
			  orangish: '#F68100',
			  cyanish: '#06B5C2',
			  yellowish: '#EFD100',
			  greenish: '#68BC25',
			  greyish: '#EEEEEE',
			  inputGrey: '#F4F4F4'
			},
		  colors: {
				 redish: '#C4000C',
			  orangish: '#F68100',
			  cyanish: '#06B5C2',
			  yellowish: '#EFD100',
			  greenish: '#68BC25',
			  greyish: '#EEEEEE',
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

