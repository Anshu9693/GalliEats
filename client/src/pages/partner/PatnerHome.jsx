import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PartnerHome = () => {
	const [foods, setFoods] = useState([
		{ id: 1, name: 'Classic Burger', price: 120, desc: 'Juicy burger with fries' }
	])

	const [reels, setReels] = useState([
		{ id: 1, title: 'Making fresh burgers' }
	])

	const handleFoodUpload = (e) => {
		e.preventDefault()
		const name = e.target.name.value
		const price = e.target.price.value
		const desc = e.target.desc.value
		const item = { id: Date.now(), name, price, desc }
		setFoods(prev => [item, ...prev])
		e.target.reset()
	}

	const handleReelUpload = (e) => {
		e.preventDefault()
		const title = e.target.title.value
		const item = { id: Date.now(), title }
		setReels(prev => [item, ...prev])
		e.target.reset()
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">GE</div>
						<div>
							<h1 className="text-lg font-bold">Partner dashboard</h1>
							<div className="text-xs text-gray-500">Manage your menu and reels</div>
						</div>
					</div>
					<nav className="hidden md:flex gap-4 items-center">
						<Link to="/partner/login" className="text-sm text-gray-700">Logout</Link>
					</nav>
				</div>
			</header>

			<main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
				<section className="lg:col-span-2">
					<h2 className="text-xl font-semibold mb-4">Your foods</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{foods.map(f=> (
							<div key={f.id} className="bg-white rounded-lg shadow p-4">
								<h3 className="font-bold">{f.name}</h3>
								<p className="text-sm text-gray-600">{f.desc}</p>
								<div className="mt-2 text-red-600 font-semibold">₹{f.price}</div>
							</div>
						))}
					</div>

					<h2 className="text-xl font-semibold my-4">Uploaded reels</h2>
					<div className="space-y-3">
						{reels.map(r=> (
							<div key={r.id} className="bg-white rounded-lg shadow p-3">{r.title}</div>
						))}
					</div>
				</section>

				<aside>
					<div className="bg-white rounded-lg shadow p-4 mb-4">
						<h3 className="font-semibold mb-2">Upload food</h3>
						<form onSubmit={handleFoodUpload} className="space-y-3">
							<input name="name" placeholder="Food name" className="w-full px-3 py-2 border rounded" />
							<input name="price" placeholder="Price" className="w-full px-3 py-2 border rounded" />
							<input name="desc" placeholder="Short desc" className="w-full px-3 py-2 border rounded" />
							<button className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white py-2 rounded">Upload food</button>
						</form>
					</div>

					<div className="bg-white rounded-lg shadow p-4">
						<h3 className="font-semibold mb-2">Upload reel</h3>
						<form onSubmit={handleReelUpload} className="space-y-3">
							<input name="title" placeholder="Reel title" className="w-full px-3 py-2 border rounded" />
							<input type="file" name="file" className="w-full" />
							<button className="w-full bg-red-600 text-white py-2 rounded">Upload reel</button>
						</form>
					</div>
				</aside>
			</main>
		</div>
	)
}

export default PartnerHome
