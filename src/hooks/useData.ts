import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: [number | undefined]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();
			setIsLoading(true);

			const fetchData = async () => {
				try {
					const response = await apiClient.get<FetchResponse<T>>(endpoint, {
						signal: controller.signal,
						...requestConfig,
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
		},
		deps ? [...deps] : [] // eslint-disable-line react-hooks/exhaustive-deps
	);

	return { data, error, isLoading };
};

export default useData;
