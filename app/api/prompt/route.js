import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
        
        const prompts = await Prompt.find({}).populate
        ("creator");

        return new Response(JSON.stringify(prompts), {statust: 200})
    } catch (error) {
        return new Response(("Failed to fetch all prompts"), {statust: 500})
    }
}