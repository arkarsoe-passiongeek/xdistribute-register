import { generateFormdata } from "@/lib/utils"

export const register = async (formData: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/v1/shop/register`, {
        method: 'POST',
        body: generateFormdata(formData),
    })
    const data = await res.json()
    console.log(data)
    if (res.status === 422) {
        return { data: undefined, error: { data } }
    }
    return { data }
}