'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from './ui/icons'

const Footer = () => {
	return (
		<footer className="w-full">
			<div className="w-full max-w-screen-2xl">
				<div className="bg-gray-800 px-4 py-6 md:flex md:space-x-60 lg:px-10 lg:py-8" id="footer">
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
									<Link href="/">
										accueil
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#">
										services
									</Link>
								</li>
								<li className="mb-2">
									<Link href="/blog">
										blog
									</Link>
								</li>
								<li className="mb-2">
									<Link href="/contact-us">
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
									<Link href="#">
										confidentialité
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#">
										cookies
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
									<Link href="#">
										centre d&apos;aide
									</Link>
								</li>
								<li className="mb-2">
									<Link href="#">
										faq
									</Link>
								</li>

								<li>
									<Link href="/contact-us">
										contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="bg-gray-900 px-4 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between lg:px-10 lg:py-8">
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
					<div className="mt-2 flex justify-center space-x-3 md:mt-0 md:mx-8">
						<Link href="#" target="_blank" className="transition duration-500 ease-in-out text-white hover:ease-in hover:text-blue-900">
                            <Icon name="twitter-logo" />
						</Link>
						<Link href="#" target="_blank" className="transition duration-500 ease-in-out text-white hover:ease-in hover:text-blue-90e">
                            <Icon name="linkedin-logo" />
						</Link>
						<Link href="#" target="_blank" className="transition duration-500 ease-in-out text-white hover:ease-in hover:text-blue-90">
                            <Icon name="instagram-logo"/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer