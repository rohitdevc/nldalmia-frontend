"use server";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    if(!endpoint) {
        return false as T;
    }

    const baseUrl = process.env.API_DOMAIN_NAME;

    if (!baseUrl) {
        throw new Error("API_DOMAIN_NAME is undefined — check your .env.local");
    }

    const headers: Record<string, string> = {
        ...(options.headers as Record<string, string>),
    };

    headers["Content-Type"] = "application/json";
    
    const res = await fetch(`${baseUrl}${endpoint}`, {
        ...options,
        headers,
        cache: "no-store",
    });
    
    if (!res.ok) {
        if(res.status === 404) {
            return null as T;
        }
        
        const message = await res.text();
        console.error("API ERROR:", endpoint, res.status, message);
        return null as T;
    }
    
    try {
        return (await res.json()) as T;
    } catch {
        return null as T;
    }
}