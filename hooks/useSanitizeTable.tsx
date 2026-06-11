import { useEffect } from "react";

const cleanElement = (el: Element) => {
    if (!(el instanceof HTMLElement)) return;

    el.style.cssText = "";

    for (const attr of Array.from(el.attributes)) {
        if (attr.name === "colspan" || attr.name === "rowspan") continue;
        
        el.removeAttribute(attr.name);
    }
};

export const useSanitizeTable = () => {
    useEffect(() => {
        const wrappers = document.querySelectorAll(".responsive-table");
        if (!wrappers.length) return;

        wrappers.forEach((wrapper) => {
            wrapper.classList.add("overflow-x-auto", "w-full");

            const table = wrapper.querySelector("table");
            if (!table) return;

            cleanElement(table);

            table.classList.add(
                "w-max",
                "min-w-full",
                "text-[#4E4E4E]",
                "text-center",
                "my-5"
            );

            const headers = Array.from(table.querySelectorAll("thead th")).map(
                (th) => th.textContent?.trim() || ""
            );

            table.querySelectorAll("tr, td, th").forEach((el) => {
                const tag = el.tagName.toLowerCase();

                const index = Array.from(el.parentNode?.children || []).indexOf(el);
                const header = headers[index];

                cleanElement(el);

                if (tag === "td" || tag === "th") {
                    el.classList.add("text-center", "py-2");
                }

                /*
                if (tag === "td" && header) {
                    el.setAttribute("data-label", header);
                } */
            });
        });
    }, []);
};