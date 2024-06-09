"use client";
import { useState } from "react";
import SiteMenu from "./SiteMenu";

const NavBar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className='navbar md:top-0 md:absolute md:z-40 bg-white'>
				<div className='flex-none '>
					{isMenuOpen ? (
						<>
							<div className='md:ml-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='md:ml-0 ml-2 h-7 w-7 md:text-white  text-black opacity-100'
									fill='none'
									viewBox='0 0 24 24'
									stroke='black'
									onClick={toggleMenu}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>{" "}
							</div>
							
						</>
					) : (
						<>
							<input
								type='checkbox'
								id='menuToggle'
								className='hidden'
							/>
							<label
								htmlFor='menuToggle'
								className='block  cursor-pointer opacity-100'
								onClick={toggleMenu}
							>
								<div className='ml-4 *:w-6 h-0.5  bg-black mb-1'></div>
								<div className='ml-4 w-6 h-0.5  bg-black mb-1'></div>
								<div className='ml-4 w-6 h-0.5  bg-black'></div>
							</label>
						</>
					)}
				</div>
				<div
					onClick={() => {
						closeMenu();
					}}
					className='flex-1'
				>
					<a
						className='head mx-auto text-black btn btn-ghost text-xl font-bold'
						href='/'
					>
						DrSummayyah
					</a>
				</div>
				{/* <div className='flex-none'>
				<button className='btn btn-square btn-ghost'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='inline-block w-5 h-5 md:stroke-white stroke-black'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
						></path>
					</svg>
				</button>
			</div> */}
			</div>

			{isMenuOpen && (
				<SiteMenu closeMenu={closeMenu} />
			)}
		</>
	);
};

export default NavBar;
