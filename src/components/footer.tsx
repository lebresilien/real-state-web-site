'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './ui/icons'

const Footer = () => {
	return (
		<footer className="">
			<div className="w-full max-w-screen-2xl">
				<div className="bg-gray-800 px-4 py-6 md:flex md:space-x-60 lg:px-10 lg:py-8">
					<div className="mb-6 flex md:mb-0">
						<div className="flex flex-col items-center space-y-1 md:space-y-2">
							<div className="">
								<Link href="/">
									<Image
										width={200}
										height={60}
										src="/images/emi.png"
										alt="Real State Logo"
										className="hidden sm:block"
									/>
									<Image
										width={90}
										height={30}
										src="/images/emi.png"
										alt="Real State Logo"
										className="sm:hidden"
									/>
								</Link>
							</div>
							<div className="max-w-sm md:max-w-sm">
								<p className="text-xs text-center text-white lg:text-sm">
									Votre partenaire de Confiance pour toutes vos Transactions Immobilières au Cameroun.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 md:space-x-24">
						<div>
							<h2 className="mb-6 text-md font-semibold uppercase text-white">
								Navigation
							</h2>
							<ul className="text-sm capitalize text-white">
								<li className="mb-2">
									<Link href="/" className="hover:underline">
										accueil
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										services
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										blog
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										contact
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:underline">
										contact
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-md font-semibold uppercase text-white">
								a propos
							</h2>
							<ul className="text-sm capitalize text-white">
								<li className="mb-2">
									<Link href="#" className="hover:underline ">
										confidentialité
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline ">
										cookies
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
							<h2 className="mb-6 text-md font-semibold uppercase text-white">
								careers
							</h2>
							<ul className="text-sm capitalize text-white">
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										centre d&apos;aide
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#" className="hover:underline">
										faq
									</Link>
								</li>

								<li className="mb-0">
									<Link href="#" className="hover:underline">
										contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <hr className="my-6 border-gray-200 lg:my-8" /> */}

				<div className="bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between lg:px-10 lg:py-8">
					<div className="space-x-3 text-sm">
						<span className="text-white sm:text-center">
							Copyright© 2024 company
						</span>
						<span className="text-white sm:text-center">
							cookies
						</span>
						<span className="text-white sm:text-center">
							site map
						</span>
						<span className="text-white sm:text-center">
							legacy
						</span>
					</div>
					<div className="mt-4 flex sm:mt-0 sm:justify-center sm:space-x-2">
						<Link href="#" target="_blank" className="text-white">
                            <Icon name="twitter-logo" className="" />
						</Link>
						<Link href="#" target="_blank" className="text-white">
                            <Icon name="linkedin-logo" className="cursor-pointer h-5 w-5 hover:text-gray-500" />
						</Link>
						<Link href="#" target="_blank" className="ms-5 text-white">
                            <Icon name="linkedin-logo" className="cursor-pointer h-5 w-5 hover:text-gray-500" />
						</Link>
						<Link href="#" target="_blank" className="ms-5 text-white">
                            <Icon name="instagram-logo" className="cursor-pointer h-5 w-5 hover:text-gray-500" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer