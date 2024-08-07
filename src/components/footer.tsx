'use client'
import { FaceIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Footer = () => {
	return (
		<footer className="bg-gray-900">
			<div className="w-full max-w-screen-2xl">
				<div className="px-4 py-6 md:flex md:justify-between lg:px-10 lg:py-8">
					<div className="mb-6 flex md:mb-0">
						<div className="flex flex-col items-center">
							<div className="">
								<Link href="/">
									<Image
										width={292.5}
										height={78}
										src="/images/white-logo.png"
										alt="Zeeka Logo"
										className="hidden sm:block"
									/>
									<Image
										width={120}
										height={50}
										src="/images/white-logo.png"
										alt="Zeeka Logo"
										className="sm:hidden"
									/>
								</Link>
							</div>
							<div className="">
								<span className="block self-center whitespace-nowrap text-sm font-semibold  text-white sm:text-xl">
									tt
								</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-white">
								ttt
							</h2>
							<ul className="text-xs capitalize text-white">
								<li className="mb-2">
									<Link href="/" className="hover:underline">
										tt
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										tt
									</Link>
								</li>
								{/* <li className="mb-2">
								<Link href="#" className="hover:underline">
									{footer['pricing']}
								</Link>
							</li> */}
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										tt
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										tt
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:underline">
									ttt
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-white">
								tt
							</h2>
							<ul className="text-xs capitalize text-white">
								<li className="mb-2">
									<Link href="#" className="hover:underline ">
										tt
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline ">
										tt
									</Link>
								</li>
								<li className="mb-0">
									<Link href="#" className="hover:underline ">
										tt
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-white">
								tt
							</h2>
							<ul className="text-xs capitalize text-white">
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										tt
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										jj
									</Link>
								</li>

								<li className="mb-0">
									<Link href="#" className="hover:underline">
										ee
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center space-y-3 overflow-hidden px-4 md:flex-row md:justify-between md:space-y-0 lg:px-10">
					<div className="md:max-w-lg">
						<p className="break-all text-xs text-white md:text-sm">
							desxription
						</p>
					</div>
					<div className="flex flex-row space-x-2 md:space-x-3">
						<Image
							width={208}
							height={65}
							src="/images/app-store.png"
							alt="Zeeka App Store"
							className="hidden sm:block"
						/>
						<Image
							width={120}
							height={48}
							src="/images/app-store.png"
							alt="Zeeka App Store"
							className="sm:hidden"
						/>

						<Image
							width={208}
							height={65}
							src="/images/google-play.png"
							alt="Zeeka Google Play"
							className="hidden sm:block"
						/>
						<Image
							width={120}
							height={48}
							src="/images/google-play.png"
							alt="Zeeka Google Play"
							className="sm:hidden"
						/>
					</div>
				</div>

				<hr className="my-6 border-gray-200 lg:my-8" />

				<div className="px-4 py-6 sm:flex sm:items-center sm:justify-between lg:px-10 lg:py-8">
					<div className="space-x-3">
						<span className="text-sm text-white sm:text-center">
							Copyright© 2023 Zeeka.copyrtr
						</span>
						<span className="text-xs text-white sm:text-center">
							cookies
						</span>
						<span className="text-xs text-white sm:text-center">
							site map
						</span>
						<span className="text-xs text-white sm:text-center">
							megacy
						</span>
					</div>
					<div className="mt-4 flex sm:mt-0 sm:justify-center sm:space-x-2">
						<Link href="#" target="_blank" className="text-white">
                            <TwitterLogoIcon className="cursor-pointer h-10 w-10 hover:text-gray-500" />
						</Link>
						<Link href="#" target="_blank" className="text-white">
                            <FaceIcon className="cursor-pointer h-10 w-10 hover:text-gray-500" />
						</Link>
						<Link href="#" target="_blank" className="ms-5 text-white">
                            <LinkedInLogoIcon className="cursor-pointer h-10 w-10 hover:text-gray-500" />
						</Link>
						<Link href="#" target="_blank" className="ms-5 text-white">
                            <InstagramLogoIcon className="cursor-pointer h-10 w-10 hover:text-gray-500" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer