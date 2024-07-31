import { db } from "@/lib/db";
import { generateFakeData } from "@/lib/seed";

export default async function Page (){
    generateFakeData()
    const user = await db.user.findFirst({
        where : {
            id : "49410f17-5662-436a-852b-f253d64b545e"
        }
    });
    console.log(user);
    return(
        <div>
            ok
           {/* {user.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
             */}
             {user?.name}
        </div>
    )
    
}