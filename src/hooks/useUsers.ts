import { useEffect, useState } from "react";
type Address = {
    city: string;
};

type Company = {
    name: string;
};

export type User = {
    id: number;
    name: string;
    email: string;
    address: Address;
    company: Company;
};

type SortOrder = "asc" | "desc";

type UseUsersReturn = {
    filteredUsers: User[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    sortOrder: SortOrder;
    setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
    cities: string[];
    loading: boolean;
    error: string;
};

export default function useUsers(): UseUsersReturn {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const [search, setSearch] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchUsers = async (): Promise<User[]> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        return res.json();
    };

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setFilteredUsers(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    useEffect(() => {
        let data = [...users];

        // Search
        if (search) {
            data = data.filter(
                (u) =>
                    u.name.toLowerCase().includes(search.toLowerCase()) ||
                    u.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter
        if (city) {
            data = data.filter((u) => u.address.city === city);
        }

        // Sort
        data.sort((a, b) =>
            sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );

        setFilteredUsers(data);
    }, [search, city, sortOrder, users]);

    const cities: string[] = [
        ...new Set(users.map((u) => u.address.city)),
    ];

    return {
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
    };
}