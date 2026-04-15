import useUsers from "../hooks/useUsers";

export default function Users() {
    const {
        filteredUsers,
        search,
        setSearch,
        city,
        setCity,
        sortOrder,
        setSortOrder,
        cities,
        loading,
        error,
    } = useUsers();

    if (loading) return <p>Loading users...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Users</h2>

            {/* Controls */}
            <div className="flex gap-3 mb-4 flex-wrap">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border px-3 py-1 rounded-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border px-3 py-1 rounded-lg"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">All Cities</option>
                    {cities.map((c, i) => (
                        <option key={i} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                <button
                    className="border px-3 py-1 rounded-lg"
                    onClick={() =>
                        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                    }
                >
                    Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </button>
            </div>

            {/* Table */}
            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Company</th>
                        <th className="p-2">City</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-t hover:bg-gray-50">
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.company.name}</td>
                            <td className="p-2">{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredUsers.length === 0 && (
                <p className="text-gray-500 mt-4">No users found</p>
            )}
        </div>
    );
}