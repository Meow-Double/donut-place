import {useMemo} from "react"


export const useSortedItems = (items, sort) => {
    const sortedItems = useMemo(() => {
        if (sort) {
            return [...items].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return items;
    }, [items, sort]);

    return sortedItems;
}

export const useFilter = (items, sort, query) => {
    const sortedItems = useSortedItems(items, sort);
    const sortedAndSearchItems = useMemo(() => {
        return sortedItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedItems])
    return sortedAndSearchItems;
}


export const useSortNumber = (items, sort) => {
    const arr = [...items];

    if (sort === "up") {
        return Object.keys(arr).sort().reverse().map(key=> ({...arr[key],id:arr[key].id}));
    }
    if (sort === "down ") {
        return Object.keys(arr).sort().map(key=> ({...arr[key],id:arr[key].id}));
    }
    return items;
}