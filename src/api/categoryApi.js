import HOST from '../const/host';

export const get = async () => {
    const res = await fetch(
        `${HOST}api/categories`
    )
    const result = await res.json()

    return result
}