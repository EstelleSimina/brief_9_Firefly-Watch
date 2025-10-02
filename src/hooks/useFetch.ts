import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

export function useFetch<T>(path: string): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!path) {
            setIsLoading(false);
            return;
        }
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                    }
                };

                const url = `${import.meta.env.VITE_API_BASE_URL}${path}`;
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }

                const json = await response.json() as T;
                
                if (isMounted) {
                    setData(json);
                }

            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, [path]);

    return { data, isLoading, error };
}
