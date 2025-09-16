import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const dummyFoods = [
	{ id: 1, name: 'Masala Dosa', desc: 'Crispy dosa with potato masala', price: 80, image: '' },
	{ id: 2, name: 'Paneer Butter Masala', desc: 'Creamy paneer curry', price: 150, image: '' },
	{ id: 3, name: 'Chicken Biryani', desc: 'Aromatic biryani with raita', price: 200, image: '' },
	{ id: 4, name: 'Veg Thali', desc: 'Mixed veg + roti', price: 120, image: '' },
]

const dummyReels = [
	{ id: 1, title: 'Spicy Tikka Prep', src: '' },
	{ id: 2, title: 'Perfect Dosa Flip', src: '' },
	{ id: 3, title: 'Biryani Layering', src: '' },
]

const UserHome = () => {
	const [query, setQuery] = useState('')
	const [foods] = useState(dummyFoods)
	const [reels] = useState(dummyReels)

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		if (!q) return foods
		return foods.filter(f => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q))
	}, [query, foods])

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">GE</div>
						<div>
							<h1 className="text-lg font-bold">GalliEats</h1>
							<div className="text-xs text-gray-500">Delivering from neighbourhood kitchens</div>
						</div>
					</div>
					<nav className="hidden md:flex gap-4 items-center">
						<Link to="/user/login" className="text-sm text-gray-700">Login</Link>
						<Link to="/user/register" className="text-sm text-red-600 font-semibold">Register</Link>
					</nav>
				</div>
			</header>

			<main className="max-w-6xl mx-auto px-4 py-8">
				<section className="mb-6">
					<div className="bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-stretch gap-3">
						<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for dishes or restaurants" className="flex-1 px-4 py-3 border rounded-lg" />
						<button onClick={()=>{}} className="bg-red-600 text-white px-4 py-3 rounded-lg">Search</button>
					</div>
				</section>

				<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2">
						<h2 className="text-xl font-semibold mb-4">Available foods</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{filtered.map(f=> (
								<div key={f.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
									<div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">Image</div>
									<h3 className="font-bold text-lg">{f.name}</h3>
									<p className="text-sm text-gray-600 flex-1">{f.desc}</p>
									<div className="mt-3 flex items-center justify-between">
										<div className="text-red-600 font-bold">₹{f.price}</div>
										<button className="bg-red-600 text-white px-3 py-1 rounded">Add</button>
									</div>
								</div>
							))}
						</div>
					</div>

					<aside className="bg-white rounded-lg shadow p-4">
						<h3 className="font-semibold mb-3">Reels</h3>
						<div className="space-y-3">
							{reels.map(r=> (
								<div key={r.id} className="flex items-center gap-3">
									<div className="w-20 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">Video</div>
									<div className="flex-1">
										<div className="font-medium">{r.title}</div>
										<button className="text-sm text-red-600">Watch</button>
									</div>
								</div>
							))}
						</div>
					</aside>
				</section>
			</main>
		</div>
	)
}

export default UserHome
