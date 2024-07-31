import { db } from "@/lib/db"

export const getUserByEmail = async (email : string) => {
    try {
        const data = await db.user.findUnique({
            where: {email}
        })
        return data;
    } catch (error) {
        return error;
    }
}

export const getUserById = async (id: string ) =>{
    try {
        const data = await db.user.findUnique({
            where: {id}
        })
        return data;
    } catch (error) {
        return error;
    }
}

const updateUser = async (id: string) => {
    try {
        const data = db.user.update({
            where: {id},
            data : {}
        })
    } catch (error) {
        
    }
}

export const deleteUser = async (id: string) => {
    try {
        const data = await db.user.delete({
            where : {id}
        })
    } catch (error) {
        
    }
}