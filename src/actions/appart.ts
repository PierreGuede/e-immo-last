
import { db } from "@/lib/db";

export const getAppartementById = async (id: string)=> {
    try {
        const data = await db.appartement.findUnique({
          where: { id : id },
        });
        console.log(data);
        
        return data;
    } catch (error) {
        return error
    }
}

// Lire tous les appartements
export const getAllAppartements =  async () =>{
  try {
    
    const data = await db.appartement.findMany()
    console.log(data);
    
    return data
  } catch (error) {
    
  }
}

