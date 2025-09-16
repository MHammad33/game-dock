import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
	id: number;
	name: string;
}

interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		const fetchGenres = async () => {
			try {
				const response = await apiClient.get<FetchGenresResponse>("/genres");
				setGenres(response.data.results);
				setIsLoading(false);
			} catch (error) {
				if (error instanceof CanceledError) return;
				setError("Failed to fetch genres");
				console.error(error);
				setIsLoading(false);
			}
		};

		fetchGenres();

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
