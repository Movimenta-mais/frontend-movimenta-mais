import {NextResponse} from "next/server";
import {getEquipaments} from "@/services/equipamentService";

export async function GET() {
    return NextResponse.json(await getEquipaments());
}
