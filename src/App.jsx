function App() {
	return (
		<>
			<div className='flex h-screen flex-col items-center justify-center bg-gray-900'>
				<h1 className='mb-4 text-xl font-bold text-white'>Hello world</h1>
				<h2 className='mb-4 text-lg text-white'>
					I&apos;m using a combination of top-notch Frontend technologies!
				</h2>
				<div className='flex flex-row'>
					<a
						className='me-2'
						href='https://react.dev/'
						target='_blank'
					>
						<img
							src='https://es.react.dev/favicon.ico'
							alt='React'
							width='32'
						/>
					</a>
					<a
						className='me-2'
						href='https://vitejs.dev/'
						target='_blank'
					>
						<img
							src='https://vitejs.dev/logo.svg'
							alt='ViteJS'
							width='32'
						/>
					</a>
					<a
						className='me-2'
						href='https://prettier.io/'
						target='_blank'
					>
						<img
							src='https://prettier.io/icon.png'
							alt='Prettier'
							width='32'
						/>
					</a>
					<a
						className='me-2'
						href='https://eslint.org/'
						target='_blank'
					>
						<img
							src='https://eslint.org/favicon.ico'
							alt='ESLint'
							width='32'
						/>
					</a>
					<a
						href='https://tailwindcss.com/'
						target='_blank'
					>
						<img
							src='https://tailwindcss.com/favicons/favicon.ico'
							alt='Tailwind CSS'
							width='32'
						/>
					</a>
				</div>
			</div>
		</>
	)
}

export default App
