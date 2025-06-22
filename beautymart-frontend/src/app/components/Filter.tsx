"use client";

import { useState } from "react";

const Filter = () => {
    const [category, setCategory] = useState("");
    const [skinType, setSkinType] = useState("");
    const [brand, setBrand] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
 return(
    <div className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
            <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                >
                <option value="">Category</option>
                <option value="moisturizers">Moisturizers</option>
                <option value="face-care">Face Care</option>
                <option value="hair-care">Hair Care</option>
                <option value="body-care">Body Care</option>
            </select>
            {/* Skin Type Filter - only show if Moisturizers is selected */}
            {category === "moisturizers" && (
            <select
                name="skinType"
                value={skinType}
                onChange={(e) => setSkinType(e.target.value)}
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
            >
                <option value="">Skin Type</option>
                <option value="dry">Dry Skin</option>
                <option value="normal">Normal Skin</option>
                <option value="sensitive">Sensitive Skin</option>
            </select>
            )}
            {/* Brand Filter */}
            <select
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                >
                <option value="">Brand</option>
                <option value="loreal">L'Oreal</option>
                <option value="nivea">Nivea</option>
                <option value="ponds">Pond's</option>
                <option value="the-body-shop">The Body Shop</option>
            </select>
            <input
                    type="text"
                    name="min"
                    placeholder="min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            />
            <input
                    type="text"
                    name="max"
                    placeholder="max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            />
        </div>
        <div className="">
            <select
                name="sort"
                id=""
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
                
                >
                <option>Sort By</option>
                <option value="asc price">Price (low to high)</option>
                <option value="desc price">Price (high to low)</option>
                <option value="asc lastUpdated">Newest</option>
                <option value="desc lastUpdated">Oldest</option>
            </select>
        </div>
    </div>
 )
}

export default Filter;