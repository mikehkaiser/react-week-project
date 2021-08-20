let token = 'd343da17b30bee360a83e8a59bd24ad09db6ef32ce875796';

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://bikes-inventory.herokuapp.com/api/bikes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('https://bikes-inventory.herokuapp.com/api/bikes')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://bikes-inventory.herokuapp.com/api/bikes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://bikes-inventory.herokuapp.com/api/bikes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://bikes-inventory.herokuapp.com/api/bikes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    },
};