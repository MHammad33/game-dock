import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		const fetchData = async () => {
			try {
				const response = await apiClient.get<FetchResponse<T>>(endpoint, {
					signal: controller.signal,
				});
				setData(response.data.results);
				setIsLoading(false);
			} catch (error) {
				if (error instanceof CanceledError) return;
				setError("Failed to fetch genres");
				console.error(error);
				setIsLoading(false);
			}
		};

		fetchData();

		return () => controller.abort();
	}, [endpoint]);

	return { data, error, isLoading };
};

export default useData;
